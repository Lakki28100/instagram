import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import { FaFacebookMessenger } from "react-icons/fa";
import { Heart, Send, MessageCircle, Bookmark } from "lucide-react";
import { useNavigate } from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savedPosts, setSavedPosts] = useState({});
  const [savedlike, setSavedlike] = useState({});

  const navigate=useNavigate()
  const storyshow=(stories)=>
    {
      navigate("/StoryPage", { state: { stories } })
    }
   const Messanger=()=>
    {
      
      navigate("/Messanger")
    }
  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()),
    ])
      .then(([usersData, postsData]) => {
        setUsers(usersData);
        setStories([
          { id: 0, name: "Your Story", avatar: "https://i.pravatar.cc/150?img=0" },
          ...usersData.slice(0, 9).map((user, index) => ({
            id: user.id,
            name: user.name,
            avatar: `https://i.pravatar.cc/150?img=${index + 1}`,
          })),
        ]);
        setPosts(
          postsData.slice(0, 10).map((post, index) => ({
            ...post,
            user: usersData[index % usersData.length],
            likes: `${Math.floor(Math.random() * 900) + 100}M`,
            comments: `${Math.floor(Math.random() * 500) + 50}K`,
            shares: `${Math.floor(Math.random() * 300) + 30}K`,
          }))
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      })}, 
  []);
  const toggleSave = (postId) => {
    setSavedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };
  const toggleSave1 = (postId) => {
    setSavedlike((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };
  return (
    <div className="app-container body">
      <header className="header-container">
        <div className="logo-section">𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</div>
        <div className="header-icons-section">
          <span className="icon heart-icon">
            <Heart size={30} />
            <span className="red-dot"></span>
          </span>
          <span className="icon" onClick={Messanger}>
            <FaFacebookMessenger size={30} />
            <small className="red-dot1"><small className="nomber">2</small></small>
          </span>
        </div>
      </header>
       <div className="story-container">
        {loading ? (
          <p>Loading Stories...</p>
        ) : (
          <div className="stories-list">
            {stories.map((story) => (
              <div onClick={()=>storyshow(story)} key={story.id} className="story-item">
                <img src={story.avatar} alt={story.name} className="story-avatar" />
                <span>{story.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="posts-container">
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <div className="posts-list">
            {posts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <img
                    src={`https://i.pravatar.cc/150?img=${post.user.id}`}
                    alt={post.user ? post.user.name : "Unknown User"}
                    className="post-avatar"
                  />
                  <span className="post-username">{post.user ? post.user.name : "Unknown User"}</span>
                </div>
                <img
                  src={`https://picsum.photos/seed/${post.id}/600/400`}
                  alt="Post"
                  className="post-image"/>
                <div className="post-actions">
                  <span className={`icon save-icon1 ${savedlike[post.id] ? 'saved' : ''}`} onClick={() => toggleSave1(post.id)} >
                  <Heart size={30} /> 
                  </span>{post.likes}
                  <span className="icon"><MessageCircle size={30} /> </span><b>{post.comments}</b>
                  <span className="icon"><Send size={30} /> </span><b>{post.shares}</b>
                  <span className={`icon save-icon ${savedPosts[post.id] ? 'saved' : ''}`} onClick={() => toggleSave(post.id)}>
                    <Bookmark size={30} />
                  </span>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
        <div className="m-5">
          <Footer />
        </div>
    </div>
)}
export default App;
