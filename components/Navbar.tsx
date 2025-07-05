"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const getLinkClasses = (path: string) => {
    if (isActive(path)) {
      return "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 cursor-not-allowed";
    }
    return "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 relative z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/logo.png"
            className="h-12"
            alt="MBC Logo"
            width={256}
            height={256}
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={getLinkClasses("/")}
                aria-current={isActive("/") ? "page" : undefined}
                onClick={isActive("/") ? (e) => e.preventDefault() : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/division"
                className={getLinkClasses("/division")}
                aria-current={isActive("/division") ? "page" : undefined}
                onClick={
                  isActive("/division") ? (e) => e.preventDefault() : undefined
                }
              >
                Division
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={getLinkClasses("/contact")}
                aria-current={isActive("/contact") ? "page" : undefined}
                onClick={
                  isActive("/contact") ? (e) => e.preventDefault() : undefined
                }
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/dev"
                className={getLinkClasses("/dev")}
                aria-current={isActive("/dev") ? "page" : undefined}
                onClick={
                  isActive("/dev") ? (e) => e.preventDefault() : undefined
                }
              >
                Dev Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
