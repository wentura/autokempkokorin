import Cta from "../../components/cta";
import Header from "../../components/header";

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

export default function CenikPage() {
  const uCtaText = "ideální místo pro rodinnou dovolenou";
  const uCtaClaim =
    "s dětskými hřišti a prostornými místy pro karavany, stany a obytňáky";
  const uCtaCss = "ubytovaniCta-bg";

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
          Aktuální ceník právě připravujeme.
        </div>
      </div>
      <Cta text={uCtaText} claim={uCtaClaim} css={uCtaCss} />
    </>
  );
}

