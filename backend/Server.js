
const express = require('express');
const mysql= require('mysql');
const cors=require('cors');
const jwt = require('jsonwebtoken');
const app= express();
const cookieParser = require('cookie-parser')
app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin:["http://localhost:3001"],
        methods:["POST","GET","PUT"],
        credentials: true,
    }
));
const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:"student_attendance",

    })
    const verifyUser=(req,res, next)=>{
        const token = req.cookies.token;
        if (!token) {
          return res.json({ Error: 'You are not authenticated' });
        } else {
          jwt.verify(token, 'jwt-secret-key', (err, decoded) => {
            if (err) return res.json({ Error: 'Token is invalid' });
            req.role=decoded.role;
            req.id=decoded.id;
            next();
          });
        }
    
    }
    app.get('/dashboard', verifyUser,(req,res)=>{
    return res.json({Status:"Success",role:req.role,id:req.id});
    
    })
    app.post('/create', (req, res) => {
      const sql = "INSERT INTO student (name, email, password, branch, section) VALUES ?";
      const values = [
          [
              req.body.name,
              req.body.email,
              req.body.password,
              req.body.branch,
              req.body.section,
          ]
      ];
  
      db.query(sql, [values], (err, result) => {
          if (err) {
              console.error(err);
              return res.status(500).json({ Status: "Error", Error: "Error while creating student" });
          } else {
              return res.status(200).json({ Status: "Success" });
          }
      });
  });
  




    app.post('/login', (req, res) => {
        const sql = "SELECT * FROM  login WHERE email=? AND password=?";
      
        db.query(sql, [req.body.email, req.body.password], (err, data) => {
          if (err) return res.json({ Status: "Error", Error: " Error in running query" });
          if (data.length > 0) {
           
          const token = jwt.sign({ role:"admin" } , "jwt-secret-key", { expiresIn: '1d' });
            res.cookie('token', token);
            return res.json({ Status: "Success" });
          } else {
            return res.json({ Status: "Error", Error: " Wrong Email or Password" });
          }
        });
      });
      app.get('/logout', (req, res) => {
        res.clearCookie('token');
        return res.json({Status: "Success"});
    })
    
  
        
    app.get('/getStudent',(req,res)=>{
      const sql= "SELECT * FROM student";
      db.query(sql,(err,result)=>{
          if(err) return res.json({Error:"Get student error in sql"})
          return res.json({Status:"Success", Result:result})
      
      })
      
      })
      app.get('/get/:id', (req, res) => {
        const id = req.params.id;
        const sql = "SELECT * FROM student where id = ?";
        db.query(sql, [id], (err, result) => {
            if(err) return res.json({Error: "Get students error in sql"});
            console.log(err);
            return res.json({Status: "Success", Result: result})
        })
    })
    app.put('/update/:id', (req, res) => {
        const id = req.params.id;
        const sql = 'UPDATE student SET  name=? , branch=? ,section = ? WHERE id = ?';
    
        db.query(sql, [req.body.name,req.body.branch,req.body.section, id], (err, result) => {
            if (err) {
                return res.json({ Error: "Update employee error in SQL" });
            }
            return res.json({ Status: "Success" });
        });
    });
    app.get('/studentCount', (req, res) => {
      const sql = "Select count(id)  as stu from student";
      db.query(sql, (err, result) => {
          if(err) return res.json({Error: "Error in running query"});
          return res.json(result);
      })
  })
  
    app.post('/studentlogin', (req, res) => {
      const sql = "SELECT * FROM student WHERE email=? AND password=?";
      
      db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
          return res.json({ Status: "Error", Error: "Error in running query" });
        }
        if (data.length > 0) {
       
          const token = jwt.sign({ role: "student", id: data[0].id }, "jwt-secret-key", { expiresIn: '1d' });
          res.cookie('token', token);
          return res.json({ Status: "Success", id: data[0].id });
        } else {
          return res.json({ Status: "Error", Error: "Wrong Email or Password" });
        }
      });
  });

  app.post('/attendance', (req, res) => {
    const sql = "INSERT INTO attendancesheet (email, attendance) VALUES (?, ?)";
    const values = [
        req.body.email,
        req.body.attendance,
    ];
    app.put('/attendance', (req, res) => {
        const sql = "UPDATE attendancesheet SET attendance = ? WHERE email = ?";
        const values = [
          req.body.attendance,
          req.body.email,
        ];
      

        db.query(sql, values, (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ Status: "Error", Error: "Error while updating attendance" });
          } else if (result.affectedRows === 0) {
            return res.status(404).json({ Status: "Error", Error: "No record found with the provided email" });
          } else {
            return res.status(200).json({ Status: "Success" });
          }
        });
      });
      
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Status: "Error", Error: "Error while creating attendance" });
        } else {
            return res.status(200).json({ Status: "Success" });
        }
    });
});
app.get('/getattendance',(req,res)=>{
  const sql= "SELECT * FROM attendancesheet";
  db.query(sql,(err,result)=>{
      if(err) return res.json({Error:"Get attendance error in sql"})
      return res.json({Status:"Success", Result:result})
  })
  
   })
      
app.listen(8080,()=>{

    console.log("Listening ......")
})