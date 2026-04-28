"use client";

import Link from "next/link";
import { useState } from "react";
type Props = {
  setActivePage: (page: string) => void;
};

function AddNewOrderButton({ setActivePage }: Props) {
  const [active, setActive] = useState("addneworder");
  const handleClick = (page: string) => {
    setActive(page);
    setActivePage(page);
  };
  return (
    <div className="flex justify-end">
      <Link href="/companies/addneworder">
        {" "}
        <button
          className="px-6 py-3 rounded-lg text-white font-bold shadow-md transition hover:opacity-90 cursor-pointer"
          onClick={() => handleClick("addneworder")}
          style={{
            background: "linear-gradient(90deg, #66B4A5, #5291A9, #634AAE)",
          }}
        >
          + إضافة طلب جديد
        </button>
      </Link>
    </div>
  );
}

export default AddNewOrderButton;
