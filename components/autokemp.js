import Image from "next/image";

export default function Autokemp() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
              <strong>Oddech a útěk od každodenních povinností</strong> a
              aktivní dovolenou.
            </p>
            <p className="text-base text-gray-700 md:text-lg pb-4">
              Nabízíme odpočinek v našem kempu, cykloturistiku, pěší turistiku,
              projížďky na koních, koupání nebo lezectví.
            </p>
            <p className="text-base text-gray-700 md:text-lg pb-4">
              Kemp vás uchvátí svými vysokými stromy, které ho zcela obklopují.
              Díky své úchvatné výšce vypadají jako strážci, kteří nad Vámi bdí
              ve dne i v noci.
            </p>
            <p className="text-base text-gray-700 md:text-lg pb-4">
              <strong>Celý prostor kempu je vhodný pro rodiny s dětmi.</strong>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <Image
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="/restaurace.jpg"
              alt=""
              width={200}
              height={200}
            />
            <Image
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="/ohniste.jpg"
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="px-3">
            <Image
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="/chatky.jpg"
              alt=""
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
