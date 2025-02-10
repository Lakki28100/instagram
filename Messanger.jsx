import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./App.css";
import { SquarePen, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MessengerUI = () => {
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const back = () => {
    navigate("/Home");
  };

  const massage = (contact) => {
    navigate("/Massage", { state: { contact } }); // Pass contact data to the new page
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        const users = data.map((user) => ({
          id: user.id,
          name: user.name,
          img: `https://i.pravatar.cc/150?img=${user.id}`,
        }));
        const messages = users.map((user) => ({
          id: user.id,
          name: user.name,
          img: user.img,
          lastMessage: "seen 2h ago",
        }));
        setContacts(users);
        setMessages(messages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="messenger-container">
      <div className="header">
        <div style={{ display: "flex" }}>
          <FaArrowLeft size={23} onClick={back} />
          <h4 className="m-4 mt-0 pl-5"><b>Lakki__001</b></h4>
        </div>
        <SquarePen size={30} />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Ask Meta AI or Search" />
      </div>
      <div className="stories-container">
        {contacts.map((contact) => (
          <div key={contact.id} className="story">
            <img src={contact.img} alt={contact.name} />
            <p><small>{contact.name}</small></p>
          </div>  
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 className="messages-title">Messages</h3>
        <h3 className="requests-title">Requests(2)</h3>
      </div>
      <div>
        {messages.map((msg) => (
          <div key={msg.id} onClick={() => massage(msg)} className="message-item">
            <div className="message-info">
              <img src={msg.img} alt={msg.name} />
              <div className="message-text">
                <p className=' mt-3 mb-0'>{msg.name}</p>
                <span>{msg.lastMessage}</span>
              </div>
            </div>
            <div className="message-icons">
              <Camera className="camera-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MessengerUI;
