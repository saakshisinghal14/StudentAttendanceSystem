import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function EditStudent() {

const [name, setname] = useState("");
const [email, setemail] = useState("");

const [branch, setbranch] = useState("");
const [section, setsection] = useState("");

const navigate = useNavigate()
const { id}= useParams();
useEffect(() => {
    axios.get(`http://localhost:8080/get/${id}`)
    .then(res => {
        if (res.data.Status === 'Success') {
            const student = res.data.Result[0];
            setname(student.name);
            setemail(student.email);
            setbranch(student.branch);
            setsection(student.section);
        }
    })
    .catch(err => console.log(err));
}, [id]); // Use id as a dependency



const handleSubmit = (event) => {

    event.preventDefault();
    axios.put('http://localhost:8080/update/'+id, {name,email,branch,section})
    .then(res => {
        if(res.data.Status === "Success") {
            navigate('/');
        }
    })
    .catch(err => console.log(err));
}
	return (
		<div className='d-flex flex-column align-items-center pt-4'>
			<h2>Update Student</h2>
			<form className="row g-3 w-50" onSubmit={handleSubmit}>
			<div className="col-12">
					<label htmlFor="inputName" className="form-label">Name</label>
					<input type="text" className="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
					onChange={e=>{setname(e.target.value)}} value={name}/>
				</div>
				<div className="col-12">
					<label htmlFor="inputEmail4" className="form-label">Email</label>
					<input type="email" className="form-control" id="inputEmail4" placeholder='Enter Email' autoComplete='off'
					onChange={e => {setemail(e.target.value)}} value={email}/>
				</div>
				
				<div className="col-12">
					<label htmlFor="inputbranch" className="form-label">Branch</label>
					<input type="text" className="form-control" id="inputbranch" placeholder="Enter Branch" autoComplete='off'
					onChange={e => setbranch(e.target.value)} value={branch}/>
				</div>
				<div className="col-12">
					<label htmlFor="inputsection" className="form-label"> Section</label>
					<input type="text" className="form-control" id="inputsection" placeholder=" Enter Section" autoComplete='off'
					onChange={e => setsection(e.target.value)} value={section}/>
				</div>
				
				<div className="col-12">
					<button type="submit" className="btn btn-primary">Update</button>
				</div>
			</form>
		</div>

	)
}

export default EditStudent;