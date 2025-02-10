import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCamera } from "react-icons/fa";
import { Phone, Video, Mic, Images, SmilePlus, SquarePlus } from 'lucide-react';
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import "./App.css";

const MessengerUI = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { contact } = location.state || {}; 
    const [messages, setMessages] = useState([]); 
    const [inputMessage, setInputMessage] = useState(""); 
    const chatContainerRef = useRef(null); 
    const [showEmojiPicker, setShowEmojiPicker] = useState(false); 

    const back = () => {    
        navigate("/Messanger");
    };

    const sendMessage = (e) => {
        e.preventDefault(); 
        

        // Send user message and update the state
        setMessages((prevMessages) => [
            { text: inputMessage, sender: "user" }, 
            ...prevMessages
        ]);

        // Simulate the bot response after 5 seconds
        setTimeout(async () => {
            const botResponse = await getBotResponse(inputMessage);
            setMessages((prevMessages) => [
                { text: botResponse, sender: "received" }, 
                ...prevMessages
            ]);
        }, 5000); 

        setInputMessage(""); 
    };

    const handleEmojiClick = (emoji) => {
        setInputMessage((prev) => prev + emoji.native); 
    };

    const handleInputClick = () => {
        setShowEmojiPicker(false); 
    };

    const getBotResponse = async (input) => {
        let response = "";

        if (input.toLowerCase().includes("hii") || input.toLowerCase().includes("hello")) {
            response = "Hello, what is your name?";
        } else if (input.toLowerCase().includes("what is your name")) {
            response = `${contact.name}`;
        } else if (input.toLowerCase().includes("where are you from?")) {
            response = "I'm from New York City.";
        } else if (input.toLowerCase().includes("how old are you")) {
            response = "I'm 25 years old.";
        } else if (input.toLowerCase().includes("what do you do for a living?")) {
            response = "I'm a software developer.";
        } else if (input.toLowerCase().includes("what are your hobbies or interests?")) {
            response = "I enjoy reading, hiking, and playing video games.";
        } else if (input.toLowerCase().includes("what's your favorite food?")) {
            response = "I love 🍕 pizza!";
        } else if (input.toLowerCase().includes("byy")) {
            response = "Bye 👋";
        } else if (input.toLowerCase().includes("good night")) {
            response = "Sweet dreams!";
        } else if (input.toLowerCase().includes("good morning")) {
            response = "Good morning 🌄";
        } else if (input.toLowerCase().includes("hmmm")) {
            response = "🥰";
        } else if (input.toLowerCase().includes("how are you")) {
            response = "I'm fine, how about you?";
        } else if (input.toLowerCase().includes("lakki")) {
            response = "Nice! Hello Lakki.";
        } else if (input.toLowerCase().includes("fine")) {
            response = "Hmmmm.";
        } else {
            response = "Sorry, I didn't understand that.";
        }
        return response; 
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight; 
        }
    }, [messages]);

    return (
        <div   className="messenger-container">
            <div  className="header">
                <div style={{ display: "flex" }}>
                    <FaArrowLeft size={23} onClick={back} />
                    <div className="message-info1 m-4 mt-0">
                        <img src={contact?.img} alt={contact?.name} />
                        <p style={{ fontWeight: "bold", fontSize: "18px" }}>{contact?.name}
                            
                        </p><br></br>
                        
                    </div>
                </div>
                <div  >
                    <Phone className="m-2  mt-0 " size={30} />
                    <Video  className="mt-0 m-2  " size={30} />
                </div>
            </div>

            <div className="chat-container" ref={chatContainerRef} style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender === "user" ? "sent" : "received"}`}>
                        {msg.text}
                    </div>
                ))}
            </div>

            {showEmojiPicker && (
                <div className="emoji-picker" style={{ 
                    position: "absolute", 
                    bottom: "60px", 
                    left: "50%", 
                    transform: "translateX(-50%)", 
                    zIndex: 1000, 
                    background: "#222", 
                    borderRadius: "10px", 
                    boxShadow: "0px 5px 15px rgba(0,0,0,0.3)" 
                }}>
                    <Picker 
                        data={data} 
                        onEmojiSelect={handleEmojiClick} 
                        perLine={8}  
                        previewPosition="none" 
                    />
                </div>
            )}

            <form className="footer1 search-bar1" onSubmit={sendMessage}>
                <FaCamera style={{ color: "white", paddingTop: "5px" }} size={23} />
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={inputMessage}
                    onClick={handleInputClick} 
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <div style={{ display: "flex", gap: "30px", color: "white", paddingTop: "5px" }}>
                    <Mic size={20} />
                    <Images size={20} />
                    <SmilePlus onClick={() => setShowEmojiPicker(!showEmojiPicker)} size={20} />
                    <SquarePlus size={20} />
                </div>
            </form>
        </div>
    );
};

export default MessengerUI;
