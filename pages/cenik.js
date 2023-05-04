import Link from "next/link";
import Cta from "../components/cta";
import Header from "../components/header";
export default function AboutPage() {
  const uCtaText = "ideální místo pro rodinnou dovolenou";
  const uCtaClaim =
    "s dětskými hřišti a prostornými místy pro karavany, stany a obytňáky";
  const uCtaCss = "ubytovaniCta-bg";

  return (
    <>
      <div className="pageHero">
        <Header />
        <div className="w-full mb-8 pl-4 my-4 pr-16 sm:mt-0 sm:pr-0 sm:pl-0 inline-block drop-shadow-md text-center text-white text-4xl sm:text-[88px] leading-snug fontHero ">
          Ceník
        </div>
      </div>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="my-8 max-w-4xl mx-auto py-8">
          <h3 className="text-center ctaHeader text-4xl lg:text-6xl py-8">
            Autokemp Kokořín - ceník ubytování
          </h3>
          <p className="">
            <h4 className="text-xl mx-8 py-4">
              <spanm className="underline">Chatky</spanm>&nbsp;&nbsp;&nbsp;
            </h4>
            <ul className="flex flex-col mx-8">
              <li className="flex flex-grow justify-between  pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Chatka / noc (jedna noc)</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">1500 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Chatka / noc (více nocí)</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">1300 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Chatka se sprchou (jedna noc)</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">1800 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Chatka se sprchou (více nocí)</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">1500 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Chatka / týden</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">8400 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Chatka se sprchou / týden</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">9800 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Pes v chatce (jednorázový poplatek)</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">200 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Povlečení / ks (na pobyt)</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">80 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Elektřina v chatce / kWh</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">7 Kč</span>
              </li>
            </ul>
          </p>
          <p className="mt-8">
            <h4 className="text-xl mx-8 py-4">
              <spanm className="underline">Stany a karavany</spanm>
            </h4>
            <ul className="flex flex-col mx-8">
              <li className="flex flex-grow justify-between  pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Stan do 3 osob</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">100 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Stan pro 4 a více osob</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">150 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Osobní auto</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">120 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Dodávka</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">160 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Motorka</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">100 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Obytný přívěs</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">180 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Obytné auto</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">250 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Předstan / pergola / přístřešek</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">100 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Elektrická přípojka / den</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">150 Kč</span>
              </li>
            </ul>
          </p>
          <p className="mt-8">
            <h4 className="text-xl mx-8 py-4">
              <spanm className="underline">Pobyt v kempu</spanm>
            </h4>
            <ul className="flex flex-col mx-8">
              <li className="flex flex-grow justify-between  pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Dospělí</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">100 Kč</span>
              </li>
              <li className="flex flex-grow justify-between  pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Děti do 15 let</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">60 Kč</span>
              </li>
              <li className="flex flex-grow justify-between  pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Pes</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">60 Kč</span>
              </li>
            </ul>
          </p>
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
