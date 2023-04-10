import Link from "next/link";
import Header from "../components/header";
export default function AboutPage() {
  return (
    <>
      <div className="pageHero ">
        <Header />
        <div className="w-full mb-8 pl-4 my-4 pr-16 sm:mt-0 sm:pr-0 sm:pl-0 inline-block drop-shadow-md text-center text-white text-4xl sm:text-[88px] leading-snug fontHero ">
          Ubytování
        </div>
      </div>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="flex-1 min-w-[300px] bg-neutral-300">image</div>
          <div className="flex-1 min-w-[300px]">
            <p className="py-2">
              V patnácti chatkách až pro šest osob s kuchyňkou, teplou vodou a
              toaletou.
            </p>
            <p className="py-2">
              Na čtyřech plochách s dostupným sociálním zázemím pro stany,
              karavany a obytné vozy.
            </p>
            <p className="py-2">
              Elektrické přípojky, ohniště na každé ploše a u každé chatky,
              sociální zázemí v dolní i horní části kempu.
            </p>
          </div>
        </div>
        <div locale="cz-CS">CZaboutpage</div>
        <div locale="de-DE">DEaboutpage</div>
        <div locale="en-US">ENaboutpage</div>
        <Link href="/">home</Link>
      </div>
    </>
  );
}
