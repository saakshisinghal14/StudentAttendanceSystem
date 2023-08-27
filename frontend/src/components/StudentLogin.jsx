import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/studentlogin', { email, password })
      .then((res) => {
        if (res.data.Status === 'Success') {
           const id=res.data.id;
          navigation('/studentdetail/'+id); 
        } else {
          setError(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className='d-flex justify-content-center flex-column align-items-center gap-2 vh-100 loginPage'>
      <h1 style={{ color: "rgb(10, 221, 19)" }}>
        Welcome to Howgards School Portal
      </h1>
      <div className='p-3 rounded w-25 loginform'>
        <div className='text-danger'>
          {error && error}
        </div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password' name='password' onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">Log in</button>
          <p>You agree to our terms and policies</p>
        </form>
      </div>
    </div>
  );
}

export default StudentLogin;
