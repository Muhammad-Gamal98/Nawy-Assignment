import { BACKENDHOSTURL } from "../utils/CONSTANT/BACKENDURL";

import SearchWrapper from "./SearchWrapper";
import Apartment from "../apartment/Apartment";
import Pagination from "./Pagination";

interface HomeProps {
  currentPage: number;
  searchQuery?: string;
}

interface IApartment {
  id: string | number;
  unitName: string;
  unitNumber: string | number;
  description: string;
  project: string;
  image: string;
  price: number | string;
}

async function fetchApartments(
  page: number,
  limit: number = 10,
  searchQuery?: string
): Promise<{ apartments: IApartment[]; numOfPages: number }> {
  const url = searchQuery
    ? `${BACKENDHOSTURL}/apartment/search?q=${searchQuery}`
    : `${BACKENDHOSTURL}/apartment?page=${page}&limit=${limit}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch apartments");
  }
  const data = await res.json();
  return {
    apartments: searchQuery ? data : data?.data ?? [],
    numOfPages: searchQuery ? 1 : data?.numOfPages ?? 1,
  };
}

export default async function Home({ currentPage, searchQuery }: HomeProps) {
  const { apartments, numOfPages } = await fetchApartments(
    currentPage,
    10,
    searchQuery
  );

  return (
    <>
      <SearchWrapper />

      <div className="flex justify-center flex-wrap">
        <Apartment apartments={apartments} />
      </div>
      {!searchQuery && apartments.length > 0 && (
        <div className="flex justify-center mt-4">
          <Pagination numOfPages={numOfPages} currentPage={currentPage} />
        </div>
      )}
    </>
  );
}
