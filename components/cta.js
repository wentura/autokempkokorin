import Link from "next/link";
export default function Cta() {
  return (
    <section className="night-bg grid items-center justify-center grid-cols-1 px-4 py-24 text-center lg:grid-cols-3 text-white">
      <div className="col-auto lg:col-start-2">
        <h2 className="mb-6 text-3xl md:text-4xl md:mb-6 font-extrabold">
          Zarezervujte si SVŮJ čas odpočinku
        </h2>
        <p className="mb-8 text-base font-semibold">
          Ještě dnes se nalaďte na pohodu a klid, který Vás u nás čeká.
          <br />
          Vaše mysl si to zaslouží odpočinout od rušného města.
        </p>
        <Link
          href="/"
          className="w-full shadow-xl btn btn-primary btn-lg sm:w-auto bg-blue-900 bg-opacity-60 rounded-xl p-4	 mt-4 font-bold"
        >
          zarezervovat
        </Link>
      </div>
    </section>
  );
}
