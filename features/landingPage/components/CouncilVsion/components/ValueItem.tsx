import Image from "next/image";

type Props = {
  icon: string;
  text: string;
};

export default function ValueItem({ icon, text }: Props) {
  return (
    <div className="flex gap-3 md:gap-5 items-center w-[45%] md:w-auto justify-center md:justify-start">
      <Image src={icon} alt={text} width={20} height={20} />
      <p>{text}</p>
    </div>
  );
}