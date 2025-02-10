import { FaHome, FaSearch, FaHeart,FaPlusSquare,} from 'react-icons/fa';
import { SquarePlus,Clapperboard } from 'lucide-react';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const navigate = useNavigate();
    const handelReels=()=>
      {
        navigate('/Reels')
      }
      const handelHome=()=>
      {
        navigate('/Home')
      }
      const handelSearch=()=>
      {
        navigate('/Search')
      }
     const handelProfile=()=>
      {
        navigate('/User-info')
      }
      return (
        <div >
        <div className="footer ">
        <button onClick={handelHome} className="btn">
          <FaHome size={25} />
        </button>
        <button onClick={handelSearch} className="btn">
          <FaSearch size={25} />
        </button>
        <button  className="btn">
        <SquarePlus size={25} />
        </button>
        <button onClick={handelReels} className="btn">
          <Clapperboard  size={20} />
        </button>
        <button onClick={handelProfile} className="btn">
          <CgProfile size={20} />
        </button>
      </div></div>
      );
    };
    export default Footer;