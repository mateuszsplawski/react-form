import { contractorForm } from "constants/index";
import { Contractor } from "types";

export const validateIdValue = ({
  inputValue,
  currentContractorType,
}: {
  inputValue: string;
  currentContractorType: Contractor;
}) => {
  const inputValueArr = inputValue.split("").map((value) => Number(value));

  if (currentContractorType === "company") {
    const pattern = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    const controlNumberModulo = 11;
    let controlNumberSum = 0;

    for (let i = 0; i < pattern.length; i++) {
      controlNumberSum += pattern[i] * inputValueArr[i];
    }

    return new Promise((resolve, reject) =>
      controlNumberSum % controlNumberModulo === inputValueArr[9]
        ? resolve(true)
        : reject(contractorForm.idField.defaultErrMessage)
    );
  } else if (currentContractorType === "person") {
    const pattern = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    const controlNumberSubstract = 10;
    let controlNumberSum = 0;

    for (let i = 0; i < pattern.length; i++) {
      if ((pattern[i] * inputValueArr[i]).toString().length === 2) {
        controlNumberSum += Number(
          (pattern[i] * inputValueArr[i]).toString()[1]
        );
      } else {
        controlNumberSum += pattern[i] * inputValueArr[i];
      }
    }

    if (controlNumberSum.toString().length === 2) {
      return new Promise((resolve, reject) =>
        controlNumberSubstract - Number(controlNumberSum.toString()[1]) ===
        inputValueArr[10]
          ? resolve(true)
          : reject(contractorForm.idField.defaultErrMessage)
      );
    } else {
      return new Promise((resolve, reject) =>
        controlNumberSubstract - controlNumberSum === inputValueArr[10]
          ? resolve(true)
          : reject(contractorForm.idField.defaultErrMessage)
      );
    }
  }
};
