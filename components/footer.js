import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="dark:bg-gray-800 dark:text-gray-50">
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li>
            <Link href="/ubytovani" className="">
              ubytování
            </Link>
          </li>
          <li>
            <Link href="/restaurace" className="">
              restaurace
            </Link>
          </li>
          <li>
            <Link href="/cenik" className="">
              ceník
            </Link>
          </li>

          <li>
            <Link href="/volny-cas" className="">
              volný čas
            </Link>
          </li>
          <li>
            <Link href="/kontakt" className="">
              kontakt
            </Link>
          </li>
        </ul>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <ul className="self-center py-2 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start cursor-pointer">
            <li>
              <Link
                href="tel:00420608869906"
                className="underline underline-offset-4 decoration-slate-300 decoration-2"
              >
                608 869 906
              </Link>
            </li>
            <li>
              <Link
                href="mailto:info@autokempkokorin.cz"
                className="underline underline-offset-4 decoration-slate-300 decoration-2"
              >
                info@autokempkokorin.cz{" "}
              </Link>
            </li>
          </ul>
          <ul className="self-center py-2 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            <li>Kokořínský důl 60, 277 23, Kokořín</li>
          </ul>
        </div>
      </div>
      <div className="text-center w-full py-12">
        <span className="fontHero text-3xl">Autokemp Kokořín</span>
        &nbsp;&nbsp; &reg; &nbsp;&nbsp;2023
        <br />
        <a
          href="https://www.zbyneksvoboda.cz"
          target="_blank"
          className="underline underline-offset-4 decoration-slate-300 decoration-1 text-xs pt-4"
        >
          vytvořil zbyneksvoboda.cz
        </a>
      </div>
      <img
        referrerpolicy="no-referrer-when-downgrade"
        src="http://matomo.zbyneksvoboda.cz/matomo.php?idsite=4&amp;rec=1"
        styleHtml="border:0"
        alt=""
      />
    </footer>
  );
}
