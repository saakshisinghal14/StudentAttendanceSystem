import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const HomeAdmin = () => {
  const [studentcount,setstudentcount]= useState(0);
  const[data,SetData]=useState([])
  const[att,SetAtt]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:8080/studentCount')
      .then(res => {
        setstudentcount(res.data[0].stu);
      
      })
      .catch(err=>
        console.log(err));
  axios.get('http://localhost:8080/getStudent ')
  .then(res=>
    {
  
      if(res.data.Status==='Success'){
        console.log(res.data.Result)
  SetData(res.data.Result);
  
      }
    }
    )
  .catch(err=>console.log(err));
  
  axios.get('http://localhost:8080/getattendance ')
  .then(res=>
    {
  
      if(res.data.Status==='Success'){
        console.log(res.data.Result)
  SetAtt(res.data.Result);
  
      }
    }
    )
  .catch(err=>console.log(err));
    },[])
  
    
  return (
    <div>
    <div className='p-3 d-flex justify-content-start
    '>
  
    <div className='p-3 border shadow-sm '>
        <p>Students</p>
        <hr />
        <p> Total: {studentcount}</p>
    </div>

    </div>
    <div>
    <div className='d-flex justify-content-center'>
      <h3>
        Student List
      </h3>
      </div>
  <Link to='/create'
   className='btn btn-success'>
        Add Student
      
  </Link>
  <table className='table'>

    <thead>
      <tr>
        <th>Name</th>
        <th>email</th>
        <th>Branch</th>
        <th> Section</th>
        <th>Attendance</th>
      </tr>
    </thead>
    <tbody>
 {
  data.map((student,index)=>{
    return (
    <tr key={index}>
<td>
  {student.name}
</td>
<td>
  {student.email}
</td>
<td>
  {student.branch}
</td>
<td>
  {student.section}
</td>
<td>
  {att.find(item => item.email === student.email) ? att.find(item => item.email === student.email).attendance : 0}%
</td>
<td>

  <Link to={`/studentEdit/`+student.id}  className=' btn btn-primary btn-sm me-2'>edit</Link>

</td>
    </tr>
    )
  })
 }
    </tbody>
  </table>
     
    </div>
    </div>

  )
}

export default HomeAdmin;
