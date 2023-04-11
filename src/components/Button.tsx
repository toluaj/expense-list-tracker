import { useState } from "react";
import DismissableAlert from "./DismissableAlert";
import styles from './Buttons.module.css'

interface ButtonProps {
    children: string;
    onClick(): void;
    color?: 'primary' | 'secondary' | 'success' | 'danger';
}



const Button = ({children, color='success', onClick}: ButtonProps) => {
    const [clicked, setClicked] = useState(false)

    // const onClick = () => {
    //     setshowAlert(!showAlert)
    // }

  return (
    <div>
        <button type="button" onClick={onClick} className={styles.btn}>{children}</button>
    </div>
  )
}

export default Button