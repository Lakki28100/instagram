import { useState } from "react";
import Footer from "./Footer";
import { FaMusic } from "react-icons/fa";
import { Heart, Send, MessageCircle, EllipsisVertical } from "lucide-react";
import "./App.css";

export default function Reels() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedReels, setLikedReels] = useState({});
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");
  const [activeReel, setActiveReel] = useState(null);
  const reelsData = [
    { id: 1, video: "https://videos.pexels.com/video-files/25252817/11900241_360_640_30fps.mp4", username: "@mike_smith", music: "Adele - Rolling in the Deep" },
    { id: 2, video: "https://videos.pexels.com/video-files/7495096/7495096-sd_360_640_30fps.mp4", username: "@anna_lee", music: "Drake - God's Plan" },
    { id: 3, video: "https://videos.pexels.com/video-files/5602372/5602372-sd_360_640_30fps.mp4", username: "@mike_smith", music: "Adele - Rolling in the Deep" },
    { id: 4, video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", username: "@anna_lee", music: "Drake -God's Plan" },
    { id: 5, video: "https://videos.pexels.com/video-files/17489553/17489553-sd_360_640_30fps.mp4", username: "@lana_lee", music: "blue  - hunny sigh" },
    { id: 6, video: "https://videos.pexels.com/video-files/5155396/5155396-sd_640_360_30fps.mp4", username: "@roase_lee", music: "white - davide's Plan" }
  ];
  const getRandomNumber = (min, max) => `${Math.floor(Math.random() * (max - min + 1)) + min}K`;
  
  const handleScroll = (event) => {
    const { scrollTop, clientHeight } = event.target;
    const index = Math.round(scrollTop / clientHeight);
    setCurrentIndex(index);
  };

  const toggleLike = (id) => {
    setLikedReels((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openComments = (id) => {
    setActiveReel(id);
    setShowComments(true);
  };

   const closeComments = () => {
    setShowComments(false);
    setActiveReel(null);
  };

  const addComment = () => {
    if (newComment.trim()) {
      setComments((prev) => ({
        ...prev,
        [activeReel]: [...(prev[activeReel] || []), newComment]
      }));
      setNewComment("");
    }
  };

  return (
    <>
      <div className="reels-container" onScroll={handleScroll}>
        {reelsData.map((reel, index) => (
          <div key={reel.id} className={`reel ${index === currentIndex ? "active" : ""}`}>
            <video src={reel.video} autoPlay loop muted className="reel-video"></video>
            <div className="overlay1">
              <div className="user-info1">Reels</div>
            </div>
            <div className="overlay">
              <div className="user-info">{reel.username} <button type="button" className="user-btn">Follow</button></div>
              <div className="music-info"><FaMusic /> {reel.music}</div>
            </div>
            <div className="actions">
            <div className="icon-section" onClick={() => toggleLike(reel.id)}>
                <Heart size={30} style={{ color: likedReels[reel.id] ? "red" : "white", cursor: "pointer" }} />
                <small>{getRandomNumber(100, 900)}</small>
              </div>
              <div className="icon-section" onClick={() => openComments(reel.id)}>
                <MessageCircle size={30} />
                <small>{getRandomNumber(50, 500)}</small>
              </div>
              <div className="icon-section">
                <Send size={30} />
                <small>{getRandomNumber(30, 300)}</small>
              </div>
              <div className="icon-section">
                <EllipsisVertical size={30} />
                <small>More</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="m-5">
        <Footer />
      </div>
      {/* Comment Section Modal */}
      {showComments && (
        <div className="comment-modal">
          <div className="comment-box">
            <button className="close-btn" style={{color:"red"}} onClick={closeComments}>✖</button>
           <h2> <b style={{color:"white"}}>Comments</b></h2>
            <div className="comment-list">
              {comments[activeReel]?.length > 0 ? (
                comments[activeReel].map((comment, index) => <p style={{border:"1px solid black",borderRadius:"10px",padding:"5px",marginRight:"15px"}}key={index}>{comment}</p>)
              ) : (
                <p >No comments yet.</p>
              )}  
            </div>
            <div className="comment-input">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={addComment}>Post</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
