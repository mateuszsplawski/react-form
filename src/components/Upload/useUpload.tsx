import { FormInstance, message } from "antd";
import { useState } from "react";

import { upload } from "constants/index";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";

export const useUpload = ({ form }: { form: FormInstance }) => {
  const [fileList, setFileList] = useState<any[]>([]);

  const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
    if (info.fileList[0]) {
      setFileList([info.fileList[0]]);
      form.setFieldsValue({
        photo: info.fileList[0],
      });
    }

    if (info.file.status === "done") {
      message.success(`${upload.imgSuccessMessage} ${info.file.name}`);
    } else if (info.file.status === "error") {
      message.error(`${upload.imgErrMessage} ${info.file.name}`);
    }
  };

  const handlePreview = async (file: any) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    (imgWindow as any).document.write(image.outerHTML);
  };

  const handleRemove = () => {
    setFileList([]);
    form.setFieldsValue({
      photo: undefined,
    });
  };

  return { handleChange, handlePreview, handleRemove, fileList };
};
