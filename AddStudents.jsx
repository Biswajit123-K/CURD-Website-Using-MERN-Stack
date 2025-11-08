import React, { useState } from 'react'

// import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';
import './Addstudents.css'

function AddStudents() {
  const [formData,setFormdata]=useState({name:"",email:"",age:""});
    const navigate=useNavigate();
    const handleSubmit =async(e)=>{
      e.preventDefault();
    const data=new FormData();
      data.append('name',formData.name);
      data.append('email',formData.email);
      data.append('age',formData.age);
      console.log(data.name);
      try{
       await axios.post("http://localhost:3000/student/register",data,{
        headers: {"Content-Type":"application/json"}
       });
       toast.success("Student Added Successfylly");
      navigate('/');
      }
    
catch(error){
  toast.error('Faild to add Students');
}
    }
    
  

  return (
    <div className="main-container">
    <div className='form-container'>
      <h3 style={{textAlign:"center", color:"white",paddingTop:"15px"}}>Student Registration Form </h3>
      <form onSubmit={handleSubmit} >
        <label>Name :
          <input type='text' placeholder='Enter your name' name="name" onChange={(e)=>setFormdata({...formData,name:e.target.value})}required/>
        </label>
        <label>Email :
          <input type='email' placeholder='Enter your Email' name='email' onChange={(e)=>setFormdata({...formData,email:e.target.value})} required/>
        </label>
        <label>Age :
          <input type='number' placeholder='Enter your name' name='age'  onChange={(e)=>setFormdata({...formData,age:e.target.value})}required/>
        </label>
        <div className="btn">
        <button  id='regbtn'>Register</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default AddStudents