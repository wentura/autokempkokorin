import Image from "next/image";
import Header from "../../components/header";

export const metadata = {
  title: "Půjčovna e-bike",
  description:
    "Zapůjčení elektrokol v Autokempu Kokořín. Prozkoumejte Kokořínsko ze sedla e-biku – Pokličky, hrad Kokořín, Čertovy hlavy v Želízech nebo hrad Bezděz. Vyjížďky s průvodcem.",
  openGraph: {
    title: "Půjčovna e-bike - Autokemp Kokořín",
    description:
      "Zapůjčení elektrokol v Autokempu Kokořín. Prozkoumejte Kokořínsko ze sedla e-biku.",
    images: [
      {
        url: "/ebike.webp",
        width: 1200,
        height: 630,
        alt: "Elektrokola v Autokempu Kokořín",
      },
    ],
  },
};

export default function PujcovnaEBikePage() {
  return (
    <>
      <div className="pageHero">
        <Header />
        <div className="w-full mb-8 my-4 sm:mt-0 inline-block drop-shadow-md text-center text-white text-5xl sm:text-[88px] leading-snug fontHero bg-neutral-200 bg-opacity-20 backdrop-blur-sm">
        Kokořínsko ze sedla e-biku
        </div>
      </div>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col-reverse flex-wrap gap-12 mt-8 lg:flex-row">
          <div className="flex-1 min-w-[300px] hidden sm:flex sm:flex-col">
            <Image
              src="/ebike.webp"
              width={600}
              height={600}
              alt="Elektrokola v Autokempu Kokořín"
              className="w-full mt-12 mb-12 img-responsive rounded-2xl"
              loading="lazy"
              quality={85}
            />
          </div>
          <div className="flex-1 min-w-[300px]">
            <h3 className="pb-4 text-4xl text-center lg:text-6xl fontHero">
{metadata.title}            </h3>
            <p className="py-2">
              V kempu si můžete zapůjčit elektrokola a kromě Pokliček a hradu
              Kokořín navštívit i vzdálenější Čertovy hlavy v Želízech, nebo hrad
              Bezděz.
            </p>
            <h3 className="pt-12 text-2xl text-left lg:text-2xl">
              Ceník zapůjčení kola
            </h3>
            <p className="">
              <strong>Na den</strong> – 1.100 Kč
            </p>
            <p className="">
              <strong>Půl dne (4 hodiny)</strong> – 700 Kč
            </p>
            <h3 className="pt-12 text-2xl text-left lg:text-2xl">
              Vyjížďka s průvodcem
            </h3>
            <p className="">
              Případně můžete zvolit vyjížďku s průvodcem, který zvolí trasu
              přesně podle vašeho vkusu a požadavků a objevíte méně známá a
              skrytá místa Kokořínska.
            </p>
            <p className="py-2">
              1 osoba 1.700 Kč, 2 osoby 2.800 Kč, 3 osoby 3.600 Kč, 4 osoby
              4.500 Kč.
            </p>
            <h3 className="pt-12 text-2xl text-left lg:text-2xl">
              Rezervace
            </h3>
            <p className="">
              <a
                href="mailto:jakub.skala73@gmail.com"
                className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-600"
              >
                jakub.skala73@gmail.com
              </a>
            </p>
            <p className="py-2">
              <a
                href="tel:+420725550467"
                className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-600"
              >
                725 550 467
              </a>
            </p>
            <Image
              src="/ebike.webp"
              width={600}
              height={600}
              alt="Elektrokola v Autokempu Kokořín"
              className="w-full mt-12 mb-12 sm:hidden img-responsive rounded-2xl drop-shadow-lg"
              loading="lazy"
              quality={85}
            />
          </div>
        </div>
      </div>
      {/* <section className="flex ebikeCta-bg items-center justify-center px-4 py-44 text-center text-white bg-blend-darken">
        <div className="col-auto lg:col-start-2">
          <h2 className="mb-6 text-3xl md:text-6xl md:mb-6 ctaHeader leading-snug">
            Kola nebo průvodce rezervujte na
          </h2>
          <p className="mb-8 pb-8 text-base font-extralight">
            e-mailu nebo telefonu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:jakub.skala73@gmail.com">
              <button className="my-8 py-4 px-8 backdrop-blur-sm ctaHeader text-xl md:text-2xl border rounded-2xl hover:backdrop-brightness-75 transition duration-100 ease-in-out">
                jakub.skala73@gmail.com
              </button>
            </a>
            <a href="tel:+420725550467">
              <button className="my-8 py-4 px-8 backdrop-blur-sm ctaHeader text-xl md:text-2xl border rounded-2xl hover:backdrop-brightness-75 transition duration-100 ease-in-out">
                725 550 467
              </button>
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
}
