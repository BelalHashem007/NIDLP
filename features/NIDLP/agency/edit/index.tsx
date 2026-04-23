"use client";
import ReusableCardComponent from "@/components/nidlp/ReusableCardComponent";
import { AgencyForm, Inputs } from "../add/components/AgencyForm";
import { agenciesData } from "../../data/agency-data";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

export function AgencyEditView({ agencyId }: { agencyId: string }) {
  const agency = agenciesData.find((a) => a.id === Number(agencyId));
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const oldAgency = agenciesData.find((a) => a.id === Number(agencyId));

    const agencyToAdd: (typeof agenciesData)[0] = {
      entity_name: data.agencyName,
      city: data.agencyCity,
      email: data.email,
      id: Number(agencyId),
      user_count: oldAgency?.user_count as number,
      logo_url: oldAgency?.logo_url as string,
      agency: data.agency,
      fax: data.fax,
      mail: data.mail,
      phone: data.phone,
      postal: data.postal,
    };
    agenciesData.splice(
      agenciesData.findIndex((a) => a.id === Number(agencyId)),
      1,
    );
    agenciesData.unshift(agencyToAdd);
    router.push(`/nidlp/agency?edit=${agencyToAdd.id}`);
  };
  return (
    <ReusableCardComponent>
      <AgencyForm onSubmit={onSubmit} variant="edit" agencyToEdit={agency} />
    </ReusableCardComponent>
  );
}
