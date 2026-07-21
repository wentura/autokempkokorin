import Image from "next/image";
import Link from "next/link";

const INSTAGRAM_PROFILE = "https://www.instagram.com/autokemp_kokorin/";

/** Statické náhledy — aktualizujte public/instagram/ a odkazy níže. */
const POSTS = [
  {
    src: "/instagram/01.jpg",
    href: "https://www.instagram.com/reel/DaQA9AHsYpa/",
    alt: "Autokemp Kokořín na Instagramu",
  },
  {
    src: "/instagram/02.jpg",
    href: "https://www.instagram.com/reel/DaM3IS4M7S2/",
    alt: "Autokemp Kokořín na Instagramu",
  },
  {
    src: "/instagram/03.jpg",
    href: "https://www.instagram.com/reel/DYd90PTMSXA/",
    alt: "Autokemp Kokořín na Instagramu",
  },
  {
    src: "/instagram/04.jpg",
    href: "https://www.instagram.com/reel/DYPkNojsIVX/",
    alt: "Autokemp Kokořín na Instagramu",
  },
  {
    src: "/instagram/05.jpg",
    href: "https://www.instagram.com/reel/DXL_QcFjHo6/",
    alt: "Autokemp Kokořín na Instagramu",
  },
  {
    src: "/instagram/06.jpg",
    href: "https://www.instagram.com/reel/DWy13EoDOd5/",
    alt: "Autokemp Kokořín na Instagramu",
  },
  {
    src: "/instagram/07.jpg",
    href: "https://www.instagram.com/p/DTxHQCOjJ2-/",
    alt: "Autokemp Kokořín na Instagramu",
  },
  {
    src: "/instagram/08.jpg",
    href: "https://www.instagram.com/reel/DTU97y_DOH0/",
    alt: "Autokemp Kokořín na Instagramu",
  },
  {
    src: "/instagram/09.jpg",
    href: "https://www.instagram.com/p/DTQWe0DDIAW/",
    alt: "Autokemp Kokořín na Instagramu",
  },
];

export default function InstagramEmbed() {
  return (
    <section className="w-full py-12 md:py-16">
      <Link
        href={INSTAGRAM_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 mb-8 text-gray-900 hover:opacity-80 transition-opacity"
      >
        <Image src="/i.svg" alt="" width={28} height={28} />
        <span className="text-lg md:text-xl font-medium">
          Sledujte nás na našem Instagramu
        </span>
      </Link>

      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-0 w-full">
        {POSTS.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src={post.src}
              alt={post.alt}
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 11vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
