import { AgencyEditView } from "@/features/NDLIP/agency/edit";
import { redirect } from "next/navigation";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { agency } = await searchParams;
  if (!agency) redirect("/nidlp/agency");
  return <AgencyEditView agencyId={agency as string} />;
}
