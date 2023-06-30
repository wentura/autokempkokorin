import Head from "next/head";
import Image from "next/image";
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
        <title>Ubytování - Autokemp Kokořín</title>
      </Head>
      <div className="pageHero">
        <Header />
        <div className="w-full mb-8 my-4 sm:mt-0 inline-block drop-shadow-md text-center text-white text-5xl sm:text-[88px] leading-snug fontHero bg-neutral-200 bg-opacity-20 backdrop-blur-sm">
          Ubytování
        </div>
      </div>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-wrap gap-12 mt-8 flex-col-reverse lg:flex-row">
          <div className="flex-1 min-w-[300px]">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_600/v1685528289/autokemp/images/chatka_okm1f9.webp"
              // src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_600/v1685524441/autokemp/images/chatka_kqblfl.jpg"
              width="600"
              height="600"
              alt="chatka"
              className="img-responsive w-full rounded-2xl drop-shadow-lg mt-12 mb-40"
            />
          </div>
          <div className="flex-1 min-w-[300px]">
            <h3 className="text-center text-4xl lg:text-6xl fontHero pb-4">
              Chatky
            </h3>
            <p className="py-2">
              V autokempu je 15 prostorných <strong>chat</strong> s parkovacím
              místem až pro 3 auta.
            </p>
            <p className="py-2">
              Každá chatka je
              <strong>
                {" "}
                vybavena WC, teplou vodou, topením a kuchyňkou kout, obývací
                část s rozkládacím gaučem a balkonem. Do chatky se vejde až 6
                osob a u každé je samostatné ohniště.
              </strong>
            </p>
            <h3 className="text-center text-4xl lg:text-6xl fontHero pt-12 pb-4">
              Stany a karavany
            </h3>
            <p className="py-2">
              <strong>
                Pro stany, karavany a obytné vozy jsou k dispozici čtyři plochy
                vybavené pevným nebo přenosným ohništěm a s dostatečným
                množstvím elektrických přípojek.
              </strong>
            </p>
            <p className="py-2">
              Sociální zázemí v autokempu se nachází v dvou budovách – starší v
              dolní části a <strong>novější</strong> v horní části u restaurace.
              V nových umyvárnách teče <strong>teplá voda</strong> během celého
              dne.
            </p>
            <p className="py-2">
              Domácí <strong>mazlíčci jsou vítáni</strong>, ale majitelé musí
              dodržovat pravidla kempu a udržovat čistotu.
            </p>
            <h3 className="text-center text-4xl lg:text-6xl fontHero pt-12 pb-4">
              Široká nabídka aktivit
            </h3>
            <p className="py-2">
              Lokalita Kokořínska vám umožní{" "}
              <strong>širokou škálu aktivit</strong>
              (cykloturistika, pěší turistika, projížďky na koních, koupání nebo
              lezení). Kemp je obklopen lesy a v blízkosti se nachází kulturní
              památky a přírodní zajímavosti, jako je{" "}
              <strong>
                hrad Kokořín, Houska, Kokořínské Pokličky, pivovar Lobeč, skalní
                útvary, skalní byty a jeskyně
              </strong>
              . Doporučujeme ekologické cestování po dobře značených trasách.
            </p>
          </div>
        </div>
      </div>
      <Cta text={uCtaText} claim={uCtaClaim} css={uCtaCss} />
    </>
  );
}
