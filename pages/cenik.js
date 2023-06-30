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
        <div className="my-8 max-w-4xl mx-auto py-8">
          <h3 className="text-center ctaHeader text-4xl lg:text-6xl py-8">
            Autokemp Kokořín - ceník ubytování
          </h3>
          <h4 className="text-xl mx-8 py-4">
            <span className="underline">Chatky</span>&nbsp;&nbsp;&nbsp;
          </h4>
          <p className="">
            <ul className="flex flex-col mx-0 md:mx-4 w-full">
              <li className="flex flex-grow justify-between  pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Chatka / noc (jedna noc)</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	w-20 md:w-24">1500 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Chatka / noc (více nocí)</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	w-20 md:w-24">1300 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Chatka se sprchou (jedna noc)</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	w-20 md:w-24">1800 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Chatka se sprchou (více nocí)</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	w-20 md:w-24">1500 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Chatka / týden</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	w-20 md:w-24">8400 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Chatka se sprchou / týden</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	w-20 md:w-24">9800 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>
                    Pes v chatce
                    <br />
                    (jednorázový poplatek)
                  </span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	w-20 md:w-24">200 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Povlečení / ks (na pobyt)</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	w-20 md:w-24">80 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Elektřina v chatce / kWh</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	w-20 md:w-24">7 Kč</span>
              </li>
            </ul>
          </p>
          <h4 className="text-xl mx-8 py-4 mt-8">
            <spanm className="underline">Stany a karavany</spanm>
          </h4>
          <ul className="flex flex-col mx-0 md:mx-4 w-full">
            <li className="flex flex-grow justify-between  pb-4">
              <span className="pr-4 flex flex-col">
                <span>Stan do 3 osob</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="pl-4 place-self-end	w-20 md:w-24">100 Kč</span>
            </li>
            <li className="flex flex-grow justify-between pb-4">
              <span className="pr-4 flex flex-col">
                <span>Stan pro 4 a více osob</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="pl-4 place-self-end	w-20 md:w-24">150 Kč</span>
            </li>
            <li className="flex flex-grow justify-between pb-4">
              <span className="pr-4 flex flex-col">
                <span>Osobní auto</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="pl-4 place-self-end	w-20 md:w-24">120 Kč</span>
            </li>
            <li className="flex flex-grow justify-between pb-4">
              <span className="pr-4 flex flex-col">
                <span>Dodávka</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="pl-4 place-self-end	w-20 md:w-24">160 Kč</span>
            </li>
            <li className="flex flex-grow justify-between pb-4">
              <span className="pr-4 flex flex-col">
                <span>Motorka</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="pl-4 place-self-end	w-20 md:w-24">100 Kč</span>
            </li>
            <li className="flex flex-grow justify-between pb-4">
              <span className="pr-4 flex flex-col">
                <span>Obytný přívěs</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="pl-4 place-self-end	w-20 md:w-24">180 Kč</span>
            </li>
            <li className="flex flex-grow justify-between pb-4">
              <span className="pr-4 flex flex-col">
                <span>Obytné auto</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="pl-4 place-self-end	w-20 md:w-24">250 Kč</span>
            </li>
            <li className="flex flex-grow justify-between pb-4">
              <span className="pr-4 flex flex-col">
                <span>Předstan / pergola / přístřešek</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="pl-4 place-self-end	w-20 md:w-24">100 Kč</span>
            </li>
            <li className="flex flex-grow justify-between pb-4">
              <span className="pr-4 flex flex-col">
                <span>Elektrická přípojka / den</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="pl-4 place-self-end	w-20 md:w-24">150 Kč</span>
            </li>
          </ul>
          <h4 className="text-xl mx-8 py-4 mt-8">
            <spanm className="underline">Pobyt v kempu</spanm>
          </h4>
          <ul className="flex flex-col mx-0 md:mx-4 w-full">
            <li className="flex flex-grow justify-between  pb-4">
              <span className="pr-4 flex flex-col">
                <span>Dospělí</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="pl-4 place-self-end	w-20 md:w-24">100 Kč</span>
            </li>
            <li className="flex flex-grow justify-between  pb-4">
              <span className="pr-4 flex flex-col">
                <span>Děti do 15 let</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="pl-4 place-self-end	w-20 md:w-24">60 Kč</span>
            </li>
            <li className="flex flex-grow justify-between  pb-4">
              <span className="pr-4 flex flex-col">
                <span>Pes</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="pl-4 place-self-end	w-20 md:w-24">60 Kč</span>
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
