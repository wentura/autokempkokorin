import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="dark:bg-gray-800 dark:text-gray-50">
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li>ubytování</li>
          <li>restaurace</li>
          <li>ceník</li>
          <li>volný čas</li>
          <li>Contact</li>
        </ul>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start cursor-pointer">
            <li>
              <Link href="tel:00420773687792">773 68 77 92</Link>
            </li>
            <li>
              <Link href="mailto:info@atckokorin.cz">info@atckokorin.cz</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center w-full py-8">footer</div>
    </footer>
  );
}
