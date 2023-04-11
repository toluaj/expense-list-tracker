import { useState } from "react"
import Alert from "./components/Alert"
import Button from "./components/Button"
import DismissableAlert from "./components/DismissableAlert"
import {ListGroup} from "./components/ListGroup"
import Message from "./Message"
import './App.css'
import Like from "./components/Like"

function App() {
    const [showAlert, setshowAlert] = useState(false)
   
    const onClick = () => {
      setshowAlert(!showAlert)
    }
    return (
    <div>
    {/* {showAlert && <DismissableAlert onClick={onClick} />} */}
    {/* <Button onClick={onClick}>My button</Button> */}
    {/* <ListGroup /> */}
    {/* <Button children="Canvas View" onClick={() => alert("Clicked this!")} /> */}
    <Like onClick={() => console.log('clicked')} />
    </div>  
    )
}

export default App