import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type Card = {
  id: string;
  title: string;
  description: string;
  serviceType: string;
  responsesCount: number;
  status: string;
  version: string;
  createdAt: string;
};

export function SurveyCard({ card }: { card: Card }) {
  return (
    <Link href={`/nidlp/dashboard/survey-details/${card.id}`}>
      <Card className="ring-[#E5E7EB] bg-[#FFFFFF] rounded-2xl shadow-none">
        <CardHeader>
          <CardTitle className="font-extrabold text-2xl/[32px] text-[#111827]">
            {card.title}
          </CardTitle>
          <CardDescription className="font-bold text-sm/tight color-[#4B5563]">
            {card.serviceType}
          </CardDescription>
          <CardAction className="bg-[#D1FAE5] text-[#065F46] py-1 px-2.5 rounded-xl">
            {card.status}
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="font-medium text-sm/[28px] text-[#6B7280]">
            {card.description}
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2 items-center">
            <span className="text-[#111827] text-sm/[28px]">عدد الردود</span>
            <span className="text-[#119DA9] font-extrabold text-[40px]/[48px]">
              {card.responsesCount}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
