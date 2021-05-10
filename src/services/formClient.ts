import ky from "ky/distribution";

import { ContractorData } from "types/index";

const prefixUrl = "https://localhost:60001/";
const client = ky.create({ prefixUrl });

const formClient = {
  addContractor({ contractorData }: { contractorData: ContractorData }) {
    return client.post("Contractor/Save", { json: { contractorData } });
  },
};

export default formClient;
