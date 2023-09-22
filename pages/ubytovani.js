import autoprefixer from "autoprefixer";
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
          <div className="flex-1 min-w-[300px] hidden sm:flex sm:flex-col">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_600/v1685528289/autokemp/images/chatka_okm1f9.webp"
              // src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_600/v1685524441/autokemp/images/chatka_kqblfl.jpg"
              width="600"
              height="600"
              alt="chatka"
              className="img-responsive w-full rounded-2xl drop-shadow-lg mt-12 mb-12"
            />
            <h4 className=" text-xl lg:text-2xl fontHero ">
              3D pohled do chatky
            </h4>
            <a
              href="https://www.google.com/maps/@50.4370842,14.5857547,3a,90y,187.2h,75.29t/data=!3m6!1e1!3m4!1sAF1QipM7HLf3uEnp2oBZpNs46E6xLH5WNVT9EKZ76_0I!2e10!7i11000!8i5500?hl=cs-CZ&entry=ttu"
              className="underline underline-offset-4 decoration-neutral-400 mb-48"
            >
              <Image
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1695390447/autokemp/images/chata3d_zrds3b.webp"
                width={600}
                height={300}
                alt="odkaz na 3D pohled do chatky"
                className="img-responsive w-full rounded-2xl drop-shadow-lg  mb-4"
              />
              {/* <a
              href="https://www.google.com/maps/@50.4370842,14.5857547,3a,90y,187.2h,75.29t/data=!3m6!1e1!3m4!1sAF1QipM7HLf3uEnp2oBZpNs46E6xLH5WNVT9EKZ76_0I!2e10!7i11000!8i5500?hl=cs-CZ&entry=ttu"
              className="underline underline-offset-4 mt-12 mb-24"
            > */}
              {/* <svg className="text-sm max-h-4" viewBox="0 0 48 48">
                <path
                  d="M36 24c-1.2 0-2 0.8-2 2v12c0 1.2-0.8 2-2 2h-22c-1.2
0-2-0.8-2-2v-22c0-1.2 0.8-2 2-2h12c1.2 0 2-0.8 2-2s-0.8-2-2-2h-12c-3.4
0-6 2.6-6 6v22c0 3.4 2.6 6 6 6h22c3.4 0 6-2.6
6-6v-12c0-1.2-0.8-2-2-2z"
                ></path>
                <path
                  d="M43.8 5.2c-0.2-0.4-0.6-0.8-1-1-0.2-0.2-0.6-0.2-0.8-0.2h-12c-1.2
0-2 0.8-2 2s0.8 2 2 2h7.2l-18.6 18.6c-0.8 0.8-0.8 2 0 2.8 0.4 0.4 0.8
0.6 1.4 0.6s1-0.2 1.4-0.6l18.6-18.6v7.2c0 1.2 0.8 2 2 2s2-0.8
2-2v-12c0-0.2 0-0.6-0.2-0.8z"
                ></path>
              </svg> */}
              pro 3D pohled do chatky navštivte Google Stree View &#x1F517;
            </a>
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
                vybavena WC, teplou vodou, topením a kuchyňským koutem, obývací
                část s rozkládacím gaučem a balkonem. Do chatky se vejde až 6
                osob a u každé je samostatné ohniště.
              </strong>
            </p>
            <p className="py-4 text-xs sm:hidden">
              <a
                href="https://www.google.com/maps/@50.4370842,14.5857547,3a,90y,187.2h,75.29t/data=!3m6!1e1!3m4!1sAF1QipM7HLf3uEnp2oBZpNs46E6xLH5WNVT9EKZ76_0I!2e10!7i11000!8i5500?hl=cs-CZ&entry=ttu"
                className="underline underline-offset-4 decoration-neutral-400"
              >
                <Image
                  src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1695390447/autokemp/images/chata3d_zrds3b.webp"
                  width={600}
                  height={100}
                  alt="odkaz na 3D pohled do chatky"
                  className="img-responsive w-full rounded-2xl drop-shadow-lg"
                />
                pro 3D pohled do chatky navštivte Google Stree View &#x1F517;
              </a>
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
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_600/v1685528289/autokemp/images/chatka_okm1f9.webp"
              // src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_600/v1685524441/autokemp/images/chatka_kqblfl.jpg"
              width="600"
              height="600"
              alt="chatka"
              className="sm:hidden img-responsive w-full rounded-2xl drop-shadow-lg mt-12 mb-12"
            />
          </div>
        </div>
      </div>
      <Cta text={uCtaText} claim={uCtaClaim} css={uCtaCss} />
    </>
  );
}
