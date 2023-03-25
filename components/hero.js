import Link from "next/link";
import Header from "../components/header";
// import backgroundVideoM from "../public/atc2.mp4";
// import backgroundVideo from "../public/atc2.webm";
export default function Hero() {
  return (
    <div className=" min-h-screen md:min-h-[800px] max-h-screen md:max-h-[800px] overflow-hidden bg-black bg-opacity-30">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        className="overflow-hidden  min-h-screen md:min-h-[800px] max-h-screen md:max-h-[800px]"
        poster="/poster.jpg"
      >
        <source
          src="https://res.cloudinary.com/dam7wdzvx/video/upload/v1679762279/autokemp/atc4_a0zrs3.webm"
          type="video/webm"
        />

        {/* <source src="../atc_slow.mp4" type="video/mp4" /> */}
      </video>
      <div className="z-1">
        <Header />
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <a href="/" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400"></div>
              </a>
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 text-4xl font-bold leading-none tracking-tight text-white sm:text-[64px]  md:mx-auto md:leading-[80px]">
                  <span className="relative inline-block drop-shadow-md">
                    Klidné místo
                    <br />v romantickém
                    <br />
                    údolí Kokořínska
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
