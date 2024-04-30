// pages/success.tsx
"use client";
import { getUserById, markUserAsPaid } from "@/lib/actions";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import { Suspense, useEffect } from "react";

const Success = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // update the user
    async function updateUser() {
      const data = await markUserAsPaid(
        searchParams.get("userId") as string,
        searchParams.get("plan") as string
      );
    }

    updateUser();

    // Example: Redirecting to another page after some delay
    const redirectTimeout = setTimeout(() => {
      router.push("/");
    }, 3000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(redirectTimeout);
  }, [searchParams, router]);

  return (
    <div className=" relative bg-white border border-black rounded-lg p-8 m-4 flex flex-col gap-3 justify-center items-center max-w-[1080px] md:px-12 md:max-w-[700px] mt-12 min-h-[550px]  md:mx-auto">
      <h1 className="text-3xl font-bold">Thank You</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. A, exercitationem facere! Ut itaque ex numquam
        aut.
      </p>
    </div>
  );
};

const SuccessPage = () => {
  return (
    <Suspense>
      <Success />
    </Suspense>
  );
};

export default SuccessPage;
