
import Header from "../Header/Header"
import HeroBackground from "./components/HeroBackground";
import HeroContent from "./components/HeroContent";
import MotionWrapper from "../../animations/MotionWrapper";
import { fadeIn } from "../../animations/animations";

export default function Hero() {
  return (
    <section id="about-council" className="relative min-h-screen w-full">
      <HeroBackground />

      <div className="relative z-10 text-[#E5E7EB]">
        <Header />
        <MotionWrapper animation={fadeIn("down", 0.6)}>
          <HeroContent />
        </MotionWrapper>
      </div>
    </section>
  );
}