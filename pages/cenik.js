import Head from "next/head";
import Cta from "../components/cta";
import Header from "../components/header";
export default function AboutPage() {
  const uCtaText = "ideální místo pro rodinnou dovolenou";
  const uCtaClaim =
    "s dětskými hřišti a prostornými místy pro karavany, stany a obytňáky";
  const uCtaCss = "ubytovaniCta-bg";

  return (
    <>
      <Head>
        <title>Ceník - Autokemp Kokořín</title>
      </Head>
      <div className="pageHero">
        <Header />
        <div className="w-full mb-8 my-4 sm:mt-0 inline-block drop-shadow-md text-center text-white text-5xl sm:text-[88px] leading-snug fontHero bg-neutral-200 bg-opacity-20 backdrop-blur-sm">
          Ceník
        </div>
      </div>
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="max-w-4xl py-8 mx-auto my-8">
          <h3 className="py-8 text-4xl text-center ctaHeader lg:text-6xl">
            Autokemp Kokořín - ceník ubytování
          </h3>
          <p className="pb-4 mx-8 text-sm text-gray-700 ">
            Přijímáme hotovost i platební karty
          </p>
          <h4 className="py-4 mx-8 text-xl">
            <span className="underline">Chatky</span>&nbsp;&nbsp;&nbsp;
          </h4>
          <ul className="flex flex-col w-full mx-0 md:mx-4">
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Chatka / noc (jedna noc)</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">1700 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Chatka / noc (více nocí)</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">1500 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Chatka se sprchou (jedna noc)</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">2000 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Chatka se sprchou (více nocí)</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">1700 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Chatka / týden</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">9450 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Chatka se sprchou / týden</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">10710 Kč</span>
            </li>
            <li className="flex flex-col justify-between flex-grow pb-4">
              <span> Jednorázový poplatek</span>
              <ul className="">
                <li className="flex justify-between flex-grow pl-4">
                  <span>Osoba</span>
                  <span className="flex-1 border-b-2 border-dotted"></span>
                  <span className="w-20 pl-4 place-self-end md:w-24">
                    100 Kč
                  </span>
                </li>
                <li className="flex justify-between flex-grow pl-4">
                  <span>Dítě</span>
                  <span className="flex-1 border-b-2 border-dotted"></span>
                  <span className="w-20 pl-4 place-self-end md:w-24">
                    60 Kč
                  </span>
                </li>
                <li className="flex justify-between flex-grow pl-4">
                  <span>Pes</span>
                  <span className="flex-1 border-b-2 border-dotted"></span>
                  <span className="w-20 pl-4 place-self-end md:w-24">
                    200 Kč
                  </span>
                </li>
                <li className="flex justify-between flex-grow pl-4">
                  <span>Auto</span>
                  <span className="flex-1 border-b-2 border-dotted"></span>
                  <span className="w-20 pl-4 place-self-end md:w-24">
                    100 Kč
                  </span>
                </li>
              </ul>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Povlečení / ks (na pobyt)</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">50 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Elektřina v chatce / kWh</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">7 Kč</span>
            </li>
          </ul>
          <h4 className="py-4 mx-8 mt-8 text-xl">
            <span className="underline">Stany a karavany</span>
          </h4>
          <ul className="flex flex-col w-full mx-0 md:mx-4">
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Stan do 3 osob</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">100 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Stan pro 4 a více osob</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">150 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Osobní auto</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">100 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Dodávka</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">160 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Motorka</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">100 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Obytný přívěs</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">180 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Obytné auto</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">250 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Předstan / pergola / přístřešek</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">50 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Elektrická přípojka / den</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">150 Kč</span>
            </li>
          </ul>
          <h4 className="py-4 mx-8 mt-8 text-xl">
            <span className="underline">Pobyt v kempu</span>
          </h4>
          <ul className="flex flex-col w-full mx-0 md:mx-4">
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Osoba nad 15 let</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">100 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Děti do 15 let</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">60 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Pes</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">60 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Sprcha, 3 minuty</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">30 Kč</span>
            </li>
          </ul>
          <p className="pt-12 text-xl">
            Školám a organizacím nabízíme možnost individuálních termínů a
            kalkulaci na pobyt s polopenzí.
            <br />K dispozici je široké zázemí kempu.
          </p>
        </div>
      </div>
      <Cta text={uCtaText} claim={uCtaClaim} css={uCtaCss} />
    </>
  );
}
