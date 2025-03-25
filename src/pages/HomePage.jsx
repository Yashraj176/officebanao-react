import React, { useState } from "react";
import ImageUploader from "../components/ImageUploader";
import ImageGallery from "../components/ImageGallery";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const handleUpload = (files) => {
    const newImages = Array.from(files).map((file) => ({
      src: URL.createObjectURL(file),
      liked: false,
      hidden: false,
    }));
    setImages([...images, ...newImages]);
  };

  const handleLike = (index) => {
    setImages(images.map((img, i) => (i === index ? { ...img, liked: !img.liked } : img)));
  };

  const handleDelete = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleHide = (index) => {
    setImages(images.map((img, i) => (i === index ? { ...img, hidden: true } : img)));
  };

  const filteredImages = images.filter((img) => {
    return !img.hidden && (filter === "all" || (filter === "liked" && img.liked));
  });

  return (
    <div className="container mt-4">
    
      <div className="d-flex gap-3 mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search Assets"
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
        <select className="form-select" onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="liked">Liked</option>
        </select>
        <ImageUploader onUpload={handleUpload} />
      </div>

      <ImageGallery images={filteredImages} onLike={handleLike} onDelete={handleDelete} onHide={handleHide} />
    </div>
  );
};

export default HomePage;
