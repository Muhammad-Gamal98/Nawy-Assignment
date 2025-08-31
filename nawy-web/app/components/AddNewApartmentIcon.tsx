"use client";
import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

export default function AddNewApartmentIcon() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <div className="m-2 flex justify-center">
      <CiCirclePlus size={50} onClick={handleOpen} className="cursor-pointer" />
    </div>
  );
}
