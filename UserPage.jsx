
import './App.css';
import RandomImage from './RandomImage';
import {FaUser } from 'react-icons/fa';
import Footer from './Footer';
import { MdGridOn } from 'react-icons/md';
import { FaPlay } from 'react-icons/fa'; 

const ProfileHeader = ({ user }) => {
  
  return ( 
    <div className="profile-header">
      <button style={{backgroundColor:"black" ,border:"none"}}><img  className="profile-picture mt-0" src={user.profilePicture} alt="profile" /></button>
      <div className="profile-info mt-5">
        <h2>{user.fullName}</h2>
        <p>@{user.username}</p>
        <div style={{color:"white"}} className="follow-info">
          <span>{user.post} <br/>Posts</span> 
          <span>{user.followers}<b>M</b> <br/>Followers</span>
          <span>{user.following} <br/> Following</span>
        </div>
        <p className="bio">{user.bio}</p>
        <div >
            <button style={{color:"white"}} className='profile-button1 m-2'type='button'>
                Edit profile
            </button>
            <button style={{color:"white"}} className='profile-button1' type='button'>
                Share profile
            </button>
            <button  style={{width:'4%',color:"white"}} className="profile-button1  m-2">
              <FaUser size={20} />
             </button>
        </div>  
      </div>  
    </div> 
  );
};
const InstagramProfile = () => {
 
 
  return (
   <>
   <div  className='lakki pt-3 pb-0'>
      <button  className="btn">
      <MdGridOn size={30} color="#E4405F" />
      </button>
      <button className="btn">
      <FaPlay size={30} color="#E4405F" />
      </button>
      
   </div>
   </>
  );
};
const App = () => {
  const user = {
    username: 'Lakki_001',
    fullName: 'Lakki Patel ',
    bio: 'Building the future with React. Web Developer. Tech Enthusiast.',
    profilePicture: "https://i.pravatar.cc/150?img=0",
    followers: 25,
    following: 1,
    post:5,
  };
  return (
    <div className="profile-container m-5"> 
      <ProfileHeader   user={user} />
      <InstagramProfile/>
      <RandomImage/>
      <Footer />
    </div>
  );
};

export default App;
