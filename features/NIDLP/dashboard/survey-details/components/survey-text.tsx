import ReusableCardComponent from "@/components/nidlp/ReusableCardComponent";
import { formatIso } from "@/lib/utils";

type SurveyTextAnswer = {
  text: string;
  date: string;
};

export type SurveyTextQuestion = {
  questionText: string;
  answers: SurveyTextAnswer[];
};

export function SurveyText({ question }: { question: SurveyTextQuestion }) {
  return (
    <div>
      <ReusableCardComponent>
        <div className="p-8 flex flex-col gap-8">
          <div className="flex flex-col gap-2.5 py-3">
            <h3 className="font-bold text-sm/[20px] text-[#111827]">
              {question.questionText}
            </h3>
            <p className="text-xs/[16px] text-[#6B7280]">
              أجاب {question.answers.length} من الأشخاص على هذا السؤال
            </p>
          </div>
          <div>
            <ul
              className="max-h-50 overflow-y-auto flex flex-col gap-9"
              style={{
                scrollbarColor: "#D1D5DB white",
                scrollbarWidth: "thin",
              }}
            >
              {question.answers.map((a, i) => {
                return (
                  <li key={i} className="flex flex-col gap-2.5">
                    <p className="text-[#111827] text-base/[24px]">{a.text}</p>
                    <span className="text-[#9CA3AF] text-xs/[16px]">
                      {formatIso(a.date)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </ReusableCardComponent>
    </div>
  );
}
