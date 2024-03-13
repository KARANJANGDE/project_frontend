import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faGooglePlusSquare,
} from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const UserViewProject = () => {


  const proid=localStorage.getItem('id');


    const navigate=useNavigate();
    const [types, settypes] = useState([]);
    useEffect(() => {

      const getuserbyid=async()=>{
        try {
          const res= await axios.get(`http://localhost:4000/api/user/${proid}`);
          console.log(res.data.data);
          console.log(res.data.data.ProjectID)
          settypes(res.data.data.ProjectID);
          
        } catch (error) {
          console.log(error);
        }
      }
      // getAllProjectbyID();

      getuserbyid();
    }, []);


  
  return (
    <div className="col-md-12">
      <div className="card card-plain table-plain-bg">
        {/* <div className="card-header ">
          <h4 className="card-title">Better Housing</h4>
          <p className="card-category">Your project</p>
        </div> */}
        <div className="card-body table-full-width table-responsive">
          <div className="content">
            <div className="container-fluid">
              {/* <form onSubmit={handleSubmit(submitHandler)}> */}
              <form>
                <div className="row">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <div>
                      <div className="card">
                        <div
                          className="card-header"
                          style={{ textAlign: "center" }}
                        >
                          <h3
                            className="card-title"
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontWeight: "bold",
                              color: "#34568B",
                            }}
                          >
                            Your Project
                          </h3>
                          <Link
                            type="button"
                            to="/user/userdashboard"
                            rel="tooltip"
                            className="btn btn-danger btn-simple btn-link"
                            data-original-title="Remove"
                            style={{
                              display: "flex",
                              alignItems: "right",
                              fontSize: "17px",
                              position: "relative",
                              left: "96%",
                              top: "-44px",
                            }}
                          >
                            <i className="fa fa-times" />
                          </Link>
                        </div>
                        <div
                          className="card-body"
                          style={{ minHeight: "500px", minWidth: "655px" }}
                        >
                          <div className="row">
                            <div className="col-md-6 pr-1">
                              <label style={{ fontWeight: '728' }}>Project Name</label>
                              <h4 style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
                                {types ? types.ProjectName : "Loading..."}
                              </h4>
                            </div>
                            <div className="col-md-6 pl-1">
                              <label style={{ fontWeight: '728' }}>ProjectID</label>
                              <h4 style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>{types ? types._id : "Loading..."}</h4>
                            </div>
                          </div>
                          
                          <div className="row">
                            <div className="col-md-4 pr-1">
                              <label style={{ fontWeight: '728' }}>City</label>
                              <h4 style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>{types ? types.City : "Loading..."}</h4>
                            </div>
                            <div className="col-md-4 px-1">
                              <label style={{ fontWeight: '728' }}>State</label>
                              <h4 style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>{types ? types.State : "Loading..."}</h4>
                            </div>
                            <div className="col-md-4 pl-1">
                              <label style={{ fontWeight: '728' }}>Country</label>
                              <h4 style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>{types ? types.Country : "Loading..."}</h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 pr-1">
                              {/* <div className="form-group">
                                <label style={{ fontWeight: '728' }}>EquipmentName</label>
                                <input
                                  type="text"
                                  {...register("EquipmentName")}
                                  className="form-control"
                                  placeholder="Enter Equipment Name"
                                />
                              </div> */}
                              <label style={{ fontWeight: '728' }}>StartDate</label>
                              <h4 style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>{types ? types.StartDate : "Loading..."}</h4>
                            </div>
                            <div className="col-md-6 pl-1">
                            <label style={{ fontWeight: '728' }}>EndDate</label>
                              <h4 style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>{types ? types.EndDate : "Loading..."}</h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                {/* <label style={{ fontWeight: '728' }}>Equipment</label> */}
                                
                                <Link
                            type="button"
                            to="/user/equipment/65d9b080eec8efe599d75ee3"
                            rel="tooltip"
                            className="btn btn-primary"
                            data-original-title="Remove"
                            style={{
                              display: "flex",
                              alignItems: "right",
                              fontSize: "16px",
                              position: "relative",
                              left: "0%",
                              top: "4px",
                            }}
                          >
                            Description
                          </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </form>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div className="button-container">
                <button
                  href="#"
                  className="btn btn-simple btn-link btn-icon"
                  style={{ fontSize: "25px", margin: "0 5px" }}
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </button>
                <button
                  href="#"
                  className="btn btn-simple btn-link btn-icon"
                  style={{ fontSize: "25px", margin: "0 5px" }}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </button>
                <button
                  href="#"
                  className="btn btn-simple btn-link btn-icon"
                  style={{ fontSize: "25px", margin: "0 5px" }}
                >
                  <FontAwesomeIcon icon={faGooglePlusSquare} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserViewProject;
