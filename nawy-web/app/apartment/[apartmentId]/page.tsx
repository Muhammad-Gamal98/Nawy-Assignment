import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BACKENDHOSTURL } from "@/app/utils/CONSTANT/BACKENDURL";

interface Apartment {
  id: string | number;
  unitName: string;
  unitNumber: number;
  project: string;
  description: string;
  image: string;
  price: number | string;
}

interface ApartmentDetailProps {
  params: Promise<{ apartmentId: string }>;
}

export default async function ApartmentDetail({
  params,
}: ApartmentDetailProps) {
  const { apartmentId } = await params;
  const res = await fetch(`${BACKENDHOSTURL}/apartment/${apartmentId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch apartment data");
  }
  const apartmentData: Apartment = await res.json();
  if (!apartmentData) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-offBlack">
        Apartment Details
      </h1>
      <Link
        href="/"
        className="mt-4 mb-4 border-2 border-gray hover:opacity-100 duration-700 opacity-70 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        Back
      </Link>
      <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg">
        <Image
          src={apartmentData.image}
          alt="Apartment Picture"
          width={600}
          height={400}
          className="object-cover w-full h-[400px]"
        />
        <div className="p-6">
          <h2 className="font-semibold text-xl mb-2 text-offBlack">
            {apartmentData.unitName}
          </h2>
          <div className="mb-2">
            <span className="font-bold">Project: </span>
            <span>{apartmentData.project}</span>
          </div>
          <div className="mb-2">
            <span className="font-bold">Unit Number: </span>
            <span>{apartmentData.unitNumber}</span>
          </div>
          <p className="text-gray-600 mb-4 text-offBlack">
            {apartmentData.description}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-bold mr-2">Price:</p>
            <p className="text-lg font-semibold text-offBlack">
              {apartmentData.price} EGP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
