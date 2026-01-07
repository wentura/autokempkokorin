import Cta from "../../components/cta";
import Header from "../../components/header";

export const metadata = {
  title: "Restaurace",
  description:
    "Restaurace v Autokempu Kokořín. Snídaně, menu, nápojový lístek. Otevřeno denně v sezóně.",
  openGraph: {
    title: "Restaurace - Autokemp Kokořín",
    description:
      "Restaurace v Autokempu Kokořín. Snídaně, menu, nápojový lístek.",
    images: [
      {
        url: "https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_400/v1685524446/autokemp/images/restaurace_ch7zhi.jpg",
        width: 1200,
        height: 630,
        alt: "Restaurace Autokemp Kokořín",
      },
    ],
  },
};

export default function Restaurace() {
  const uCtaText = "ideální místo pro rodinnou dovolenou";
  const uCtaClaim =
    "s dětskými hřišti a prostornými místy pro karavany, stany a obytňáky";
  const uCtaCss = "ubytovaniCta-bg";

  return (
    <>
      <div className="pageHero">
        <Header />
        <div className="w-full mb-8 my-4 sm:mt-0 inline-block drop-shadow-md text-center text-white text-5xl sm:text-[88px] leading-snug fontHero bg-neutral-200 bg-opacity-20 backdrop-blur-sm">
          <span className="drop-shadow-2xl">Restaurace</span>
        </div>
      </div>
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="max-w-4xl py-8 mx-auto my-8">
          <h3 className="py-8 text-4xl text-center ctaHeader lg:text-6xl">
            Menu
          </h3>
          <h4 className="py-4 mx-8 text-xl">
            <span className="underline">Snídaně</span>&nbsp;&nbsp;&nbsp;
            <span className="text-xs">8:00-10:00</span>
          </h4>
          <ul className="flex flex-col w-full mx-0 md:mx-4">
            <li className="flex justify-between flex-grow pb-4 w-full">
              <span className="flex flex-col pr-4">
                <span>Hemenex</span>
                <span className="text-xs">šunka, 3 vejce, chléb</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">100 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4 w-full">
              <span className="flex flex-col pr-4">
                <span>Míchaná vejce</span>
                <span className="text-xs">3 vejce, chléb</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">70 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Párky</span>
                <span className="text-xs">2ks, chléb, hořčice</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">70 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Sladký talíř</span>
                <span className="text-xs">marmeláda, máslo, 2ks pečiva</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">70 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Slaný talíř</span>
                <span className="text-xs">šunka, šýr, máslo, 2ks pečiva</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">100 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Jogurt a müsli</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">70 Kč</span>
            </li>
          </ul>
          <h4 className="py-4 pt-16 mx-8 text-xl">
            <span className="underline">Nabídka</span>
            &nbsp;&nbsp;&nbsp;
            <span className="text-xs">17:00-20:30</span>
          </h4>
          <ul className="flex flex-col w-full mx-0 md:mx-4">
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Polévka dle denní nabídky</span>
                <span className="text-xs">s chlebem</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">60 Kč</span>
            </li>

            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Domácí utopenec</span>
                <span className="text-xs">1ks s cibulí a octem, chléb</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">80 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Klobása</span>
                <span className="text-xs">okurka, hořčice, chléb</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">160 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pt-12 pb-4">
              <span className="flex flex-col pr-4">
                <span>Smažený sýr</span>
                <span className="text-xs">
                  Eidam 40%, hranolky, tatarská omáčka
                </span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">210 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col">
                <span>Kuřecí stripsy</span>
                <span className="text-xs">hranolky</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4  place-self-end md:w-24">210 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Davelská žebírka</span>
                <span className="text-xs">
                  okurka, hořčice, beraní rohy, cibule, chléb
                </span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">210 Kč</span>
            </li>
          </ul>
          <h3 className="py-8 text-4xl text-center ctaHeader lg:text-6xl pt-28">
            Nápojový lístek
          </h3>
          <h4 className="py-4 mx-8 text-xl">
            <span className="underline">Pivo</span>&nbsp;&nbsp;&nbsp;
          </h4>

          <ul className="flex flex-col w-full mx-0 md:mx-4">
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Čepované pivo Vopičák 10°</span>
                <span className="text-xs">
                  Pivovar Němý medvěd Mělník, 0,5l
                </span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">55 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Čepované pivo Vopičák 10°</span>
                <span className="text-xs">
                  Pivovar Němý medvěd Mělník, 0,3l
                </span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">40 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Pilsner Urquell</span>
                <span className="text-xs">čepované plzeňské pivo, 0,5l</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">70 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Pilsner Urquell</span>
                <span className="text-xs">čepované plzeňské pivo, 0,3l</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">50 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Birell</span>
                <span className="text-xs">
                  nealkoholické pivo, v lahvi, 0,5l
                </span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">45 Kč</span>
            </li>
          </ul>

          <h4 className="py-4 mx-8 text-xl">
            <span className="underline">Horké nápoje</span>
          </h4>
          <ul className="flex flex-col w-full mx-0 md:mx-4">
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Čaj</span>
                <span className="text-xs">černý, zelený, ovocný</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">45 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Káva</span>
                <span className="text-xs">rozpustná, turecká</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">45 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Espresso / Lungo</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">55 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Caffe Latte / Cappuccino</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">70 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Grog</span>
                <span className="text-xs">horká voda, rum, citron</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">60 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Horká griotka</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">60 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Tatranský čaj</span>
                <span className="text-xs">0,02l, horká voda</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">80 Kč</span>
            </li>
          </ul>
          <h4 className="py-4 mx-8 text-xl">
            <span className="underline">Nealkoholické nápoje</span>
          </h4>
          <ul className="flex flex-col w-full mx-0 md:mx-4">
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Vinea čepovaná</span>
                <span className="text-xs">0,3l</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">35 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Vinea čepovaná</span>
                <span className="text-xs">0,5l</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">45 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Cola, Fanta, Sprite</span>
                <span className="text-xs">0,3l</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">45 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Džus jablko, pomeranč</span>
                <span className="text-xs">0,3l</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">45 Kč</span>
            </li>
          </ul>
          <h4 className="py-4 mx-8 text-xl">
            <span className="underline">Víno</span>
          </h4>
          <ul className="flex flex-col w-full mx-0 md:mx-4">
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Rozlévané bíle / červené</span>
                <span className="text-xs">0,2l, dle nabídky</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">60 Kč</span>
            </li>
          </ul>
          <h4 className="py-4 mx-8 text-xl">
            <span className="underline">Lihoviny a likéry</span>
          </h4>
          <ul className="flex flex-col w-full mx-0 md:mx-4">
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Božkov Rum / Griotka / Peprmint</span>
                <span className="text-xs">0,4l</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">40 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Fernet / Fernet Citrus</span>
                <span className="text-xs">0,4l</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">50 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Becherovka</span>
                <span className="text-xs">0,4l</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">50 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Tatranský čaj 52%</span>
                <span className="text-xs">0,4l</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">80 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Jägermeister</span>
                <span className="text-xs">0,4l</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">80 Kč</span>
            </li>
            <li className="flex justify-between flex-grow pb-4">
              <span className="flex flex-col pr-4">
                <span>Tullamore Dew</span>
                <span className="text-xs">0,4l</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="w-20 pl-4 place-self-end md:w-24">80 Kč</span>
            </li>
          </ul>
        </div>
      </div>
      <Cta text={uCtaText} claim={uCtaClaim} css={uCtaCss} />
    </>
  );
}

