import Head from "next/head";
import Image from "next/image";

export default function Autokemp() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bahiana&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="px-4 py-4 mb-24 mx-auto max-w-full sm:max-w-5xl border-0 border-l-4 border-gray-400">
          <h3 className=" mx-auto font-sans font-bolder ctaHeader text-2xl mb-4">
            Aktuality autokempu Kokořín
          </h3>
          <ul className="text-md">
            <li>
              <strong>
                Dne 9.9. 2023 odpoledne a večer a 10.9. 2023 dopoledne
              </strong>{" "}
              je restaurace v kempu uzavřena z důvodu konání soukromé akce.
              <br />
              Děkujeme za pochopení
            </li>
          </ul>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6 font-extralight">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none ctaHeader">
                Autokemp KOKOŘÍN
              </h2>
              <p className="text-gray-700 md:text-lg pb-4">
                V romantickém <strong>údolí Kokořínska</strong>,
                <br className="block lg:hidden" />{" "}
                <strong>kraji Karla Hynka Máchy</strong>.
              </p>
              <p className="text-base text-gray-700 md:text-lg pb-4">
                <strong>
                  Oddech a útěk od každodenních povinností, aktivní dovolenou
                </strong>
                .
              </p>
              <p className="text-base text-gray-700 md:text-lg pb-4">
                Nabízíme odpočinek v našem kempu, cykloturistiku, pěší
                turistiku, projížďky na koních, koupání nebo lezectví.
              </p>
              <p className="text-base text-gray-700 md:text-lg pb-4">
                Kemp vás uchvátí svými vysokými stromy, které ho zcela
                obklopují. Díky své úchvatné výšce vypadají jako strážci, kteří
                nad Vámi bdí ve dne i v noci.
              </p>
              <p className="text-base text-gray-700 md:text-lg pb-4">
                <strong>
                  Celý prostor kempu je vhodný pro rodiny s dětmi.
                </strong>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <Image
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_400/v1685524446/autokemp/images/restaurace_ch7zhi.jpg"
                alt=""
                width={200}
                height={200}
              />
              <Image
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_300/v1685524447/autokemp/images/ohniste_yu3yfr.jpg"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="px-3">
              <Image
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_400/v1685528289/autokemp/images/chatky_mhulg8.webp"
                alt=""
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
