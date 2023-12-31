"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { useSession } from "next-auth/react";

const Menu = () => {
  const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
  ];

  const [open, setOpen] = useState(false);

  const { status } = useSession();

  return (
    <div>
      {/* menu for small screens */}

      <Image
        src={open ? "/close.png" : "/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="w-auto h-auto"
      />

      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links?.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                onClick={() => setOpen(false)}
              >
                {link.title}
              </Link>
            );
          })}

          {status === "authenticated" ? (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          ) : (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          )}

          <div onClick={() => setOpen(false)}>
            <CartIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
