import InternalDashboardIndex from "@/features/NIDLP/dashboard/internal-dashboard";
import { Suspense } from "react";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const tap = (await searchParams).tap ?? "general";
  return (
    <div>
      <Suspense fallback={null}>
        <InternalDashboardIndex tap={tap} />
      </Suspense>
    </div>
  );
}
