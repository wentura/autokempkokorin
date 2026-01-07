import Link from "next/link";
import Header from "../components/header";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="pageHero min-h-screen flex flex-col items-center justify-center">
        <Header />
        <div className="text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl fontHero mb-4">404</h1>
          <h2 className="text-3xl md:text-5xl fontHero mb-8">
            Stránka nenalezena
          </h2>
          <p className="text-xl mb-8">
            Omlouváme se, ale stránka, kterou hledáte, neexistuje.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl hover:bg-opacity-30 transition duration-200 text-xl fontHero"
          >
            Zpět na hlavní stránku
          </Link>
        </div>
      </div>
    </div>
  );
}

