import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faGooglePlusSquare,
} from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const CreateUser = () => {

    const navigate=useNavigate();
    const [project, setProject] = useState([]);
    const [role, setrole] = useState('')
  
    const getAllProject = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api4/project");
        console.log(res.data.data);
        setProject(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    // const getrolebyid=async()=>{
    //   try {
    //     const res=await axios.get("http://localhost:4000/api3/role/65ad12f317279bae27eb5943")
    //     console.log(res.data.data);
    //     setrole(res.data.data._id);
        
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  
    useEffect(() => {
      getAllProject();
      // getrolebyid();
    }, []);
  
    const { register, handleSubmit } = useForm();
  
    const submitHandler = async (data) => {
      try {
        const object={
          FirstName:data.FirstName,
          LastName:data.LastName,
          UserEmail:data.UserEmail,
          UserPass:data.UserPass,
          ProjectID:data.ProjectID,
          role:'65ad12f317279bae27eb5943',
          status:data.status
        }
        console.log(object)
        const res = await axios.post("http://localhost:4000/api/user", object);
        console.log(res.data.data);
        navigate("/admin/adminprofile");
      } catch (error) {
        console.log(
          "Failed to submit project:",
          error.response ? error.response.data : error.message
        );
      }
    };
  return (
    <div className="content">
    <div className="container-fluid">
      <form onSubmit={handleSubmit(submitHandler)}>
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
                <div className="card-header" style={{ textAlign: "center" }}>
                  <h3
                    className="card-title"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                      color: "#34568B",
                    }}
                  >
                    Add User
                  </h3>
                  <Link
            type="button"
            to="/admin/adminprofile"
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
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          {...register("FirstName")}
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 pl-1">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          {...register("LastName")}
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>User Email</label>
                        <input
                          type="text"
                          {...register("UserEmail")}
                          className="form-control"
                          placeholder="User Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 pl-1">
                      <div className="form-group">
                        <label>User Pass</label>
                        <input
                          type="text"
                          {...register("UserPass")}
                          className="form-control"
                          placeholder="User Password"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>Latitude</label>
                        <input
                          type="text"
                          {...register("Latitude")}
                          className="form-control"
                          placeholder="Project Latitude"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 pl-1">
                      <div className="form-group">
                        <label>Longitude</label>
                        <input
                          type="text"
                          {...register("Longitude")}
                          className="form-control"
                          placeholder="Project Longitude"
                        />
                      </div>
                    </div>
                  </div> */}
                  <div className="row">
                    {/* <div className="col-md-12">
                      <div className="form-group">
                        <label>Role</label>
                        <input
                          type="text"
                          {...register("role")}
                          className="form-control"
                          placeholder="User"
                          defaultValue="NEED TO LOOKOUT"
                        />
                      </div>
                    </div> */}
                  </div>
                  <div className="row">
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>Project Enroll</label>
                        <select
                          {...register("ProjectID")}
                          className="form-control"
                        >
                          {project.map((pro) => (
                            <option key={pro._id} value={pro._id}>
                              {pro.ProjectName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 pl-1">
                      <div className="form-group">
                        <label>Status</label>
                        <select
                          {...register("status")}
                          className="form-control"
                        >
                            <option value="">Select Status</option>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-info btn-fill pull-right"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </form>
    </div>
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
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
  )
}

export default CreateUser
