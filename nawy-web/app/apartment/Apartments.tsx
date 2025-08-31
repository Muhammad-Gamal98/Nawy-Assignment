import Pagination from "@/app/components/Pagination";
import Apartment from "./Apartment";

// Define the type for Apartment object
interface IApartment {
  id: string | number;
  unitName: string;
  unitNumber: string | number;
  description: string;
  project: string;
  image: string;
  price: number | string;
}

interface ApartmentsProps {
  currentPage: number;
  apartments: IApartment[];
  numOfPages: number;
}

export default function Apartments({
  currentPage,
  apartments,
  numOfPages,
}: ApartmentsProps) {
  return (
    <>
      <Apartment apartments={apartments || []} />
      <Pagination numOfPages={numOfPages} currentPage={currentPage} />
    </>
  );
}
