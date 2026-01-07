import Image from "next/image";
import Cta from "../../components/cta";
import Header from "../../components/header";

export const metadata = {
  title: "Ubytování",
  description:
    "Ubytování v Autokempu Kokořín. 15 prostorných chat s parkovacím místem, WC, teplou vodou a topením. Pro stany, karavany a obytné vozy jsou k dispozici čtyři plochy.",
  openGraph: {
    title: "Ubytování - Autokemp Kokořín",
    description:
      "Ubytování v Autokempu Kokořín. 15 prostorných chat s parkovacím místem, WC, teplou vodou a topením.",
    images: [
      {
        url: "https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_600/v1685528289/autokemp/images/chatka_okm1f9.webp",
        width: 1200,
        height: 630,
        alt: "Chatka v Autokempu Kokořín",
      },
    ],
  },
};

export default function UbytovaniPage() {
  const uCtaText = "ideální místo pro rodinnou dovolenou";
  const uCtaClaim =
    "s dětskými hřišti a prostornými místy pro karavany, stany a obytňáky";
  const uCtaCss = "ubytovaniCta-bg";

  return (
    <>
      <div className="pageHero">
        <Header />
        <div className="w-full mb-8 my-4 sm:mt-0 inline-block drop-shadow-md text-center text-white text-5xl sm:text-[88px] leading-snug fontHero bg-neutral-200 bg-opacity-20 backdrop-blur-sm">
          Ubytování
        </div>
      </div>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col-reverse flex-wrap gap-12 mt-8 lg:flex-row">
          <div className="flex-1 min-w-[300px] hidden sm:flex sm:flex-col">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/f_auto,q_auto,c_scale,w_600/v1685528289/autokemp/images/chatka_okm1f9.webp"
              width={600}
              height={600}
              alt="Chatka v Autokempu Kokořín"
              className="w-full mt-12 mb-12 img-responsive rounded-2xl drop-shadow-lg"
              loading="lazy"
              quality={85}
            />
            <h4 className="text-xl lg:text-2xl fontHero">
              3D pohled do chatky
            </h4>
            <a
              href="https://www.google.com/maps/@50.4370842,14.5857547,3a,90y,187.2h,75.29t/data=!3m6!1e1!3m4!1sAF1QipM7HLf3uEnp2oBZpNs46E6xLH5WNVT9EKZ76_0I!2e10!7i11000!8i5500?hl=cs-CZ&entry=ttu"
              className="mb-48 underline underline-offset-4 decoration-neutral-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/f_auto,q_auto,w_600/v1695390447/autokemp/images/chata3d_zrds3b.webp"
                width={600}
                height={300}
                alt="Odkaz na 3D pohled do chatky na Google Street View"
                className="w-full mb-4 img-responsive rounded-2xl drop-shadow-lg"
                loading="lazy"
                quality={85}
              />
              pro 3D pohled do chatky navštivte Google Stree View &#x1F517;
            </a>
          </div>
          <div className="flex-1 min-w-[300px]">
            <h3 className="pb-4 text-4xl text-center lg:text-6xl fontHero">
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
                vybavena WC, teplou vodou, topením a kuchyňským koutem, obývací
                část s rozkládacím gaučem a balkonem.
                <br />
                Do chatky se vejde až 6 osob a u každé je samostatné ohniště.
              </strong>
            </p>
            <p>
              <strong>
                Příjezd do chatek je po 15 hodině a v den odjezdu je nutné
                opustit chatku do 10 hodin.
              </strong>
            </p>
            <p className="py-4 text-xs sm:hidden">
              <a
                href="https://www.google.com/maps/@50.4370842,14.5857547,3a,90y,187.2h,75.29t/data=!3m6!1e1!3m4!1sAF1QipM7HLf3uEnp2oBZpNs46E6xLH5WNVT9EKZ76_0I!2e10!7i11000!8i5500?hl=cs-CZ&entry=ttu"
                className="underline underline-offset-4 decoration-neutral-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1695390447/autokemp/images/chata3d_zrds3b.webp"
                  width={600}
                  height={100}
                  alt="Odkaz na 3D pohled do chatky na Google Street View"
                  className="w-full img-responsive rounded-2xl drop-shadow-lg"
                  loading="lazy"
                />
                pro 3D pohled do chatky navštivte Google Stree View &#x1F517;
              </a>
            </p>
            <h3 className="pt-12 pb-4 text-4xl text-center lg:text-6xl fontHero">
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
              <strong>
                Plochy nejsou rozděleny na jednotlivá místa a proto neděláme
                rezervace.
              </strong>
            </p>
            <p className="py-2">
              Sociální zázemí v autokempu se nachází v dvou budovách – v dolní a
              v horní části areálu u restaurace. <strong>Teplá voda</strong>{" "}
              teče během celého dne.
            </p>
            <p className="py-2">
              <strong>Příjezd po 12 hodině a odjezd do 12 hodin.</strong>
            </p>
            <p className="py-2">
              <strong>
                Zdrojem vody pro celý kemp je studna, která není bezedná. Voda
                je pitná a je nutné s ní šetřit. Proto neposkytujeme službu
                napouštění vody do karavanů a obytných vozů, napouštění dětských
                bazénků a mytí kol.
                <br />
                Děkujeme za pochopení a respektování pravidel.
              </strong>
            </p>
            <p className="py-2">
              Domácí <strong>mazlíčci jsou vítáni</strong>, ale majitelé musí
              dodržovat pravidla kempu a udržovat čistotu.
            </p>
            <h3 className="pt-12 pb-4 text-4xl text-center lg:text-6xl fontHero">
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
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/f_auto,q_auto,c_scale,w_600/v1685528289/autokemp/images/chatka_okm1f9.webp"
              width={600}
              height={600}
              alt="Chatka v Autokempu Kokořín"
              className="w-full mt-12 mb-12 sm:hidden img-responsive rounded-2xl drop-shadow-lg"
              loading="lazy"
              quality={85}
            />
          </div>
        </div>
      </div>
      <Cta text={uCtaText} claim={uCtaClaim} css={uCtaCss} />
    </>
  );
}

