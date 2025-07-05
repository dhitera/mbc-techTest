import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  imageUrl,
  imageAlt = "",
  className = "",
}: CardProps) {
  return (
    <div
      className={`flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full ${className}`}
    >
      <Image
        className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
        src={imageUrl}
        alt={imageAlt}
        width={400}
        height={400}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
