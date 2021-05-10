import { Form, message } from "antd";
import { useState } from "react";

import { contractorForm } from "constants/index";
import { validateIdValue } from "./ContractorForm.helpers";
import { Contractor, ContractorData } from "types";
import formClient from "services/formClient";

export const useContractorForm = () => {
  const [currentContractorType, setCurrentContractorType] = useState(
    Object.values(contractorForm.contractorTypeField.options)[0]
      .value as Contractor
  );

  const [form] = Form.useForm();

  const handleSelectChange = (value: Contractor) => {
    form.setFieldsValue({
      id: undefined,
    });
    setCurrentContractorType(value);
  };

  const handleReset = () => {
    form.resetFields();
  };

  const handleFinish = (data: ContractorData) => {
    if (!Object.values(data).includes(undefined)) {
      formClient
        .addContractor({ contractorData: data })
        .catch((err) =>
          message.error(
            `${contractorForm.onFinish.addContractorErrMessage} ${err}`
          )
        );
    } else {
      message.error(contractorForm.onFinish.fieldsErrMessage);
    }
  };

  const idFieldRules = [
    currentContractorType === "person"
      ? { len: 11, message: contractorForm.idField.personErrMessage }
      : { len: 9, message: contractorForm.idField.companyErrMessage },
    {
      validator: async (rule: unknown, value: string) => {
        return validateIdValue({
          inputValue: value,
          currentContractorType,
        });
      },
      message: contractorForm.idField.defaultErrMessage,
    },
  ];

  return {
    form,
    initialValues: { type: currentContractorType },
    handleSelectChange,
    handleFinish,
    handleReset,
    currentContractorType,
    idFieldRules,
    idFieldPlaceholder: (contractorForm.idField as { [key: string]: string })[
      currentContractorType
    ],
  };
};
