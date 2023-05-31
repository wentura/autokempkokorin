import Head from "next/head";
import Autokemp from "../components/autokemp";
import Cta from "../components/cta";
import Hero from "../components/hero";
import Kde from "../components/kde";
import Proc from "../components/proc";

export default function Home() {
  const ctaTextHeader =
    "odpočinek a aktivní dovolená v romantickém údolí Kokořínska";
  const ctaTextClaim =
    "Odpočiňte si v Autokempu Kokořín obklopeni vysokými lesy a užijte si cykloturistiku, pěší turistiku, koupání a další aktivity";
  const ctaBackground = "cta1-bg";
  return (
    <>
      <Head>
        <title>Autokemp Kokořín</title>
      </Head>
      <Hero />
      <Autokemp />
      <Proc />
      <Cta text={ctaTextHeader} claim={ctaTextClaim} css={ctaBackground} />
      <Kde />
    </>
  );
}
