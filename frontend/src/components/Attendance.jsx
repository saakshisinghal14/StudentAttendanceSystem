import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Attendance = () => {
  const [cn, setCN] = useState(false);
  const [dsa, setDSA] = useState(false);
  const [os, setOS] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleCNChange = () => setCN(prevCN => !prevCN);
  const handleDSAChange = () => setDSA(prevDSA => !prevDSA);
  const handleOSChange = () => setOS(prevOS => !prevOS);

  const handleSubmit = (e) => {
    e.preventDefault();
    const attendance = (os + dsa + cn) / 3 * 100;

    axios.post('http://localhost:8080/attendance', { email, attendance })
      .then(res => {
        if (res.data.Status === 'Success') {
          console.log("Attendance recorded successfully");
          navigate('/start');
        } else {
          console.log("Something went wrong with recording attendance");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className="card attendance-card">
        <div className="card-body">
          <h5 className="card-header">Attendance Form</h5>
          <form onSubmit={handleSubmit}>
            <table className='table'>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Attendance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Computer Network</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={cn}
                      onChange={handleCNChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>DSA</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={dsa}
                      onChange={handleDSAChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Operating System</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={os}
                      onChange={handleOSChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder='Enter Email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className='btn btn-success' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Attendance;



