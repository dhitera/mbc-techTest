import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <Link href="/" className="hover:underline">
            MBC Laboratory™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/" className="hover:underline me-4 md:me-6">
              Home
            </Link>
          </li>
          <li>
            <Link href="/division" className="hover:underline me-4 md:me-6">
              Division
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline me-4 md:me-6">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:underline">
              Dev Profile
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
