import { SurveyDetails } from "@/features/NIDLP/dashboard/survey-details";

export default async function SurveyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <SurveyDetails surveyId={id} />;
}
