import Link from "next/link";
import Header from "../components/header";
// import backgroundVideoM from "../public/atc2.mp4";
// import backgroundVideo from "../public/atc2.webm";
export default function Hero() {
  return (
    <div className="min-h-screen md:min-h-[800px] max-h-screen md:max-h-[800px] overflow-hidden bg-black bg-opacity-30">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        className="overflow-hidden min-h-screen md:min-h-[800px] max-h-[90vh] md:max-h-[800px]"
        // poster="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685524449/autokemp/images/poster_gq3dtq.jpg"
        poster={`poster_gq3dtq.jpg`}
      >
        <source
          // src="https://res.cloudinary.com/dam7wdzvx/video/upload/ac_none,e_accelerate:-10,q_auto:eco/v1679762279/autokemp/atc4_a0zrs3.webm"
          // src="https://res.cloudinary.com/dam7wdzvx/video/upload/v1679762279/autokemp/atc4_a0zrs3.webm"
          // src="https://res.cloudinary.com/dam7wdzvx/video/upload/q_auto:eco/v1679762279/autokemp/atc4_a0zrs3.webm"
          src="https://res.cloudinary.com/dsoicy8fk/video/upload/v1722773006/atc4_a0zrs3_uvk9wz.webm"
          // src={`atc4_a0zrs3.webm`}
          type="video/webm"
        />

        <source src="../atc_slow.mp4" type="video/mp4" />
      </video>
      <div className="z-1">
        <Header />
        <div className=" sm:text-center sm:pl-0 sm:pt-8">
          <h2 className="tracking-tight text-white text-5xl sm:text-[88px] leading-snug fontHero">
            <span className="relative inline-block w-full py-5 mt-24 text-center sm:mt-0 sm:pr-0 sm:pl-0 drop-shadow-md">
              klidné místo
              <br />v romantickém
              <br />
              údolí <span className="text-7xl sm:text-[118px]">K</span>okořínska
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
