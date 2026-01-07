import Link from "next/link";
export default function Cta({ ...text }) {
  return (
    <section
      className={` flex ${text.css} items-center justify-center px-4 py-44 text-center text-white bg-blend-darken`}
    >
      <div className="col-auto lg:col-start-2">
        <h2 className="mb-6 text-3xl md:text-6xl md:mb-6 ctaHeader leading-snug">
          {text.text}
        </h2>
        <p className="mb-8 pb-8 text-base font-extralight">{text.claim}</p>
        <Link href="/kontakt">
          <button className="my-8 py-4 px-8 backdrop-blur-sm ctaHeader text-xl md:text-2xl border rounded-2xl hover:backdrop-brightness-75 transition duration-100 ease-in-out">
            zarezervovat si místo v autokempu Kokořín
          </button>
        </Link>
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
