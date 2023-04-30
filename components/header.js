import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 h-24 md:h-48 text-white">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          rel="noopener noreferrer"
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 ctaHeader text-xl md:text-3xl"
        >
          Autokemp KOKOŘÍN
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/ubytovani"
              className="flex items-center px-4 -mb-1 hover:underline transition duration-300 ease-in-out underline-offset-4"
            >
              ubytování
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/restaurace"
              className="flex items-center px-4 -mb-1 hover:underline transition duration-300 ease-in-out underline-offset-4"
            >
              restaurace
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/cenik"
              className="flex items-center px-4 -mb-1 hover:underline transition duration-300 ease-in-out underline-offset-4"
            >
              ceník
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/volny-cas"
              className="flex items-center px-4 -mb-1 hover:underline transition duration-300 ease-in-out underline-offset-4"
            >
              volný čas
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/kontakt"
              className="flex items-center px-4 -mb-1 hover:underline transition duration-300 ease-in-out underline-offset-4"
            >
              kontakt
            </Link>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
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
      </div>
    </header>
  );
}
