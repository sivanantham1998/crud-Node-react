import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"

export default function Home()
{
    const navi=useNavigate();
    const h=()=>{
        navi('/fs')
    }
    const [name,setname]=useState('');
    const [view,setview]=useState([]);
    function ok(event)
    {
        event.preventDefault();
        axios.post('https://645dee9a12e0a87ac0e32687.mockapi.io/siva',{name:name});
        setname('');
        
    }
    useEffect(()=>{
        axios.get('https://645dee9a12e0a87ac0e32687.mockapi.io/siva').then((s)=>{
            setview(s.data);
        })
    },[]);

    function ed(a,b){
        localStorage.setItem('id',a);
        localStorage.setItem('name',b);
        navi('/sample')
    }
    return(
        <>
            <center>
            <button id="btn" onClick={h}>Home</button>
            </center>

            <form onSubmit={ok}>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
                <input type="submit"/>
            </form>

            <ul>
                {view.map((see)=>
                    <li>{see.name}  <button onClick={()=>ed(see.id,see.name)}>Edit</button></li>
                )}
            </ul>
        </>
    )
}