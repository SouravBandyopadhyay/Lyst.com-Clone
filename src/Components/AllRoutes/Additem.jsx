import axios from "axios"
import { useState } from "react"

function Additem(){
  const[title,setTitle] = useState("")
  const[img,setImg]=useState("")
  const sendData=()=>{
    axios.post(`http://localhost:3004/`)
  }
  return(
<>
</>
    )
}
export default Additem