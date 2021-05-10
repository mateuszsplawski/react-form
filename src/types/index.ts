export type Contractor = "company" | "person";

export type ContractorData = {
  name: string | undefined;
  surname: string | undefined;
  type: string | undefined;
  id: string | undefined;
  photo: File | undefined;
};
