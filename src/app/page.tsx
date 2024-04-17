import { getServerSession } from "next-auth";
import UserInfo from "@/components/UserInfo";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2 className="text-3xl font-medium">
          This is Your Home page
        </h2>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-3xl font-medium">
        This is Your Home page
      </h2>
      {session && (
        <UserInfo
          name={session.user?.name as string}
          email={session.user?.email as string}
        />
      )}
    </main>
  );
}
