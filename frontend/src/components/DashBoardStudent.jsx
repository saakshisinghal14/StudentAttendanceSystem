import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

const DashboardStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState([]);
  const [att, setAtt] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/get/${id}`)
      .then(res => setStudent(res.data.Result[0]))
      .catch(err => console.log(err));
  }, [id]);

  const handleLogout = () => {
    axios.get('http://localhost:8080/logout')
      .then(res => {
        navigate('/start');
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          {/* Sidebar */}
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="#" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Hogward School</span>
              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <Link to={`/studentdetail/${id}`} className="nav-link align-middle px-0 text-white">
                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline ">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/attendance" className="nav-link px-0 align-middle text-white">
                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline ">Attendance</span></Link>
                </li>
                <li onClick={handleLogout}>
                  <a href="#" className="nav-link px-0 align-middle text-white">
                    <i className="bi bi-power"></i> <span className="ms-1 d-none d-sm-inline ">Log out</span>
                  </a>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          {/* Main Content */}
          <div className="col-md-9 p-4 main-content">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="dashboard-title">
              <i className="bi bi-speedometer2"></i> Student Portal
            </h2>
          </div>
          <div className="card shadow student-details-card">
            <div className="card-header">Student Detail</div>
            <div className="card-body">
              <h4 className="card-title">Name: {student.name}</h4>
              <p className="card-text">Email: {student.email}</p>
              <p className="card-text">School: Hogwarts School Of Witchcraft</p>
              <p className="card-text">Branch: {student.branch}</p>
              <p className="card-text">Section: {student.section}</p>
            </div>
            <div className="card-footer">Science and Experiment [UG - FT - ACADEMIC]</div>
          </div>
          <Outlet />
        </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardStudent;
