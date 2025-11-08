import React from 'react'
import { useState,useEffect } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';
function Updatestudents() {
  const {id}=useParams();
    const [formData,setFormdata]=useState({name:"",email:"",age:""});
      const navigate=useNavigate();
        useEffect(()=>{
      fetchStudents();
        },[]);
          const fetchStudents = async ()=>{
    try{
        const {data}=await axios.get(`http://localhost:3000/student/getstudents/${id}`);
        console.log(data);
        setFormdata(data);
    }
    catch(error){
      // console.error("Error fetching data",error);
      toast.error("Error fecting students");
    }
  
  }
  const handleSubmit=async(e)=>{
  e.preventDefault();
  try{
await axios.put(`http://localhost:3000/student/updatestudents/${id}`,formData);
    toast.success("Students Update successfully!");
    navigate("/");
  }
  catch(error){
    toast.error("Faild to Students  update Data");
  }
  }

  
  return (
    <div>
      <div className="main-container">
    <div className='form-container'>
      <h3 style={{textAlign:"center", color:"white",paddingTop:"15px"}}>Student Update Form </h3>
      <form onSubmit={handleSubmit}>
        <label>Name :
          <input type='text' placeholder='Enter your name' name="name"value={formData.name}  onChange={(e)=>setFormdata({...formData,name:e.target.value})}required/>
        </label>
        <label>Email:
          <input type='email' placeholder='Enter your Email' name='email' value={formData.email} onChange={(e)=>setFormdata({...formData,email:e.target.value})}required/>
        </label>
        <label>Age    :
          <input type='number' placeholder='Enter your name' name='age' value={formData.age}  onChange={(e)=>setFormdata({...formData,age:e.target.value})} required/>
        </label>
        <div className="btn">
        <button  id='regbtn'>Update</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Updatestudents

