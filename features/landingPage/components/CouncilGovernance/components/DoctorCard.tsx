import Image from "next/image";

export default function DoctorCard() {
  return (
    <div className="left-30 z-10">
      <Image
        src="/assets/doctor.png"
        alt="doctor"
        width={360}
        height={360}
      />
    </div>
  );
}