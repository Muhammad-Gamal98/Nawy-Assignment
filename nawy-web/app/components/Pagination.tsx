"use client";
import { Stack } from "@mui/material";
import MuiPagination from "@mui/material/Pagination";
import React from "react";
import { useRouter } from "next/navigation";

export default function Pagination({
  numOfPages,
  currentPage,
}: {
  numOfPages: number;
  currentPage: number;
}) {
  const router = useRouter();
  return (
    <div className="flex justify-center my-4">
      <Stack spacing={2}>
        <MuiPagination
          count={numOfPages}
          page={currentPage}
          onChange={(_e, value) => {
            router.push(`?page=${value}`);
          }}
        />
      </Stack>
    </div>
  );
}
