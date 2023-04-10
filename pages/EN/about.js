import Link from "next/link";
import Header from "/components/EN/header";
export default function AboutPage() {
  return (
    <>
      <div className="bg-neutral-500">
        <Header />
      </div>
      EN
      <div locale="cz-CS">CZaboutpage</div>
      <div locale="de-DE">DEaboutpage</div>
      <div locale="en-US">ENaboutpage</div>
      <Link href="/">home</Link>
    </>
  );
}
