import { Button, Form, Input, Select } from "antd";
import { Option } from "antd/lib/mentions";

import { Upload } from "components/Upload/Upload";
import { contractorForm } from "constants/index";
import { useContractorForm } from "./useContractorForm";

export const ContractorForm = () => {
  const { form } = useContractorForm();
  return (
    <Form
      name="contractorForm"
      form={form}
      onFinish={(values) => console.log(values)}
    >
      <Form.Item
        label={contractorForm.nameField.label}
        name={contractorForm.nameField.name}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={contractorForm.surnameField.label}
        name={contractorForm.surnameField.name}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={contractorForm.contractorTypeField.label}
        name={contractorForm.contractorTypeField.name}
      >
        <Select>
          {contractorForm.contractorTypeField.options.map(({ name, value }) => (
            <Option key={value} value={value}>
              {name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label={contractorForm.idField.label}
        name={contractorForm.idField.name}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={contractorForm.photoField.label}
        name={contractorForm.photoField.name}
      >
        <Upload />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {contractorForm.submitButtonName}
        </Button>
      </Form.Item>
    </Form>
  );
};
