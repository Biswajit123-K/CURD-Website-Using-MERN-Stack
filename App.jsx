import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddStudents from './componets/addstudents'
import ViewStudents from './componets/viewstudents'
import { ToastContainer } from 'react-toastify'
import UpdateStudents from './componets/updatestudents'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<ViewStudents/>}></Route>
       <Route path='/addstudent' element={<AddStudents/>}></Route>
       <Route path='/updatestudents/:id' element={<UpdateStudents/>}></Route>
       {/* <Route path='/updatestudents/:id' element={<UpdateStudents/>}></Route> */}
      </Routes>
      <ToastContainer position='top-right' autoClose={3000}></ToastContainer>
      </BrowserRouter>
    </div>
  )
}

export default App