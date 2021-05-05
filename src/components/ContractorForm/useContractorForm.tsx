import { Form } from "antd";

export const useContractorForm = () => {
  const [form] = Form.useForm();
  return { form };
};
