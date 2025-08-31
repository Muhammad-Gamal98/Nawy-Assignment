import Image from "next/image";
import iconCircle from "@/public/icons/iconcircle.webp";
import Link from "next/link";

// Define props type
interface ApartmentCardProps {
  img: string;
  unitName: string;
  project: string;
  unitNumber: string | number;
  price: number | string;
  description: string;
  apartmentId: string | number;
}

export default function ApartmentCard({
  img,
  unitName = "Placeholder",
  price,
  description,
  apartmentId,
  project,
  unitNumber,
}: ApartmentCardProps) {
  return (
    <Link
      href={`/apartment/${apartmentId}`}
      className=" m-3  rounded-md drop-shadow-md border-2 border-gray-300 md:max-w-[500px] cursor-pointer transition-transform hover:scale-[1.02]"
      prefetch={false}
    >
      {/* Image Section */}
      <div className="relative rounded-md mb-3">
        <Image
          className="absolute rounded-full bottom-4 left-4"
          src={iconCircle}
          alt="Icon Circle"
          width={50}
          height={50}
        />
        <Image
          className="rounded-md rounded-b-none object-cover w-full h-auto max-w-full"
          src={img}
          alt="Apartment Picture"
          width={500}
          height={250}
        />
      </div>

      {/* Info Section */}
      <div className="p-3 flex-col justify-between gap-3 flex-wrap">
        <h4 className="font-semibold text-gray-500 mb-2 text-sm">
          {unitNumber}
        </h4>
        <div>
          <h2 className="font-semibold">
            {unitName} - {project}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        </div>
      </div>

      {/* Price Section */}
      <div className="p-3 flex gap-2 font-bold">
        <p>{price}</p>
        <span>EGP</span>
      </div>
    </Link>
  );
}
//
//
