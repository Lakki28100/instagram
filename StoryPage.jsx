import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { EllipsisVertical, Heart, Send, MessageCircle } from "lucide-react";
import "./App.css";

const StoryPage = () => {
    const location = useLocation();
    const navigate = useNavigate(); 
    const { stories } = location.state || {};
    const [isLiked, setIsLiked] = useState(false);

    const back = () => {
        navigate("/Home");
    };

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('Message sent');
    };

    return (
        <div style={{ borderLeft: "2px solid purple", borderRight: "2px solid purple" }} className="messenger-container1">
            <div className="header1">
                <div style={{ display: "flex" }}>
                    <FaArrowLeft style={{ margin: "10px", marginRight: "0px" }} size={23} onClick={back} />
                    <div className="message-info2 m-4 mt-0">
                        <img src={stories?.avatar} alt={stories?.name} />
                        <p style={{ fontWeight: "bold", fontSize: "18px", paddingTop: "8px", margin: "0px" }}>
                            {stories?.name}
                        </p>
                    </div>
                </div>
                <div><EllipsisVertical style={{ margin: "10px" }} size={30} /></div>
            </div>

            <div className="video-container">
                <video className="full-screen-video" autoPlay muted loop>
                    <source src={stories?.videoUrl || "https://videos.pexels.com/video-files/7494795/7494795-sd_360_640_30fps.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <form style={{ color: "white" }} className="footer2" onSubmit={sendMessage}>
                <MessageCircle size={30} style={{ marginLeft: "12px" }} />
                <input className="search-bar2" type="text" placeholder="Type your message... " />
                <Heart
                    size={30}
                    style={{ cursor: "pointer", color: isLiked ? "red" : "white" }} 
                    onClick={toggleLike} 
                />
                <Send size={30} />
            </form>
        </div>
    );
};

export default StoryPage;
