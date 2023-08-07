import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import View from "./view";
export default function Fs()
{
    const [name,setname]=useState('');
    const [age,setage]=useState(0);
    const [address,setaddress]=useState('')
    const h=(e)=>{
        e.preventDefault();
        setname('')
        setage('')
        setaddress('')

        axios.post('http://localhost:199',{name:name,age:age,address:address});
        // axios.post('http://localhost:400',{name:name})
    }
    const navigate=useNavigate()

    const view=()=>{
        navigate('/view')
    }
    return(
        <>
            <h1>File System</h1>

           <div class="firstDiv">
           <form onSubmit={h}>
                <input type="text" placeholder="Enter the Name"  value={name} onChange={(e)=>setname(e.target.value)}/>
                <input type="number" placeholder="Enter ur Age here" value={age} onChange={(e)=>setage(e.target.value)}/>
                <input type="text" placeholder="Enter ur Address" value={address} onChange={(e)=>setaddress(e.target.value)}/>
                <input type="submit" id="submit"/>
                <button className="btn btn-danger" onClick={view}>View</button>   
            </form>  
           </div>

           <View></View>
        </>
    )
}