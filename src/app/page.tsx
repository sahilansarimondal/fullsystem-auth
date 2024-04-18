import { getServerSession } from "next-auth";
import UserInfo from "@/components/UserInfo";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
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
    <main className="flex min-h-fit gap-8 flex-col items-center justify-center p-24">
      <h2 className="text-3xl font-medium">
        This is Your Home page
      </h2>
      <div>
        {session && (
          <UserInfo
            image={session.user?.image as string}
            name={session.user?.name as string}
            email={session.user?.email as string}
          />
        )}
      </div>
    </main>
  );
}
