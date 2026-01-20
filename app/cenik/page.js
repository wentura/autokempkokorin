import Cta from "../../components/cta";
import Header from "../../components/header";
import { cenik } from "./cenik";

export const metadata = {
  title: "Ceník",
  description:
    "Ceník ubytování v Autokempu Kokořín. Chatky, stany, karavany a další služby. Přijímáme hotovost i platební karty.",
  openGraph: {
    title: "Ceník - Autokemp Kokořín",
    description:
      "Ceník ubytování v Autokempu Kokořín. Chatky, stany, karavany a další služby.",
    images: [
      {
        url: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1685528296/autokemp/images/ubytovani2_hwzxmu.webp",
        width: 1200,
        height: 630,
        alt: "Ceník Autokemp Kokořín",
      },
    ],
  },
};

// Helper function to determine current season
function getCurrentSeason() {
  const now = new Date();
  const month = now.getMonth() + 1; // 1-12
  const day = now.getDate();

  // Sezona: 1.4 - 31.10
  if (month > 3 && month < 11) {
    return "sezona";
  }
  if (month === 4 && day >= 1) {
    return "sezona";
  }
  if (month === 10 && day <= 31) {
    return "sezona";
  }
  // Mimo sezónu: 1.1 - 31.3 a 1.11 - 31.12
  return "mimo_sezonu";
}

function PriceItem({ label, price }) {
  return (
    <li className="flex justify-between flex-grow pb-4">
      <span className="flex flex-col pr-4">
        <span>{label}</span>
      </span>
      <span className="flex-1 border-b-2 border-dotted"></span>
      <span className="w-20 pl-4 place-self-end md:w-24">{price} Kč</span>
    </li>
  );
}

function PriceSection({ title, items, className = "" }) {
  return (
    <div className={className}>
      <h4 className="py-4 mx-8 text-xl">
        <span className="underline">{title}</span>
      </h4>
      <ul className="flex flex-col w-full mx-0 md:mx-4">
        {Object.entries(items).map(([label, price]) => (
          <PriceItem key={label} label={label} price={price} />
        ))}
      </ul>
    </div>
  );
}

export default function CenikPage() {
  const uCtaText = "ideální místo pro rodinnou dovolenou";
  const uCtaClaim =
    "s dětskými hřišti a prostornými místy pro karavany, stany a obytňáky";
  const uCtaCss = "ubytovaniCta-bg";
  const currentSeason = getCurrentSeason();
  const currentPrices = cenik[currentSeason];

  return (
    <>
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
          <p className="pb-4 mx-8 text-sm text-gray-700">
            Přijímáme hotovost i platební karty
          </p>

          {/* Chatky popis */}
          <div className="pb-4 mx-8 text-sm text-gray-700">
            <p className="pb-2">
              <strong>13x Chatka standard</strong> – dvoupodlažní chatka vybavena
              WC, teplou vodou, topením a kuchyňským koutem, obývací část s
              rozkládacím gaučem a balkonem. Do chatky se vejde až 6 osob a u
              každé je samostatné ohniště.
            </p>
            <p>
              <strong>2x Chatka komfort</strong> – stejné vybavení jako je na
              chatce standard + sprcha
            </p>
          </div>

          {/* Aktuální sezóna - Chatky */}
          <div className="mb-8">
            <h4 className="py-4 mx-8 text-xl">
              <span className="underline">
                {currentSeason === "sezona" ? "Sezóna" : "Mimo sezónu"}
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="text-sm font-normal">
                ({currentPrices.termin})
              </span>
            </h4>
            <PriceSection title="Chatky" items={currentPrices.chatky} />
            {currentPrices.poplatky_chatky && (
              <PriceSection
                title="Další poplatky"
                items={currentPrices.poplatky_chatky}
                className="mt-4"
              />
            )}
          </div>

          {/* Druhá sezóna - Chatky */}
          <div className="mb-8">
            <h4 className="py-4 mx-8 text-xl">
              <span className="underline">
                {currentSeason === "sezona" ? "Mimo sezónu" : "Sezóna"}
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="text-sm font-normal">
                ({cenik[currentSeason === "sezona" ? "mimo_sezonu" : "sezona"].termin})
              </span>
            </h4>
            <PriceSection
              title="Chatky"
              items={
                cenik[currentSeason === "sezona" ? "mimo_sezonu" : "sezona"].chatky
              }
            />
            {cenik[currentSeason === "sezona" ? "mimo_sezonu" : "sezona"]
              .poplatky_chatky && (
              <PriceSection
                title="Další poplatky"
                items={
                  cenik[currentSeason === "sezona" ? "mimo_sezonu" : "sezona"]
                    .poplatky_chatky
                }
                className="mt-4"
              />
            )}
          </div>

          {/* Jednorázové poplatky při pobytu na chatce */}
          <PriceSection
            title="Jednorázové poplatky při pobytu na chatce"
            items={cenik.jednorazove_poplatky_chatky}
            className="mb-8"
          />

          {/* Apartmán */}
          <div className="mb-8">
            <h4 className="py-4 mx-8 text-xl">
              <span className="underline">Apartmán</span>
            </h4>
            <p className="pb-4 mx-8 text-sm text-gray-700">
              {cenik.apartman.popis}
            </p>
            <ul className="flex flex-col w-full mx-0 md:mx-4">
              <PriceItem label="Apartmán / noc" price={cenik.apartman.cena} />
            </ul>
          </div>

          {/* Stany a karavany */}
          <PriceSection
            title="Stany a karavany"
            items={cenik.stany_karavany}
            className="mb-8"
          />

          {/* Pobyt v kempu */}
          <PriceSection
            title="Pobyt v kempu"
            items={cenik.pobyt_kempu}
            className="mb-8"
          />

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
