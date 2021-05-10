import { Button, Form, Input, Select } from "antd";
import { FormLayout } from "antd/lib/form/Form";
import { Rule } from "rc-field-form/lib/interface";

import { Upload } from "components/Upload/Upload";
import { contractorForm } from "constants/index";
import { useContractorForm } from "./useContractorForm";

export const ContractorForm = () => {
  const {
    form,
    initialValues,
    idFieldPlaceholder,
    idFieldRules,
    handleSelectChange,
    handleFinish,
    handleReset,
  } = useContractorForm();
  return (
    <Form
      initialValues={initialValues}
      name={contractorForm.formName}
      form={form}
      layout={contractorForm.formLayout as FormLayout}
      onFinish={handleFinish}
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
        <Select onChange={handleSelectChange}>
          {Object.values(contractorForm.contractorTypeField.options).map(
            ({ name, value }) => (
              <Select.Option key={value} value={value}>
                {name}
              </Select.Option>
            )
          )}
        </Select>
      </Form.Item>
      <Form.Item
        label={contractorForm.idField.label}
        name={contractorForm.idField.name}
        rules={idFieldRules as Rule[]}
        hasFeedback
      >
        <Input placeholder={idFieldPlaceholder} />
      </Form.Item>
      <Form.Item
        label={contractorForm.photoField.label}
        name={contractorForm.photoField.name}
      >
        <Upload form={form} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {contractorForm.submitButtonName}
        </Button>
        <Button onClick={handleReset}>{contractorForm.resetButtonName}</Button>
      </Form.Item>
    </Form>
  );
};
