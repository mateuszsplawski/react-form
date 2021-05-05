import ky from "ky";

const prefixUrl = "https://localhost:60001/";
const client = ky.create({ prefixUrl });

const formClient = {
  addContractor({ contractorData }: { contractorData: any }) {
    client.post("Contractor/Save", { json: { contractorData } });
  },
};

export default formClient;
