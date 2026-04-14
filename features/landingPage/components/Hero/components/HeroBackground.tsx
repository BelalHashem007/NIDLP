import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      <Image
        src="/assets/bg.jpg"
        alt="background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#19043A] to-[#2E1866]/70" />
    </>
  );
}