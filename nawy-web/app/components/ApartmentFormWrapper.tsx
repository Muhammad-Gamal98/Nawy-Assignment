"use client";

import { CiCirclePlus } from "react-icons/ci";
import ApartmentForm from "./ApartmentForm";
import { useState } from "react";

export default function ApartmentFormWrapper() {
  // open state is used in isOpen prop and click handlers
  const [open, setOpen] = useState(false);

  return (
    <>
      <ApartmentForm
        isOpen={open}
        onClose={() => setOpen(false)}
        onAdd={() => {}}
      />

      <div className="m-2 flex justify-center">
        <CiCirclePlus
          size={50}
          onClick={() => setOpen(true)}
          className="cursor-pointer hover:text-gray-500 transition"
        />
      </div>
    </>
  );
}
