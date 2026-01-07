import Autokemp from "../components/autokemp";
import Cta from "../components/cta";
import Hero from "../components/hero";
import Kde from "../components/kde";
import Proc from "../components/proc";

export const metadata = {
  title: "Autokemp Kokořín",
  description:
    "Odpočiňte si v Autokempu Kokořín obklopeni vysokými lesy a užijte si cykloturistiku, pěší turistiku, koupání a další aktivity",
  openGraph: {
    title: "Autokemp Kokořín",
    description:
      "Odpočiňte si v Autokempu Kokořín obklopeni vysokými lesy a užijte si cykloturistiku, pěší turistiku, koupání a další aktivity",
    images: [
      {
        url: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1685524449/autokemp/images/poster_gq3dtq.jpg",
        width: 1200,
        height: 630,
        alt: "Autokemp Kokořín",
      },
    ],
  },
};

export default function Home() {
  const ctaTextHeader =
    "odpočinek a aktivní dovolená v romantickém údolí Kokořínska";
  const ctaTextClaim =
    "Odpočiňte si v Autokempu Kokořín obklopeni vysokými lesy a užijte si cykloturistiku, pěší turistiku, koupání a další aktivity";
  const ctaBackground = "cta1-bg";

  return (
    <>
      <Hero />
      <Autokemp />
      <Proc />
      <Cta text={ctaTextHeader} claim={ctaTextClaim} css={ctaBackground} />
      <Kde />
    </>
  );
}

