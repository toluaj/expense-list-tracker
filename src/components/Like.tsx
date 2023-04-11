import { useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'

interface LikeProps {
    onClick(): void;
}

const Like = ({onClick}: LikeProps) => {
    const [clicked, setClicked] = useState(false)
    const toggle = () => {
        setClicked(!clicked);
        onClick();
    }

  return (
    <div>
        { clicked ? <AiTwotoneHeart color="#ff6b81" size={20} onClick={toggle} /> : 
        <AiOutlineHeart color="#ff6b81" size={20} onClick={toggle}/> }
    </div>
  )
}

export default Like