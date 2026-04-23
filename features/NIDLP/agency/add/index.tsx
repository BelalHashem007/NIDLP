"use client";
import ReusableCardComponent from "@/components/nidlp/ReusableCardComponent";
import { SubmitHandler } from "react-hook-form";
import { agenciesData } from "../../data/agency-data";
import { useRouter } from "next/navigation";
import { AgencyForm, Inputs } from "./components/AgencyForm";

export function AgencyAddView() {
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const agencyToAdd: (typeof agenciesData)[0] = {
      entity_name: data.agencyName,
      city: data.agencyCity,
      email: data.email,
      id: agenciesData.length + 1,
      user_count: 1,
      logo_url: "",
      agency: data.agency,
      fax: data.fax,
      mail: data.mail,
      phone: data.phone,
      postal: data.postal,
    };

    agenciesData.unshift(agencyToAdd);
    router.push(`/nidlp/agency?add=${agencyToAdd.id}`);
  };
  return (
    <ReusableCardComponent>
      <AgencyForm onSubmit={onSubmit} />
    </ReusableCardComponent>
  );
}
