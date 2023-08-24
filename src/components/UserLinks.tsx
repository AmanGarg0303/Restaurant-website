"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const UserLinks = () => {
  const { status } = useSession();

  return (
    <div>
      {status === "authenticated" ? (
        <div className="space-x-2">
          <Link href="/orders">Orders</Link>
          <span className="cursor-pointer" onClick={() => signOut()}>
            Logout
          </span>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default UserLinks;
