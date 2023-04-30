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
          Kontakt
        </div>
      </div>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="flex-1 min-w-[300px] bg-neutral-300">image</div>
          <div className="flex-1 min-w-[300px]">
            <p className="py-2">
              V autokempu je k dispozici 15 prostorných chat s parkovacím místem
              až pro 3 auta, které jsou postaveny s 6-ti metrovými rozestupy.
            </p>
            <p className="py-2">
              Každá samostatná chatka WC a umyvadlo, kuchyňský kout, obývací
              část s rozkládacím gaučem a balkonem. Do každe chatky se pohodlně
              vejde až 6 osob. Ke každé chatce patří samostatné ohniště.
            </p>
            <p className="py-2">
              K dispozici jsou ohniště a plochy pro stanování, karavany a obytné
              přívěsy s dostatečným množstvím elektrických přípojek.
            </p>
            <p className="py-2">
              Sociální zázemí v autokempu se nachází v dvou budovách – starší v
              dolní části a zrekonstruovaná v horní části u restaurace. V nových
              umyvárnách teče teplá voda během celého dne.
            </p>
            <p className="py-2">
              Domácí mazlíčky lze vzít s sebou, ale majitelé musí dodržovat
              pravidla kempu a udržovat čistotu.
            </p>
            <p className="py-2">
              V autokempu Kokořín se můžete těšit na širokou nabídku aktivit
              (cykloturistika, pěší turistika, projížďky na koních, koupání nebo
              lezení). Kemp je obklopen lesy a v blízkosti se nachází kulturní
              památky a přírodní zajímavosti, jako je hrad Kokořín, Kokořínské
              Pokličky a Žába, skalní byty a jeskyně. Doporučujeme ekologické
              cestování po dobře značených trasách. Hřiště pro míčové hry,
              pískoviště a hračky pro děti jsou také k dispozici.
            </p>
          </div>
        </div>
      </div>
      <Cta text={uCtaText} claim={uCtaClaim} css={uCtaCss} />
    </>
  );
}
