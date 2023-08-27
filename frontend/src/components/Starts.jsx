import React from 'react'
import { useNavigate } from 'react-router-dom'

function Starts() {
    const navigate = useNavigate()
  return (
   
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage flex-column gap-5'  >
      <h2>Welcome to Hogwards School </h2>
      
            <div className='p-5 rounded w-20% border loginform text-center d-flex justify-content-center flex-column '  >
                <h2>Login As</h2>
                <div className='d-flex justify-content-center gap-4  '> 
                    <button className='btn btn-primary btn-lg '   onClick={e=>{navigate('/studentLogin')}}>Student</button>
                    <button className='btn btn-success btn-lg' onClick={e => navigate('/login')}>Admin</button>
                </div>
            </div>
        </div>
  )
}

export default Starts