import React from "react";
import ApartmentCard from "./ApartmentCard";

interface Apartment {
  id: string | number;
  unitName: string;
  unitNumber: string | number;
  description: string;
  project: string;
  image: string;
  price: number | string;
}
export default function Apartment({ apartments }: { apartments: Apartment[] }) {
  return (
    <div className="flex justify-center flex-wrap">
      {apartments.length === 0 && (
        <div className="text-center mt-4">No apartments found.</div>
      )}
      {apartments.length > 0 &&
        apartments.map((apartment) => (
          <ApartmentCard
            key={apartment.id}
            apartmentId={apartment.id}
            unitName={apartment.unitName}
            img={apartment.image}
            description={apartment.description}
            price={apartment.price}
            project={apartment.project}
            unitNumber={apartment.unitNumber}
          />
        ))}
    </div>
  );
}
