"use client";

import { style as muiStyle } from "@/app/utils/CONSTANT/Styles/MUI";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

interface Apartment {
  unitName: string;
  unitNumber: string;
  description: string;
  price: string;
  project: string;
}

interface ApartmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (apartment: Apartment) => void;
}

export default function ApartmentForm({
  isOpen,
  onClose,
  onAdd,
}: ApartmentFormProps) {
  const [form, setForm] = useState<Apartment>({
    unitName: "",
    unitNumber: "",
    description: "",
    price: "",
    project: "",
  });
  const [error, setError] = useState<string>("");

  // Reset form
  const resetForm = () => {
    setForm({
      unitName: "",
      unitNumber: "",
      description: "",
      price: "",
      project: "",
    });
    setError("");
  };

  const handleChange = (field: keyof Apartment, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  const handleAddClick = () => {
    const { unitName, unitNumber, description, price, project } = form;

    // Validation
    if (!unitName || !unitNumber || !description || !price || !project) {
      setError("All fields are required.");
      return;
    }
    if (isNaN(Number(price)) || Number(price) <= 0) {
      setError("Price must be a positive number.");
      return;
    }

    onAdd(form);
    resetForm();
    onClose();
  };

  // Config array to avoid repeating TextFields
  const fields: { key: keyof Apartment; label: string }[] = [
    { key: "unitName", label: "Unit Name" },
    { key: "unitNumber", label: "Unit Number" },
    { key: "description", label: "Description" },
    { key: "price", label: "Price" },
    { key: "project", label: "Project" },
  ];

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...muiStyle, width: 600 }}>
        <h2 className="text-lg font-semibold mb-5">Add New Apartment</h2>
        <div className="flex gap-5 flex-wrap">
          {fields.map(({ key, label }) => (
            <TextField
              key={key}
              id={`outlined-${key}`}
              label={label}
              value={form[key]}
              style={{ color: "#000" }}
              onChange={(e) => handleChange(key, e.target.value)}
            />
          ))}
        </div>
        {error && <div className="text-red-500 mt-2">{error}</div>}
        <div className="flex justify-between mt-5">
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleAddClick}>Add</Button>
        </div>
      </Box>
    </Modal>
  );
}
