import Image from "next/image";
import Link from "next/link";
import Cta from "../components/cta";
import Header from "../components/header";
export default function AboutPage() {
  const uCtaText = "Ubytujte se v Autokempu Kokořín";
  const uCtaClaim = "navštivte kulturní památky a přírodní zajímavosti v okolí";
  const uCtaCss = "volnycasCta-bg";

  return (
    <>
      <div className="pageHero">
        <Header />
        <div className="w-full mb-8 my-4 sm:mt-0 inline-block drop-shadow-md text-center text-white text-5xl sm:text-[88px] leading-snug fontHero bg-neutral-200 bg-opacity-20 backdrop-blur-sm">
          Volný čas
        </div>
      </div>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="flex-1 min-w-[300px]">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_800/v1685524442/autokemp/images/foto1_vprv4e.jpg"
              width={800}
              height={600}
              alt=""
            />
          </div>
          <div className="flex-1 min-w-[300px]">
            <p className="py-8 fontHero text-3xl md:text-5xl text-center">
              Pěší turistika, cykloturistika
            </p>
            <p className="py-2">
              Navštivte památky či bizarní útvary, mezi které patří hrad
              Kokořín, hrad Houska, Staráky, skalní byt ve Lhotce, skalní mlýn v
              obci Tubož, sklaní mlýn u osady Hlučov, jeskyně Pod Máchovou
              skálou, Klemperka, Mordloch, Klácelka, Kaple Máří Magdalény,
              Harfenice, Had a spousty dalších.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-8 flex-row-reverse">
          <div className="flex-1 min-w-[300px]">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_800/v1685524442/autokemp/images/foto2_v7dcka.jpg"
              width={800}
              height={600}
              alt=""
            />
          </div>
          <div className="flex-1 min-w-[300px]">
            <p className="py-8 fontHero text-3xl md:text-5xl text-center">
              Koupání
            </p>
            <p className="py-2">
              Koupání v současné době poskytuje rybník Harasov vzdálený od kempu
              necelé 4 km. Malé parkoviště pro auta, dvě pískové pláže, vysoké
              skály a travnatá plocha nabízejí své zázemí.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="flex-1 min-w-[300px]">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_800/v1685524444/autokemp/images/foto5_x79qsh.jpg"
              width={800}
              height={600}
              alt=""
            />
          </div>
          <div className="flex-1 min-w-[300px]">
            <p className="py-8 fontHero text-3xl md:text-5xl text-center">
              Lezectví
            </p>
            <p className="py-2">
              Lezecké stěny mohou vyzkoušet nejen ti nejmenší, ale i jejich
              rodiče samozřejmě pod odborným dozorem. Instrukce poskytuje
              lezecký klub Mšeno nebo tréninková skála pro malé nad hospodou u
              Grobiána.
            </p>
          </div>
        </div>
        {/* <div className="flex flex-wrap gap-4 mt-8">
          <div className="flex-1 min-w-[300px]">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_800/v1685524442/autokemp/images/foto3_ukaiaw.jpg"
              width={800}
              height={600}
              alt=""
            />
          </div>
          <div className="flex-1 min-w-[300px]">
            <p className="py-8 fontHero text-3xl md:text-5xl text-center">
              Rybolov
            </p>
            <p className="py-2">
              Ubytovaní hosté mají možnost rybolovu v blízkém rybníku Kačírek.
              Bližší informace o rybářském řádu a rybaření můžete získat přímo v
              recepci.
            </p>
          </div>
        </div> */}
        <div className="flex flex-wrap gap-4 mt-8 flex-row-reverse">
          <div className="flex-1 min-w-[300px]">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_800/v1685524443/autokemp/images/foto4_z2v9fi.jpg"
              width={800}
              height={600}
              alt=""
            />
          </div>
          <div className="flex-1 min-w-[300px]">
            <p className="py-8 fontHero text-3xl md:text-5xl text-center">
              Jezdectví
            </p>
            <p className="py-2">
              Kokořínské trasy, lesy i některé památky můžete vidět ze hřbetu
              koně huculského. Farma Hucul klub Laka je od kempu vzdálená zhruba
              6,5 km.
            </p>
          </div>
        </div>
      </div>
      <Cta text={uCtaText} claim={uCtaClaim} css={uCtaCss} />
    </>
  );
}
