import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function CreateStudent() {

const [name, setname] = useState("");
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [branch, setbranch] = useState("");
const [section, setsection] = useState("");

const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault();
       
		


	
		axios.post('http://localhost:8080/create', {name,email,password,branch,section})
		.then(res => {
           navigate('/')
			
			
		})
		.catch(err => console.log(err));
	}
	return (
		<div className='d-flex flex-column align-items-center pt-4'>
			<h2>Add Employee</h2>
			<form className="row g-3 w-50" onSubmit={handleSubmit}>
			<div className="col-12">
					<label htmlFor="inputName" className="form-label">Name</label>
					<input type="text" className="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
					onChange={e=>{setname(e.target.value)}}/>
				</div>
				<div className="col-12">
					<label htmlFor="inputEmail4" className="form-label">Email</label>
					<input type="email" className="form-control" id="inputEmail4" placeholder='Enter Email' autoComplete='off'
					onChange={e => {setemail(e.target.value)}}/>
				</div>
				<div className="col-12">
					<label htmlFor="inputPassword4" className="form-label">Password</label>
					<input type="password" className="form-control" id="inputPassword4" placeholder='Enter Password'
					 onChange={e => setpassword(e.target.value)}/>
				</div>
				<div className="col-12">
					<label htmlFor="inputBranch" className="form-label">Branch</label>
					<input type="text" className="form-control" id="inputBranch" placeholder="Enter Branch" autoComplete='off'
					onChange={e => setbranch(e.target.value)}/>
				</div>
				<div className="col-12">
					<label htmlFor="inputSection" className="form-label">Section</label>
					<input type="text" className="form-control" id="inputSection" placeholder="Enter Section" autoComplete='off'
					onChange={e => setsection(e.target.value)}/>
				</div>
				
				<div className="col-12">
					<button type="submit" className="btn btn-primary">Create</button>
				</div>
			</form>
		</div>

	)
}

export default CreateStudent;