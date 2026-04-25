import { CompanyShowView } from "@/features/NIDLP/company/show";
import { redirect } from "next/navigation";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { company } = await searchParams;
  if (!company) redirect("/nidlp/company");
  return <CompanyShowView companyId={company as string} />;
}
