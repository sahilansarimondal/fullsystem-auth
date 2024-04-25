"use client";

import FromWrapper from "@/components/FromWrapper";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import React from "react";

const signupForm = {
  email1: "",
  email1Error: false,
  email2: "",
  email3: "",
  email4: "",
  groupPassword: "",
  groupPasswordError: false,
  planValue: "",
  planValueError: false,
  cardHolderName: "",
  cardHolderNameError: false,
  cardNumber: "",
  cardNumberError: false,
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
  const [activeFrom, setActiveFrom] = React.useState(0);
  const [form, setForm] = React.useState(signupForm);

  const handleSubmit = (
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
        setActiveFrom(2);
      }
    } else if (activeFrom === 2) {
      if (form.planValue === "") {
        setForm({ ...form, planValueError: true });
        return;
      } else {
        setForm({ ...form, planValueError: false });
      }
      if (!form.cardHolderName.trim()) {
        setForm({ ...form, cardHolderNameError: true });
        return;
      } else {
        setForm({ ...form, cardHolderNameError: false });
      }
      if (!form.cardNumber.trim()) {
        setForm({ ...form, cardNumberError: true });
        return;
      } else {
        setForm({ ...form, cardNumberError: false });
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
        {activeFrom === 2 && (
          <FromWrapper
            heading="Select a Plan"
            para="Lorem helo lorem werrn fiewfe noad g feiwhe woiewf howfeji fwoeijwe hoife."
          >
            <div className="flex flex-col gap-3 items-start">
              <div>
                <p>Chose a plan</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="plan1"
                  name="planvalue"
                  value="9.95"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      planValue: e.target.value,
                    })
                  }
                  checked={form.planValue === "9.95"}
                />
                <label htmlFor="plan1">
                  Plan 1 : $9.95
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="plan2"
                  name="planvalue"
                  value="15.95"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      planValue: e.target.value,
                    })
                  }
                  checked={form.planValue === "15.95"}
                />
                <label htmlFor="plan2">
                  Plan 2 : $15.95
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="plan3"
                  name="planvalue"
                  value="24.95"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      planValue: e.target.value,
                    })
                  }
                  checked={form.planValue === "24.95"}
                />
                <label htmlFor="plan3">
                  Plan 3 : $24.95
                </label>
              </div>
              <div>
                {form.planValueError && (
                  <p className="text-red-500">
                    Please select a plan
                  </p>
                )}
              </div>
            </div>

            <InputField
              type="text"
              label="name"
              placeholder="Enter Name"
              onChange={(e) =>
                setForm({
                  ...form,
                  cardHolderName: e.target.value,
                })
              }
              value={form.cardHolderName}
              error={form.cardHolderNameError}
            />
            <InputField
              type="text"
              label="cardNumber"
              placeholder="Enter Card Number MM/YY CVC"
              onChange={(e) =>
                setForm({
                  ...form,
                  cardNumber: e.target.value,
                })
              }
              value={form.cardNumber}
              error={form.cardNumberError}
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
            name={activeFrom === 2 ? "Pay" : "Next"}
            type="submit"
            className=" bg-green-400 border-2 hover:bg-green-500 border-green-400 hover:border-green-500 py-[2px] px-5"
          />
        </div>
      </form>
    </div>
  );
};

export default GetStarted;
