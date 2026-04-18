import ReusableCardComponent from "@/components/nidlp/ReusableCardComponent";

type SurveyMultiChoiceAnswer = {
  label: string;
  count: number;
};

export type SurveyMultiChoiceQuestion = {
  questionText: string;
  answers: SurveyMultiChoiceAnswer[];
};

export function SurveyMultiChoice({
  question,
}: {
  question: SurveyMultiChoiceQuestion;
}) {
  const totalAnswers =
    question.answers?.reduce((acc, cur) => acc + cur.count, 0) ?? 0;
  return (
    <div>
      <ReusableCardComponent>
        <div className="p-8 flex flex-col gap-8 rounded-lg">
          <div className="py-3">
            <h3 className="font-bold text-sm/[20px] text-[#111827]">
              {question.questionText}
            </h3>
            <p className="text-xs/[16px] text-[#6B7280]">
              أجاب {totalAnswers} من الأشخاص على هذا السؤال
            </p>
          </div>

          <div>
            <ul className="flex flex-col gap-6">
              {question.answers.map((a, i) => {
                return (
                  <li key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <p className="font-bold text-xs/[16px] text-[#111827]">
                        {a.label}
                      </p>
                      <div className="text-xs/[16px] flex gap-2">
                        <span className="text-[#6B7280]">{a.count} اختيار</span>
                        <span>
                          {((a.count * 100) / totalAnswers).toFixed(2)}%
                        </span>
                      </div>
                    </div>
                    <div className="h-4 flex">
                      <div
                        className="h-full bg-[#119DA9]"
                        style={{
                          width: `${((a.count * 100) / totalAnswers).toFixed(2)}%`,
                        }}
                      ></div>
                      <div className="h-full flex-1 bg-[#F3F4F6]"></div>
                    </div>
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
