import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';
import './ViewStudents.css' 

function ViewStudents() {
  const [student,setStudent]=useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
fetchStudents();
  },[]);

  const fetchStudents = async ()=>{
    try{
        const {data}=await axios.get("http://localhost:3000/student/getstudents");
        console.log(data);
        setStudent(data);
    }
    catch(err){
      console.error("Error fetching data",err);
    }
  }
  const handleDelete = async (id)=>{
if(!window.confirm("Are your sure want to delete?"))
  return;
  
  try{
    await axios.delete(`http://localhost:3000/student/deletdata/${id}`);
toast.success('Student deleted successfully!');
fetchStudents();
    
  }
  catch(err){
    console.error("Error deleting data",err)
  }
}
const gotoAddstudent = async ()=>{
  navigate('/addstudent');
  try{

  }
  catch{

  }
}
  return (
    <div>
      <h1>View Students Data</h1>
      <button className='gotoadd-student'onClick={()=>gotoAddstudent()}>+Add</button>
        <table>
            <thead>
                <tr>
                    <th>SL No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>

                </tr>
                 </thead>
               {
                student.map((studentData,index)=>(
                  studentData.length===0 ? (<p>No students Found </p>):(
                    <>
                    <tr key={studentData._id}>
                      <th scope='row'>{index+1}</th>
                      <td>{studentData.name}</td>
                      <td>{studentData.email}</td>
                      <td>{studentData.age}</td>
                      <td id="action"> 
                        <Link to={`/updatestudents/${studentData._id}`}>Edit</Link>
                        <button onClick={()=>handleDelete(studentData._id)}>Delete</button>
                      </td>

                    </tr>
                    </>
                  )

                ))
               }
           
        </table>
    </div>
  )
}

export default ViewStudents