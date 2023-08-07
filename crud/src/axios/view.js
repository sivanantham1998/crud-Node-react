import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { API } from "./api";
import Edit from "./edit";

export default function View()
{
    const [view,setview]=useState([])
    const navi=useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:199').then((s)=>{
            setview(s.data);
        })
    },[])

    const del=(a)=>{
        axios.delete(`${API}/${a}`).then(()=>{
            axios.get('http://localhost:199').then((s)=>{
                setview(s.data);
            })
        },[])
    }

    const ed=(a,b,c,d)=>{
        localStorage.setItem('id',a);
        localStorage.setItem('uname',b);
        localStorage.setItem('email',c);
        localStorage.setItem('password',d)
        navi('/edit')
    }

    
    const home=()=>{
        navi('/')
    }
    return(
        <>

        <div id="head">
        <h2>
            Customer details
        </h2>
        <button id="btn" onClick={home}>
            Back to home
        </button>
        </div>

        <div id="viewing">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th> 
                        <th>Edit</th>  
                        <th>Delete</th>
                    </tr>
                </thead>
                {view.map((set)=>
                <tbody>
                    <tr>
                        <td>{set._id}</td>
                        <td>{set.name}</td>
                        <td>{set.age}</td>
                        <td>{set.address}</td>
                        <td>
                                 <button onClick={()=>ed(set._id,set.name,set.age,set.address)}>
                                    Edit
                                </button>
                        </td>
                        <td>
                            <button onClick={()=>del(set._id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
                )}
            </table>
        </div>

        </>
    )
}