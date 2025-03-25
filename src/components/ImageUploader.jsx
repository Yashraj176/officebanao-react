import React from "react";
import { BsPlusCircle } from "react-icons/bs";

const ImageUploader = ({ onUpload }) => {
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length) {
      onUpload(files);
    }
  };

  return (
    <label className="btn btn-primary d-flex align-items-center">
      <BsPlusCircle size={20} className="me-2" />
      Add
      <input type="file" multiple accept="image/*" hidden onChange={handleFileChange} />
    </label>
  );
};

export default ImageUploader;
