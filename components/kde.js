import Image from "next/image";
import Link from "next/link";
export default function Kde() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="text-center font-extralight">
        <h2 className="text-3xl md:text-4xl font-black pb-6 ctaHeader">
          kde najdete svůj klid a odpočinek?
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
                src="/at.png"
                width={50}
                height={50}
                alt=""
                className="mx-auto pb-4"
              />
              <p>info@atckokorin.cz</p>
            </Link>
          </div>
          <div className="flex-1 w-52 min-w-[250px] flex-col items-center">
            <Link href="tel:00420773687792" className="cursor-pointer">
              <Image
                src="/phone.png"
                width={50}
                height={50}
                alt=""
                className="mx-auto pb-4"
              />
              <p>+420 773 68 77 92</p>
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
                src="/map.png"
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
          src="/atc-mapa.jpg"
          width={1000}
          height={522}
          alt="mapy.cz, kde najdete ATC Kokořín"
          className="mx-auto"
        />
      </div>
    </div>
  );
}
