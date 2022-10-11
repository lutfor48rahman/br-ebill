import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";
import AdminContent from "./component/MainContents/AdminContent/AdminContent";
import Employee from "./component/MainContents/Employee/Employee";
import AddUser from "./component/MainContents/AddUser/AddUser";
import User from "./component/MainContents/AddUser/EmployeeAdd";
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/SignUp";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import EditEmployeeInfo from "./component/MainContents/AddUser/EditEmployeeInfo";
import Leave from './component/MainContents/Leave/Leave';
import BillingPage from "./component/MainContents/BillingPages/BillingPage";
import Department from "./component/MainContents/Derpartment/Department";
import Division from "./component/MainContents/Devision/Division";
import Administrator from "./component/MainContents/Administrator/Administrator";
import MainAdministrator from "./component/MainContents/Administrator/MainAdministrator";
import Candidate from "./component/MainContents/Administrator/Candidate";
import AccessRecord from "./component/MainContents/Administrator/AccessRecord";


function App() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="App">

      {
        user &&
        <>
          <Navbar></Navbar>
          <Sidebar></Sidebar>
        </>
      }

      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/admin" element={<AdminContent></AdminContent>}></Route>
        <Route path="/leave" element={<Leave></Leave>}></Route>
        <Route path="/employee" element={<Employee></Employee>}></Route>
        <Route path="/bill" element={<BillingPage></BillingPage>}></Route>
        <Route path="/department" element={<Department></Department>}></Route>
        <Route path="/division" element={<Division></Division>}></Route>
        <Route path='/add-user' element={<AddUser></AddUser>}>
          <Route path="users" element={<User></User>}></Route>
          <Route path="edit-employee-info/:id" element={<EditEmployeeInfo></EditEmployeeInfo>}></Route>
        </Route>
        <Route path="/mainAdministrator" element={<MainAdministrator></MainAdministrator>}>
          <Route index element={<Administrator></Administrator>}></Route>
          <Route path="vacancy" element={<Candidate></Candidate>}></Route>
          <Route path="access-record" element={<AccessRecord></AccessRecord>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;