import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/alchemy-logo.png";

export function TopNav({ children }) {
  return (
    <nav>
      <Link href="/" className="flex">
        <Image src={logo} alt="logo" width={100} />
        &nbsp; Docs
      </Link>
      <section>{children}</section>
      <style jsx>
        {`
          nav {
            top: 0;
            position: fixed;
            width: 100%;
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 1rem 2rem;
            background: white;
            border-bottom: 1px solid var(--border-color);
          }
          nav :global(a) {
            text-decoration: none;
          }
          section {
            display: flex;
            gap: 1rem;
            padding: 0;
          }
        `}
      </style>
    </nav>
  );
}
