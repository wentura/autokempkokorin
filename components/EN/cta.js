import Link from "next/link";
export default function Cta() {
  return (
    <section className="night-bg flex items-center justify-center px-4 py-24 text-center text-white">
      <div className="col-auto lg:col-start-2">
        <h2 className="mb-6 text-3xl md:text-5xl md:mb-6 ctaHeader leading-snug">
          zarezervujte si SVŮJ čas odpočinku
        </h2>
        <p className="mb-8 text-base font-extralight">
          Ještě dnes se nalaďte na pohodu a klid, který Vás u nás čeká.
          <br />
          Vaše mysl si to zaslouží odpočinout od rušného města.
        </p>
        {/* <Link
          href="/"
          className="w-full shadow-xl btn btn-primary btn-lg sm:w-auto bg-blue-900 bg-opacity-60 rounded-xl p-4	 mt-4 font-bold"
        >
          zarezervovat
        </Link> */}
      </div>
    </section>
  );
}
