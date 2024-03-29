import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';


const SideBar = () => {

  const path = window.location.pathname;

  const isAdmin = path.includes('admin');
  const dashboardLink = isAdmin ? "/admin/admindashboard" : "/user/userdashboard";
  const dashboardName = isAdmin ? "Admin Dashboard" : "User Dashboard";
  const id=localStorage.getItem('id');

  const [pro, setpro] = useState('')

  const getuserdetailbyid=async()=>{
    try {
      const res=await axios.get(`http://localhost:4000/api/user/${id}`)
      console.log(res.data.data.ProjectID._id)
      setpro(res.data.data.ProjectID._id)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    
  getuserdetailbyid()
  }, [])
  

    const adminlinks=[
        { 
          name:'Admin Profile',
          link:'/admin/adminprofile',
          icon:'nc-icon nc-circle-09'
        },
        {
            name:'AddProject',
            link:'admin/addproject',
            icon:'nc-icon nc-atom'
        },
        {
          name:"Equipment",
          link:"admin/equipment",
          icon:"nc-icon nc-notes"
        },
        {
          name:"Document",
          link:"admin/viewdocument",
          icon:"nc-icon nc-alien-33"
        },
        {
          name:"View Project",
          link:"admin/adminviewproject",
          icon:"nc-icon nc-chart-bar-32"
        },
        {
          name:"Communication",
          link:"admin/communication",
          icon:"nc-icon nc-bulb-63"
        },
        
    ]
    const userlinks=[
      { 
        name:'User Profile',
        link:'/user/userprofile',
        icon:'nc-icon nc-circle-09'
      },
        {
            name:'ViewProject',
            link:'user/userprojectlist',
            icon:'nc-icon nc-chart-bar-32'
        },
        {
          name:'Equipment',
          link:`/user/userprojectequipmentlist`,
          icon:'nc-icon nc-notes'
        },
        {
          name:'Progress Status',
          link:`/user/userprojectliststatus`,
          icon:'nc-icon nc-atom'
        }
    ]

    const sidebarColor = isAdmin ? 'orange' : 'red';
    //const sidebarColor = isAdmin ? { backgroundColor: '#FFFAF0' } : { backgroundColor: 'red' };
    const userTypeIcon = isAdmin ? <i className="fas fa-user-shield" style={{ fontSize: '14px', marginLeft: '16px',marginTop:'15px',position: 'relative', bottom: '2px' }}></i> : <i className="fas fa-user" style={{ fontSize: '13px', marginLeft: '16px',marginTop:'15px',position: 'relative', bottom: '2px'}}></i>;
  return (
    <div className="sidebar" data-color={sidebarColor}>
  <div className="sidebar-wrapper">
    <div className="logo">
      <a href="#" className="simple-text">
        Better Housing{userTypeIcon}
      </a>
    </div>
    <ul className="nav">
      <li className="nav-item active">
        <Link className="nav-link" to={dashboardLink}>
          <i className="nc-icon nc-chart-pie-35" />
          <p>{dashboardName}</p>
        </Link>
      </li>
      {
        path.includes('admin')? adminlinks.map((admin)=>{
            return(
                <li className="nav-item active">
                    <Link className="nav-link" to={admin.link}>
                        <i className={admin.icon} />
                        <p>{admin.name}</p>
                    </Link>
                </li>
            );
        }):userlinks.map((user)=>{
            return(
                <li className="nav-item active">
                    <Link className="nav-link" to={user.link}>
                        <i className={user.icon} />
                        <p>{user.name}</p>
                    </Link>
                </li>
            )
        })
      }
    </ul>
  </div>
  <div
    className="sidebar-background"
    style={{
      backgroundImage: 'url("../assets/img/sidebar-5.jpg")',
      display: "none"
    }}
  />
</div>

  )
}

export default SideBar
