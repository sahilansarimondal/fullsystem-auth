"use client";

import FromWrapper from "@/components/FromWrapper";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import { createFriends } from "@/lib/actions";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import React from "react";

const signupForm = {
  email1: "",
  email1Error: false,
  email2: "",
  email3: "",
  email4: "",
  groupPassword: "",
  groupPasswordError: false,
  userId: "" || undefined,
};

const steps = [
  {
    heading: "Add up to four friends",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum beatae hic?",
  },
  {
    heading: "Set a group password",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum beatae hic?",
  },
  {
    heading: "Select a Plan",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum beatae hic?",
  },
];

const GetStarted = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeFrom, setActiveFrom] = React.useState(0);
  const [form, setForm] = React.useState(signupForm);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (activeFrom === 0) {
      if (!form.email1.trim()) {
        setForm({ ...form, email1Error: true });
        return;
      } else {
        setForm({ ...form, email1Error: false });
        setActiveFrom(1);
      }
    } else if (activeFrom === 1) {
      if (!form.groupPassword.trim()) {
        setForm({ ...form, groupPasswordError: true });
        return;
      } else {
        setForm({ ...form, groupPasswordError: false });
        const friends = await createFriends({
          friend1: form.email1,
          friend2: form.email2,
          friend3: form.email3,
          friend4: form.email4,
          password: form.groupPassword,
          userEmail: searchParams.get("email") as string,
        });
        router.push("/payment");
      }
    }
    console.log(form);
  };

  return (
    <div className=" relative bg-white border border-black rounded-lg p-8 m-4 flex flex-col gap-3 justify-center items-center max-w-[1080px] md:px-12 md:max-w-[700px] mt-12 min-h-[550px]  md:mx-auto">
      <form onSubmit={handleSubmit}>
        <div className=" absolute top-1 right-1"> </div>
        {activeFrom === 0 && (
          <FromWrapper
            heading="Add up to four friends"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum beatae hic?"
          >
            <InputField
              type="email"
              label="First Friend"
              placeholder="friendone@example.com"
              onChange={(e) =>
                setForm({ ...form, email1: e.target.value })
              }
              value={form.email1}
              error={form.email1Error}
            />
            <InputField
              type="email"
              label="email2"
              placeholder="friendtwo@example.com"
              onChange={(e) =>
                setForm({ ...form, email2: e.target.value })
              }
              value={form.email2}
            />
            <InputField
              type="email"
              label="email3"
              placeholder="friendthree@example.com"
              onChange={(e) =>
                setForm({ ...form, email3: e.target.value })
              }
              value={form.email3}
            />
            <InputField
              type="email"
              label="email4"
              placeholder="friendfour@example.com"
              onChange={(e) =>
                setForm({ ...form, email4: e.target.value })
              }
              value={form.email4}
            />
          </FromWrapper>
        )}
        {activeFrom === 1 && (
          <FromWrapper
            heading="Set a group password"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum beatae hic?"
          >
            <InputField
              type="password"
              label="password"
              placeholder="Set Password"
              onChange={(e) =>
                setForm({
                  ...form,
                  groupPassword: e.target.value,
                })
              }
              value={form.groupPassword}
              error={form.groupPasswordError}
            />
          </FromWrapper>
        )}

        <div className=" button flex justify-between pt-6">
          <div>
            {activeFrom > 0 && (
              <Button
                name="Back"
                type="button"
                onClick={() =>
                  setActiveFrom((current) => {
                    if (current <= 0) return current;
                    return current - 1;
                  })
                }
                className=" bg-white border-2 hover:bg-slate-100 border-green-400 hover:border-green-500 py-[2px] px-5"
              />
            )}
          </div>

          <Button
            name={activeFrom === 1 ? "Payment" : "Next"}
            type="submit"
            className=" bg-green-400 border-2 hover:bg-green-500 border-green-400 hover:border-green-500 py-[2px] px-5"
          />
        </div>
      </form>
    </div>
  );
};

export default GetStarted;
