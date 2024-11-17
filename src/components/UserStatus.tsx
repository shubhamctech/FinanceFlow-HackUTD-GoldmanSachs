"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function UserStatus() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        Signed in as {session.user?.email} <br />
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-600 text-white rounded-md"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div>
      Not signed in <br />
      <button
        onClick={() => signIn()}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Sign in
      </button>
    </div>
  );
}
