import { FaCloudUploadAlt } from "react-icons/fa";
import "./UploadBox.css";

function UploadBox({
  title = "Upload File",
  description = "Drag & drop your file here or click to browse.",
  accept = "*",
  onChange,
}) {
  return (
    <label className="upload-box">

      <input
        type="file"
        accept={accept}
        onChange={onChange}
        hidden
      />

      <FaCloudUploadAlt className="upload-icon" />

      <h3>{title}</h3>

      <p>{description}</p>

      <button type="button" className="upload-button">
        Choose File
      </button>

    </label>
  );
}

export default UploadBox;
