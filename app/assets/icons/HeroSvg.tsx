import Image from "next/image";

export default function HeroSvg() {
  return (
    <Image
      className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top flex justify-center items-center"
      src="/terminal.gif"
      width={500}
      height={420}
      quality={100}
      alt={"terminal"}
      // placeholder="blur"
      priority
    />
  );
}
