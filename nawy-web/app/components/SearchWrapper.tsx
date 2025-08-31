"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function SearchWrapper() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const handleSearch = useCallback((term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    router.push(`?${params.toString()}`);
  }, [router, searchParams]);

  return (
    <div className="flex justify-center mt-4 mb-2">
      <input
        type="text"
        defaultValue={searchParams.get("search") || ""}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search apartments..."
        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition text-gray-700 bg-white"
      />
    </div>
  );
}
