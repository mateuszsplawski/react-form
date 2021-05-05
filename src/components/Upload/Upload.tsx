import { Upload as AntUpload } from "antd";

export const Upload = () => {
  return (
    <AntUpload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={() => console.log("beforeupload")}
      onChange={() => console.log("change")}
    >
      Upload
    </AntUpload>
  );
};
