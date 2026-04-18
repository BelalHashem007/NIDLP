import ReusableCardComponent from "@/components/nidlp/ReusableCardComponent";
import {
  MOCK_SURVEYS,
  SURVEY_RESULTS,
} from "@/features/NDLIP/data/surveys-dashboard-data";
import { SurveyText, SurveyTextQuestion } from "./components/survey-text";
import {
  SurveyMultiChoice,
  SurveyMultiChoiceQuestion,
} from "./components/survey-multi-choice";
import {
  SurveyRating,
  SurveyRatingQuestion,
} from "./components/survey-rating";

export function SurveyDetails({ surveyId }: { surveyId: string }) {
  const survey = MOCK_SURVEYS.find((s) => s.id === surveyId);
  const surveyResults = SURVEY_RESULTS.find((s) => s.surveyId === surveyId);

  return (
    <div className="max-w-232 mx-auto grid grid-cols-1 gap-12">
      <ReusableCardComponent>
        <div className="flex gap-6.5 flex-col">
          <div
            style={{
              background:
                "linear-gradient(180deg, #19043A 55.51%, #2E1866 150.49%)",
            }}
            className="relative w-full h-64 overflow-hidden rounded-xl flex items-center justify-center p-8"
          >
            <h2 className="text-white font-bold text-[32px]/[48px]">
              {survey?.title}
            </h2>
          </div>
          <p className="px-8 mb-6.5">{survey?.description}</p>
        </div>
      </ReusableCardComponent>
      {surveyResults?.questions.map((q, i) => {
        const type = q.type;
        if (type === "text")
          return <SurveyText question={q as SurveyTextQuestion} key={i} />;
        else if (type === "multi-choice")
          return (
            <SurveyMultiChoice
              question={q as SurveyMultiChoiceQuestion}
              key={i}
            />
          );
        else if (type === "rating")
          return (
            <SurveyRating
              question={q as SurveyRatingQuestion}
              key={i}
            />
          );
        return null;
      })}
    </div>
  );
}
