import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import SideBar from './components/SideBar';
import Login from './components/Login';
import UserDashBoard from './components/User/UserDashBoard';
import AdminDashBoard from './components/Admin/AdminDashBoard';
import AddProject from './components/Admin/AddProject';
import AdminProfile from './components/Admin/AdminProfile';
import AddTask from './components/Admin/AddTask';
import AddDocument from './components/Admin/AddDocument';
import Equipment from './components/Admin/Equipment';
import SignUp from './components/SignUp';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AdminViewProject from './components/Admin/AdminViewProject';
import UpdateProject from './components/Admin/UpdateProject';
import GetEquipment from './components/Admin/GetEquipment';
import UpdateEquipment from './components/Admin/UpdateEquipment';
import UserViewProject from './components/User/UserViewProject';
import Home from './components/Home';
import AddEquipment from './components/Admin/AddEquipment';
import UpdateUserProfile from './components/Admin/UpdateUserProfile';
import ViewDocument from './components/Admin/ViewDocument';
import Communication from './components/Admin/Communication';
import UserProfile from './components/User/UserProfile';
import UserEquipment from './components/User/UserEquipment';
import Practice from './components/User/Practice';
import ProjectStatus from './components/Admin/ProjectStatus';
import ViewUserProfile from './components/Admin/ViewUserProfile';
import CreateUser from './components/Admin/CreateUser';
import UserProjectStatus from './components/User/UserProjectStatus';
import UserProjectList from './components/User/UserProjectList';
import UserProjectEquipmentList from './components/User/UserProjectEquipmentList';
import UserProjectListStatus from './components/User/UserProjectListStatus';
import ProjectDetails from './components/Admin/ProjectDetails';

function App() {

  const location=useLocation();
  const path= window.location.pathname
  console.log(path);

  const hideMainPanelAndContent = path === '/' || path === '/login' || path === '/signup';
  return (
    // <body>
    //   <div className='wrapper'>
    //     {
    //       path==='/'|| path==='/login' ||path==='/signup'|| path===' '?null:<SideBar/>
    //     }
    //     <div className='main-panel'>
    //       <div className='content'>
    //       <TransitionGroup>
    //         <CSSTransition key={location.key} classNames="fade" timeout={300}>
    //         <Routes>
    //           <Route path='/login' element={<Login/>}></Route>
    //           <Route path='/signup' element={<SignUp/>}></Route>
    //           <Route path='/user/userdashboard' element={<UserDashBoard/>}></Route>
    //           <Route path='user/viewproject' element={<ViewProject/>}></Route>
    //           <Route path="/admin/admindashboard" element={<AdminDashBoard/>}></Route>
    //           <Route path="/admin/addproject" element={<AddProject/>}></Route>
    //           <Route path="/admin/adminprofile" element={<AdminProfile/>}></Route>
    //           <Route path='/admin/addtask' element={<AddTask/>}></Route>
    //           <Route path='/admin/equipment' element={<Equipment/>}></Route>
    //           <Route path='/admin/adddocument' element={<AddDocument/>}></Route>
    //           <Route path='/admin/adminviewproject' element={<AdminViewProject/>}></Route>
    //           <Route path='/admin/updateproject/:id' element={<UpdateProject/>}></Route>
    //         </Routes>
    //       </CSSTransition>
    //       </TransitionGroup>
    //       </div>
    //     </div>
    //   </div>
    // </body>
    <body>
      <div className='wrapper'>
        {!hideMainPanelAndContent && <SideBar/>}
        {hideMainPanelAndContent ? (
           <TransitionGroup>
           <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path="" element={<Home/>}></Route>
          </Routes>
          </CSSTransition>
          </TransitionGroup>
        ) : (
          <div className='main-panel'>
            <div className='content'>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                  <Routes>
                    
                    <Route path='/user/userdashboard' element={<UserDashBoard/>}></Route>
                    <Route path='/user/userprojectlist' element={<UserProjectList/>}></Route>
                    <Route path='/user/userviewproject/:id' element={<UserViewProject/>}></Route>
                    <Route path='/user/userprofile' element={<UserProfile/>}></Route>
                    <Route path='/user/practice' element={<Practice/>}></Route>
                    <Route path='/user/userprojectequipmentlist' element={<UserProjectEquipmentList/>}></Route>
                    <Route path='/user/equipment/:id' element={<UserEquipment/>}></Route>
                    <Route path='/user/userprojectliststatus' element={<UserProjectListStatus/>}></Route>
                    <Route path="/user/userprojectstatus/:id" element={<UserProjectStatus/>}></Route>
                    <Route path="/user/userprojectstatus/:id/:status" element={<UserProjectStatus/>}></Route>
                    <Route path='/admin/createuser' element={<CreateUser/>}></Route>
                    <Route path="/admin/admindashboard" element={<AdminDashBoard/>}></Route>
                    <Route path="/admin/addproject" element={<AddProject/>}></Route>
                    <Route path="/admin/adminprofile" element={<AdminProfile/>}></Route>
                    <Route path='/admin/addtask' element={<AddTask/>}></Route>
                    <Route path='/admin/equipment' element={<Equipment/>}></Route>
                    <Route path="/admin/viewdocument" element={<ViewDocument/>}></Route>
                    <Route path='/admin/adddocument' element={<AddDocument/>}></Route>
                    <Route path='/admin/adminviewproject' element={<AdminViewProject/>}></Route>
                    <Route path='/admin/projectdetails/:id' element={<ProjectDetails/>}></Route>
                    <Route path='/admin/updateproject/:id' element={<UpdateProject/>}></Route>
                    <Route path='/admin/getequipment/:id'element={<GetEquipment/>}></Route>
                    <Route path="/admin/getequipment/updateequipment/:id" element={<UpdateEquipment/>}></Route>
                    <Route path="/admin/getequipment/addequipment/:id" element={<AddEquipment/>}></Route>
                    <Route path="/admin/updateuserprofile/:id" element={<UpdateUserProfile/>}></Route>
                    <Route path="/admin/communication" element={<Communication/>}></Route>
                    <Route path='/admin/projectstatus/:id' element={<ProjectStatus/>}></Route>
                    <Route path="/admin/projectstatus/:id/:status" element={<ProjectStatus/>}></Route>
                    <Route path='/admin/viewuserprofile/:id' element={<ViewUserProfile/>}></Route>
                  </Routes>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        )}
      </div>
    </body>
  );
}

export default App;
