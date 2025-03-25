import React, { useRef, useState } from "react";
import Cropper from "react-cropper";


const ImageEditor = ({ image, onSave }) => {
  const cropperRef = useRef(null);
  const [editImage, setEditImage] = useState(image);

  const handleCrop = () => {
    const croppedImage = cropperRef.current.cropper.getCroppedCanvas().toDataURL();
    onSave(croppedImage);
  };

  return (
    <div className="text-center">
      <Cropper
        src={editImage}
        style={{ height: 300, width: "100%" }}
        aspectRatio={1}
        guides={false}
        ref={cropperRef}
      />
      <button className="btn btn-success mt-3" onClick={handleCrop}>
        Save Crop
      </button>
    </div>
  );
};

export default ImageEditor;
