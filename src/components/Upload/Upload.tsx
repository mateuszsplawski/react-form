import { Button, FormInstance, Upload as AntUpload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";

import { useUpload } from "./useUpload";
import { upload } from "constants/index";

export const Upload = ({ form }: { form: FormInstance }) => {
  const { handleChange, handlePreview, handleRemove, fileList } = useUpload({
    form,
  });
  return (
    <ImgCrop>
      <AntUpload
        showUploadList
        listType="picture"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={handleChange}
        onPreview={handlePreview}
        onRemove={handleRemove}
        fileList={fileList}
        accept={upload.acceptTypes}
      >
        <Button disabled={fileList.length !== 0} icon={<UploadOutlined />}>
          {upload.buttonName}
        </Button>
      </AntUpload>
    </ImgCrop>
  );
};
