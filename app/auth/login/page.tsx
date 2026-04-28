"use client";

import Image from "next/image";
import { useState } from "react";
import Step2 from "./LoginSteps/Step2";
import Step1 from "./LoginSteps/Step1";
import clsx from "clsx";
import Step3 from "./LoginSteps/Step3";
import Step4 from "./LoginSteps/Step4";
const steps = [
  { id: 1, title: "Login" },
  { id: 2, title: "Shipping" },
  { id: 3, title: "Payment" },
  { id: 4, title: "Confirmation" },

];

function LoginPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [role, setRole] = useState<string>("");

  console.log(role);
  return (
    <div className="min-h-[110vh] flex flex-col gap-8 items-center  bg-linear-to-b from-[#150131] via-[#16023f] to-[#19054b]">
      {/* Logo (أصغر شوي) */}
      <div className="pt-10">
        <Image
          src="/NIDLP ARABIC LOGO.png"
          alt="logo"
          width={360}
          height={200}
        />
      </div>

      <div className="  bg-white h-fit rounded-2xl shadow-2xl ">
        {/* Content */}
        <div className="">
          {currentStep === 1 && <Step1 onChangeRole={setRole} />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
          {currentStep === 4 && <Step4 />}
          {/* Controls (زر عريض) */}

          <div className="pb-8 px-6 h-16">
            <button
              disabled={!role}
              onClick={() =>
                setCurrentStep((prev) => Math.min(prev + 1, steps.length))
              }
              className={clsx(
                "group relative w-full py-3 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300",

                role
                  ? "text-white cursor-pointer"
                  : "text-gray-500 cursor-not-allowed",
              )}
            >
              {/* Background */}
              <div
                className={clsx(
                  "absolute inset-0 transition-all duration-300",

                  role
                    ? "bg-linear-to-r from-[#5291A9] via-[#5A6FB0] to-[#634AAE] group-hover:scale-105"
                    : "bg-gray-300",
                )}
              />

              {/* Glow effect */}
              {role && (
                <div className="absolute inset-0 bg-linear-to-r from-[#5291A9]/30 to-[#634AAE]/30 blur-xl opacity-0 group-hover:opacity-100 transition" />
              )}

              {/* Border glow */}
              {role && (
                <div className="absolute inset-0 rounded-2xl border border-white/20" />
              )}

              {/* Content */}
              <span className="relative flex items-center justify-center gap-2">
                التالي
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
