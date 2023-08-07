import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function SampleView()
{
    const navigate=useNavigate();
    const [name,setname]=useState('');
    const [id,setid]=useState(0);
    useEffect(()=>{
        setid(localStorage.getItem('id'));
        setname(localStorage.getItem('name'));

    },[])
    function ok(e)
    {
        e.preventDefault();
        axios.put(`https://645dee9a12e0a87ac0e32687.mockapi.io/siva/${id}`,{name:name});
        navigate('/')
    }
    return(
        <>
        <form onSubmit={ok}>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
                <input type="submit"/>
            </form>
        </>
    )
}