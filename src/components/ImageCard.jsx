import React, { useState } from "react";
import { BsHeart, BsHeartFill, BsThreeDotsVertical } from "react-icons/bs";

const ImageCard = ({ src, liked, onLike, onEdit, onDelete, onHide }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="position-relative p-2 image-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
    
      <img src={src} alt="Uploaded" className="img-fluid rounded shadow-sm" style={{ width: "100%" }} />
      
      
      <button
        className={`btn position-absolute top-0 end-0 m-2 like-btn ${hover ? "visible" : "hidden"}`}
        onClick={onLike}
      >
        {liked ? <BsHeartFill color="red" size={20} /> : <BsHeart size={20} />}
      </button>

    
      <div className={`position-absolute bottom-0 end-0 m-2 dots-menu ${hover ? "visible" : "hidden"}`}>
        <button className="btn" onClick={() => setMenuOpen(!menuOpen)}>
          <BsThreeDotsVertical size={20} />
        </button>


        {menuOpen && (
          <div 
            className="position-absolute bg-white border rounded shadow-sm p-2"
            style={{ right: 0, zIndex: 1000, width: "120px" }}
          >
            <button className="btn btn-sm d-block w-100 text-start" onClick={() => { onHide(); setMenuOpen(false); }}>
              Hide
            </button>
            <button className="btn btn-sm d-block w-100 text-start" onClick={() => { onEdit(); setMenuOpen(false); }}>
              Edit
            </button>
            <button className="btn btn-sm d-block w-100 text-start text-danger" onClick={() => { onDelete(); setMenuOpen(false); }}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
