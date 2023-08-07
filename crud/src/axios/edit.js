import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "./api";
import { useNavigate } from "react-router-dom";


export default function Edit()
{
    const navigate=useNavigate();
    const [id,setid]=useState(0)
    const [name,setname]=useState('');
    const [age,setage]=useState(0);
    const [address,setaddress]=useState('')

    const h=(e)=>{
        e.preventDefault();
        axios.put(`${API}/${id}`,{name:name,age:age,address:address})
        setname('');
        setage('');
        setaddress('');
    }
    useEffect(()=>{
        setid(localStorage.getItem('id'));
        setname(localStorage.getItem('name'));
        setage(localStorage.getItem('age'));
        setaddress(localStorage.getItem('address'));
        },[])

        const re=()=>{
            navigate('/')
        }
    return(
        <>
        <br/>
        <h1>Update details here</h1>
        <div class="firstDiv">
           <form onSubmit={h}>
                <input type="text" placeholder="Enter the Name"  value={name} onChange={(e)=>setname(e.target.value)}/>

                <input type="email" placeholder="Enter ur mail here" value={age} onChange={(e)=>setage(e.target.value)}/>

                <input type="password" placeholder="Enter ur password" value={address} onChange={(e)=>setaddress(e.target.value)}/>

                <input type="submit" id="submit" value='Update'/>
                  
            </form>  
        </div>

        <div>
            <button class="btn btn-primary w-25" onClick={re}>BACK TO HOME</button>
        </div>
        </>
    )
}