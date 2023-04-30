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
          Restaurace
        </div>
      </div>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="flex-1 min-w-[300px] bg-neutral-300">image</div>
          <div className="flex-1 min-w-[300px]">
            <ul class="max-w-fit flex flex-col mx-auto">
              <li class="inline-flex justify-center gap-x-1 py-2 px-2 text-xl md:text-4xl ctaHeader border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
                Otvírací doba
              </li>
              <li class="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
                duben, květen: jen víkendy dle počasí
              </li>
              <li class="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                červen, červenec, srpen: denně 8:00 - 22:00
              </li>
              <li class="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                září, říjen: jen víkendy dle počasí
              </li>
              <li class="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                listopad - únor: po dohodě
              </li>
            </ul>
          </div>
        </div>
        <div className="my-8 max-w-4xl mx-auto border rounded-lg py-8">
          <h3 className="text-center ctaHeader text-xl md:text-4xl py-8">
            Menu
          </h3>
          <p className="">
            <h4 className="text-xl mx-8 py-4">
              <spanm className="underline">Snídaně</spanm>&nbsp;&nbsp;&nbsp;
              <span className="text-xs">8:00-10:00</span>
            </h4>
            <ul className="flex flex-col mx-8">
              <li className="flex flex-grow justify-between  pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Hemenex</span>
                  <span className="text-xs">šunka, 3 vejce, chléb</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">90 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Míchaná vejce</span>
                  <span className="text-xs">3 vejce, chléb</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">60 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Párky</span>
                  <span className="text-xs">2ks, chléb, hořčice</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">60 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Sladký talíř</span>
                  <span className="text-xs">marmeláda, máslo, 2ks pečiva</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">60 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Slaný talíř</span>
                  <span className="text-xs">šunka, šýr, máslo, 2ks pečiva</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">90 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Jogurt a müsli</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">60 Kč</span>
              </li>
            </ul>
          </p>
          <p className="border-t">
            <h4 className="text-xl mx-8 py-4">
              <spanm className="underline">Hlavní jídla</spanm>
              &nbsp;&nbsp;&nbsp;
              <span className="text-xs">17:00-20:45</span>
            </h4>
            <ul className="flex flex-col mx-8">
              <li className="flex flex-grow justify-between  pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Polévka dle denní nabídky</span>
                  <span className="text-xs">s chlebem</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">55 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Nakládaný hermelín</span>
                  <span className="text-xs">1ks, chléb</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">85 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Domácí utopenec</span>
                  <span className="text-xs">1ks s cibulí a octem, chléb</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">60 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Škvarková pomazánka</span>
                  <span className="text-xs">s chlebem</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">80 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Klobása</span>
                  <span className="text-xs">okurka, hořčice, chléb</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">80 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pt-12 pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Smažený sýr</span>
                  <span className="text-xs">
                    Eidam 40%, hranolky, tatarská omáčka
                  </span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">170 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Kuřecí stripsy</span>
                  <span className="text-xs">hranlky</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">170 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Hermelín na grilu</span>
                  <span className="text-xs">zeleninový salát, nachos</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">170 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Davelská žebírka</span>
                  <span className="text-xs">
                    okurka, hořčice, beraní rohy, cibule, chléb
                  </span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">170 Kč</span>
              </li>
            </ul>
          </p>
          <h3 className="text-center ctaHeader text-xl md:text-4xl py-8">
            Nápojový lístek
          </h3>
          <p className="">
            <h4 className="text-xl mx-8 py-4">
              <spanm className="underline">Pivo</spanm>&nbsp;&nbsp;&nbsp;
            </h4>
            <ul className="flex flex-col mx-8">
              <li className="flex flex-grow justify-between  pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Čepované pivo</span>
                  <span className="text-xs">dle nabídky, 0,5l</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">40 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Čepované pivo</span>
                  <span className="text-xs">dle nabídky, 0,3l</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">30 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Pilsner Urquell</span>
                  <span className="text-xs">čepované plzeňské pivo, 0,5l</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">50 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Pilsner Urquell</span>
                  <span className="text-xs">čepované plzeňské pivo, 0,3l</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">40 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Birell</span>
                  <span className="text-xs">
                    nealkoholické pivo, v lahvi, 0,5l
                  </span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">40 Kč</span>
              </li>
            </ul>
          </p>
          <p className="">
            <h4 className="text-xl mx-8 py-4">
              <span className="underline">Horké nápoje</span>
            </h4>
            <ul className="flex flex-col mx-8">
              <li className="flex flex-grow justify-between  pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Čaj</span>
                  <span className="text-xs">černý, zelený, ovocný</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">40 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Káva</span>
                  <span className="text-xs">rozpustná, turecká</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">40 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Espresso</span>
                  {/* <span className="text-xs">čepované plzeňské pivo, 0,5l</span> */}
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">40 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Grog</span>
                  <span className="text-xs">horká voda, rum, citron</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">55 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Horká griotka</span>
                  {/* <span className="text-xs">
                    nealkoholické pivo, v lahvi, 0,5l
                  </span> */}
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">55 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Tatranský čaj</span>
                  <span className="text-xs">0,02l, horká voda</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">70 Kč</span>
              </li>
            </ul>
          </p>
          <p className="">
            <h4 className="text-xl mx-8 py-4">
              <span className="underline">Nealkoholické nápoje</span>
            </h4>
            <ul className="flex flex-col mx-8">
              <li className="flex flex-grow justify-between  pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Čaj</span>
                  <span className="text-xs">černý, zelený, ovocný</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">40 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Káva</span>
                  <span className="text-xs">rozpustná, turecká</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">40 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Espresso</span>
                  {/* <span className="text-xs">čepované plzeňské pivo, 0,5l</span> */}
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">40 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Grog</span>
                  <span className="text-xs">horká voda, rum, citron</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">55 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Horká griotka</span>
                  {/* <span className="text-xs">
                    nealkoholické pivo, v lahvi, 0,5l
                  </span> */}
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">55 Kč</span>
              </li>
              <li className="flex flex-grow justify-between pb-4">
                <span className="pr-4 flex flex-col">
                  <span>Tatranský čaj</span>
                  <span className="text-xs">0,02l, horká voda</span>
                </span>
                <span className="flex-1 border-b-2 border-dotted"></span>
                <span className="pl-4 place-self-end	">70 Kč</span>
              </li>
            </ul>
          </p>
        </div>
      </div>
      <Cta text={uCtaText} claim={uCtaClaim} css={uCtaCss} />
    </>
  );
}
