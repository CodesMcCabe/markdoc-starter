import Link from "next/link";
import * as React from "react";

export function Button({ link, children }) {
  return (
    <Link href="https://www.alchemy.com" target="_blank">
      <button type="button" className="button">
        <span>{children}</span>
        <style jsx>
          {`
            .button {
              cursor: pointer;
              display: flex;
              flex-direction: column;
              padding: 12px 16px;
              background: blue;
              border: 1px solid #dce6e9;
              border-radius: 4px;
              color: white;
            }
          `}
        </style>
      </button>
    </Link>
  );
}
