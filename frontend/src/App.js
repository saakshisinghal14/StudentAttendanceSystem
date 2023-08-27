import './App.css';
import DashboardAdmin from './components/DashbordAdmin';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import HomeAdmin from './components/HomeAdmin';
import LoginAdmin from './components/loginAdmin';
import Starts from './components/Starts';
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';
import StudentLogin from './components/StudentLogin';
import DashboardStudent from './components/DashBoardStudent';
import Attendance from './components/Attendance';


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>

<Route path='/' element={<DashboardAdmin/>}>  
<Route   path='/'  element={<HomeAdmin/>}>  </Route>
<Route   path='/create'  element={<CreateStudent/>}>  </Route>
<Route   path='/studentEdit/:id'  element={<EditStudent/>}>  </Route>
</Route>
<Route path='/login' element={   <LoginAdmin/>}>   </Route>
<Route path='/start' element={   <Starts/>}>   </Route>
<Route path='/studentLogin' element={   <StudentLogin/>}>   </Route>

<Route path='/studentdetail/:id' element={   < DashboardStudent/>}> 


  </Route>
<Route path='/attendance' element={   < Attendance/>}> 


  </Route>

  
 
</Routes>


</BrowserRouter>
    </div>
  );
}

export default App;
