import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const RandomImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const initialImages = [
      { id: 1, download_url: "https://picture.lk/files/preview/1280x717/11689496404kuovv0cusepxd76rn1jlpu6h7mvxwns2hciuegh80bb2jtjvkgqi64puovlffrozto5mbuaguzh64srghvfhlrhnoalntomwlhzb.jpg", author: "Author 1", likes: Math.floor(Math.random() * 1000), liked: false },
      { id: 2, download_url: "https://picture.lk/files/preview/1280x717/11722453052evcc3by7hevle6bde2z8jpawthvevuto8udifby1balcgwosm07xw5vrf4jwuyxcka7nvgc1mimx6f7jbva02cubqjmckuuropxb.jpg", author: "Author 2", likes: Math.floor(Math.random() * 1000), liked: false },
      { id: 3, download_url: "https://picture.lk/files/preview/1280x717/11722453791czmmcj5xm3dgippl9neuoi5iutxipyu82zatmdhgmmblwf1zrjyd3jybom7uixdbi6llaxey49tl5goi8tsjr18lmks9u1ylkmtk.jpg", author: "Author 3", likes: Math.floor(Math.random() * 1000), liked: false },
      { id: 4, download_url: "https://picture.lk/files/preview/1280x717/11722451193oqnoiuws3jdkwhnnfvkp7om0ara3b55i589kc7wff84oa8hcihk6mw6cujd8uttxf32v58ghbzlpef6zkhd7pepgmni8iczs9rib.jpg", author: "Author 4", likes: Math.floor(Math.random() * 1000), liked: false },
      { id: 5, download_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pb-qVaXaLJyJJAWV6jsx1yHQ-0iZS_PzAg&s", author: "Author 5", likes: Math.floor(Math.random() * 1000), liked: false },
      { id: 6, download_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&s", author: "Author 6", likes: Math.floor(Math.random() * 1000), liked: false },
      { id: 7, download_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4L3gGKHunaa7SLivHdYNlAjxfwNy8smMQg&s", author: "Author 7", likes: Math.floor(Math.random() * 1000), liked: false },
      { id: 8, download_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEGmbKUh7NUSSfiLA4Vd1sfLGWw_gGNP-yw&s", author: "Author 8", likes: Math.floor(Math.random() * 1000), liked: false },
      
    ];
    setImages(initialImages);
  }, []);

  const handleLike = (id) => {
    setImages(images.map(image => 
      image.id === id ? { ...image, liked: !image.liked, likes: image.liked ? image.likes - 1 : image.likes + 1 } : image
    ));
  };

  return (
    <div className="posts">
      {images.map((image) => (
        <div key={image.id} className="post-container m-5">
          <img
            className="post"
            src={image.download_url}
            alt={image.author}
            style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px" }}
          />
          <div className="like-overlay">
            <button className="like-button" onClick={() => handleLike(image.id)}>
              <Heart size={25} style={{ color: image.liked ? "red" : "white" }} />
              <span className="like-count"><b>{image.likes}K</b></span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomImageGallery;
