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
                    <Route path='user/userviewproject' element={<UserViewProject/>}></Route>
                    <Route path='user/userprofile' element={<UserProfile/>}></Route>
                    <Route path="/admin/admindashboard" element={<AdminDashBoard/>}></Route>
                    <Route path="/admin/addproject" element={<AddProject/>}></Route>
                    <Route path="/admin/adminprofile" element={<AdminProfile/>}></Route>
                    <Route path='/admin/addtask' element={<AddTask/>}></Route>
                    <Route path='/admin/equipment' element={<Equipment/>}></Route>
                    <Route path="/admin/viewdocument" element={<ViewDocument/>}></Route>
                    <Route path='/admin/adddocument' element={<AddDocument/>}></Route>
                    <Route path='/admin/adminviewproject' element={<AdminViewProject/>}></Route>
                    <Route path='/admin/updateproject/:id' element={<UpdateProject/>}></Route>
                    <Route path='/admin/getequipment/:id'element={<GetEquipment/>}></Route>
                    <Route path="/admin/getequipment/updateequipment/:id" element={<UpdateEquipment/>}></Route>
                    <Route path="/admin/getequipment/addequipment/:id" element={<AddEquipment/>}></Route>
                    <Route path="/admin/updateuserprofile/:id" element={<UpdateUserProfile/>}></Route>
                    <Route path="/admin/communication" element={<Communication/>}></Route>
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
