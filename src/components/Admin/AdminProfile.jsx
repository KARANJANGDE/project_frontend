import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faGooglePlusSquare,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const AdminProfile = () => {

  const navigate=useNavigate();
  const [user1, setuser] = useState();
  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName]=useState('');
    const [email, setemail] = useState('');

    const handleLogout = () => {
      // Clear the user session from localStorage or wherever it's stored
      localStorage.removeItem("id");
      localStorage.removeItem("role");
  
      // Navigate to login page or home page after logout
      navigate("/login"); // Adjust the path as needed
    };
  

    const removeuser=async(id)=>{
      try {
        const res= await axios.delete(`http://localhost:4000/api/user/`+id);
        console.log(res.data.data);
        navigate('/admin/adminprofile')
        //setuser(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }

  useEffect(() => {
    const adminid=localStorage.getItem('id');
    if(adminid){
    const fetchadmindata=async()=>{
      try{
        const res=await axios.get(`http://localhost:4000/api2/admin/${adminid}`);
        console.log(res.data.data);
         setFirstName(res.data.data.FirstName); 
         setLastName(res.data.data.LastName);// Step 3: Display the name
         setemail(res.data.data.AdminEmail);
      }catch(err){
        console.log(err);
      }
    }

    fetchadmindata();
  }
    const getalluser = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/user");
        console.log(res.data.data);
        setuser(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getalluser();
   
  }, []);

  return (
    <div className="row">
      {/* <div className="col-md-12">
        <div className="card card-user">
          <div className="card-image">
            <img
              src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              alt="..."
            />
          </div>
          <div className="card-body" style={{ minHeight: "250px" }}>
            <div className="author">
              <a href="#">
                <img
                  className="avatar border-gray"
                  src="../assets/img/faces/face-0.jpg"
                  alt="..."
                />
                <h4 className="title">Krushna Raval</h4>
              </a>
              <p className="description">krushnaraval69</p>
            </div>
            <p className="description text-center">
              "To make clients fond 
              <br />  of their individual projects and
              <br /> making their experience better"
            </p>
          </div>
          <hr />
          <div className="button-container mr-auto ml-auto">
            <button href="#" className="btn btn-simple btn-link btn-icon">
            <FontAwesomeIcon icon={faFacebookSquare} />
            </button>
            <button href="#" className="btn btn-simple btn-link btn-icon">
            <FontAwesomeIcon icon={faTwitter} />
            </button>
            <button href="#" className="btn btn-simple btn-link btn-icon">
            <FontAwesomeIcon icon={faGooglePlusSquare} />
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <div className="card card-user">
          <div className="card-image"></div>
          <div className="card-body" style={{ minHeight: "250px" }}>
            <div
              className="author"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >


              <h3 className="horizontal-line" style={{ marginBottom: "5px", marginTop: "0px",fontWeight:"bold",fontSize:"190%"}}>Master Control</h3>
              


              <div className="vertical-left-container">
                <div
                  style={{
                    height: "50%",
                    width: "2px",
                    backgroundColor: "black",
                    position: "relative",
                    top: "69px",
                    left: "11px",
                  }}
                ></div>
                <div
                  style={{
                    height: "50%",
                    width: "2px",
                    backgroundColor: "black",
                    position: "relative",
                    bottom: "110px",
                    left: "357px",
                  }}
                ></div>

                <div
                  style={{
                    position: "absolute",
                    left: "14px",
                    bottom: "62px",
                    textAlign: "center",
                  }}
                >
                  <Link to="/admin/addproject" className="btn btn-primary btn-sm">Add Project</Link>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "324px",
                    bottom: "63px",
                    textAlign: "center",
                  }}
                >
                  <Link to="/admin/equipment" className="btn btn-danger btn-sm">Equipment</Link>
                </div>
              </div>

              <div className="vertical-right-container">
                <div
                  style={{
                    height: "50%",
                    width: "2px",
                    backgroundColor: "black",
                    position: "relative",
                    top: "70px",
                    right: "13px",
                  }}
                ></div>
                <div
                  style={{
                    height: "50%",
                    width: "2px",
                    backgroundColor: "black",
                    position: "relative",
                    bottom: "110px",
                    right: "357px",
                  }}
                ></div>
  
                <div
                  style={{
                    position: "absolute",
                    right: "15px",
                    bottom: "62px",
                    textAlign: "center",
                  }}
                >
                  <Link to="/admin/adddocument" className="btn btn-primary btn-sm">Add Document</Link>
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: "338px",
                    bottom: "63px",
                    textAlign: "center",
                  }}
                >
                  <Link to="/admin/addtask" className="btn btn-danger btn-sm">Add Task</Link>
                </div>

                </div>
              </div>
            </div>
          </div>
        </div> */}

      <div className="col-md-6" style={{ minWidth: "734px" }}>
        <div className="card table-with-links">
          <div className="card-header ">
            <h4 className="card-title">Users List</h4>
            <p className="card-category">Master Control</p>
            <Link
                          className="btn btn-danger"
                          to={`/admin/createuser`}
                          style={{
                            height: "30px",
                            width: "85px",
                            lineHeight: "30px",
                            padding: "14 8px",
                            fontSize: "11px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            bottom: "41px",
                            left:"85%"
                          }}
                        >
                          Add User
                        </Link>
          </div>
          <div className="card-body" style={{ minWidth: "700px" }}>
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center">ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th className="text-right">Status</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {user1?.map((m,index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{m.FirstName}</td>
                      <td>{m.LastName}</td>
                      <td>
                        {m.status == true ? "true" : "false"}
                      </td>
                      <td className="td-actions text-center">
                        <Link
                          to={`/admin/viewuserprofile/${m._id}`}
                          rel="tooltip"
                          title=""
                          className="btn btn-info btn-link btn-xs"
                          data-original-title="View Profile"
                        >
                          <i className="fa fa-user" />
                        </Link>
                        <Link
                          to={`/admin/updateuserprofile/${m._id}`}
                          rel="tooltip"
                          title=""
                          className="btn btn-success btn-link btn-xs"
                          data-original-title="Edit Profile"
                        >
                          <i className="fa fa-edit" />
                        </Link>
                        <button
                        onClick={()=>{removeuser(m._id)}}
                          rel="tooltip"
                          title=""
                          className="btn btn-danger btn-link btn-xs"
                          data-original-title="Remove"
                        >
                          <i className="fa fa-times" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-user">
          <div className="card-header no-padding">
            <div className="card-image">
              <img src="../assets/img/full-screen-image-3.jpg" alt="..." />
            </div>
          </div>
          <div className="card-body ">
            <div className="author">
              <a href="#">
                <img
                  className="avatar border-gray"
                  src="../../assets/img/faces/profile-3.jpg"
                  alt="..."
                />
                <h4 className="card-title">{firstName} {lastName}</h4>
              </a>
              <p className="card-description">{email}</p>
            </div>
            <p className="card-description text-center">
              Hey there! As you can see,
              <br /> it is already looking great.
            </p>
          </div>
          <div className="card-footer ">
            <hr />
            <div className="button-container mr-auto ml-auto">
              <button href="#" className="btn btn-simple btn-link btn-icon">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </button>
              <button href="#" className="btn btn-simple btn-link btn-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button href="#" className="btn btn-simple btn-link btn-icon">
                <FontAwesomeIcon icon={faGooglePlusSquare} />
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="btn btn-round" to="/"
              
              style={{
                position: "relative",
                 bottom: "17px",
                 right:"15px",
                fontSize: "14px",
                fontWeight: "bold",
                color: "white",
                margin: "-18px",
                borderColor:"#FFA500",
                backgroundColor: "#FFA500",
              }}
              onClick={handleLogout}
              >
                <span className="no-icon">Log out</span>
              </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
