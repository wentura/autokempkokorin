import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="h-24 p-4 text-white md:h-48">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          rel="noopener noreferrer"
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 text-xl ctaHeader md:text-3xl"
        >
          Autokemp KOKOŘÍN
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/ubytovani"
              className="flex items-center px-4 -mb-1 transition duration-300 ease-in-out hover:underline underline-offset-4"
            >
              ubytování
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/restaurace"
              className="flex items-center px-4 -mb-1 transition duration-300 ease-in-out hover:underline underline-offset-4"
            >
              restaurace
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/cenik"
              className="flex items-center px-4 -mb-1 transition duration-300 ease-in-out hover:underline underline-offset-4"
            >
              ceník
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/volny-cas"
              className="flex items-center px-4 -mb-1 transition duration-300 ease-in-out hover:underline underline-offset-4"
            >
              volný čas
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/kontakt"
              className="flex items-center px-4 -mb-1 transition duration-300 ease-in-out hover:underline underline-offset-4"
            >
              kontakt
            </Link>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          }  top-0 left-0 right-0 bg-white px-2 pt-2 pb-4 z-10 flex flex-col text-gray-900 shadow-md opacity-90 w-full h-screen fixed`}
        >
          <button className="flex justify-end p-4" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M 0 0 L 20 20 L 0 0 M 20 0 L 0 20 L 20 0"
              ></path>
            </svg>
          </button>
          <ul className="flex flex-col items-center w-full my-12 text-xl gap-y-4">
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="/ubytovani"
                className="flex items-center px-4 -mb-1 transition duration-300 ease-in-out hover:underline underline-offset-4"
              >
                ubytování
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="/restaurace"
                className="flex items-center px-4 -mb-1 transition duration-300 ease-in-out hover:underline underline-offset-4"
              >
                restaurace
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="/cenik"
                className="flex items-center px-4 -mb-1 transition duration-300 ease-in-out hover:underline underline-offset-4"
              >
                ceník
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="/volny-cas"
                className="flex items-center px-4 -mb-1 transition duration-300 ease-in-out hover:underline underline-offset-4"
              >
                volný čas
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="/kontakt"
                className="flex items-center px-4 -mb-1 transition duration-300 ease-in-out hover:underline underline-offset-4"
              >
                kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
