import Image from "next/image";
import Link from "next/link";
import Cta from "../components/cta";
import Header from "../components/header";
export default function Kontakt() {
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
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="text-center font-extralight">
          <h2 className="text-4xl md:text-8xl pb-6 ctaHeader shadow-sm">
            Autokemp Kokořín{" "}
          </h2>
          <p className="font-bold underline underline-offset-4">
            <a
              href="https://www.google.com/maps/place/ATC+Koko%C5%99%C3%ADn/@50.4368384,14.5829041,17z/data=!3m1!4b1!4m9!3m8!1s0x47095f787b1f1c89:0x1d00af105e3dc4a0!5m2!4m1!1i2!8m2!3d50.436835!4d14.585479!16s%2Fg%2F1tgcws7p"
              target="_blank"
            >
              Autokemp Kokořín, Kokořínský důl 60, 277 23, Kokořín
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-8 py-8">
            <div className="flex-1 w-52 min-w-[250px] flex-col items-center">
              <Link href="mailto:info@atckokorin.cz" className="cursor-pointer">
                <Image
                  src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685606549/autokemp/images/at2_ysfp92.webp"
                  width={50}
                  height={50}
                  alt=""
                  className="mx-auto pb-4"
                />
                <p>info@atckokorin.cz</p>
              </Link>
            </div>
            <div className="flex-1 w-52 min-w-[250px] flex-col items-center">
              <Link href="tel:00420731165669" className="cursor-pointer">
                <Image
                  src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_60/v1685528291/autokemp/images/phone_gm04jn.webp"
                  width={50}
                  height={50}
                  alt=""
                  className="mx-auto pb-4"
                />
                <p>+420 731 165 669</p>
              </Link>
            </div>
            <div className="flex-1 w-52 min-w-[250px] flex-col items-center">
              <Link
                href="https://en.mapy.cz/zakladni?source=firm&id=12947471&x=14.5845681&y=50.4377334&z=15"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Image
                  src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_60/v1685528290/autokemp/images/map_d4erp7.webp"
                  width={50}
                  height={50}
                  alt=""
                  className="mx-auto pb-4"
                />
                <p>
                  50.4381561N
                  <br />
                  14.5874186E
                </p>
              </Link>
            </div>
          </div>
          <Image
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685528288/autokemp/images/atc-mapa_gwzvyr.webp"
            width={1000}
            height={522}
            alt="mapy.cz, kde najdete ATC Kokořín"
            className="mx-auto"
          />
        </div>
      </div>
    </>
  );
}
