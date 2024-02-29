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

const AddEquipment = () => {


    const id =useParams().id;

    const navigate=useNavigate();
    const [types, settypes] = useState([]);
    //const projectid=useParams().id;
  
    const getAllProjectbyID = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api4/project/"+id);
        console.log(res.data.data);
        settypes(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getAllProjectbyID();
    }, []);
  
    const { register, handleSubmit } = useForm();
  
    const submitHandler = async (data) => {
        const objectToSubmit = Object.assign(data,{ProjectID :types._id})
      try {
        const res = await axios.post("http://localhost:4000/api6/equipment",objectToSubmit);
        console.log(res.data.data);
        navigate(`/admin/getequipment/${id}`);
  
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
                    Add Equipment
                  </h3>
                  <Link
            type="button"
            to="/admin/admindashboard"
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
                <div className="card-body" style={{ minHeight: '500px',minWidth:'607px' }}>
                  <div className="row">
                    <div className="col-md-6 pr-1">
                      <label>Project Name</label>
                      <h4>{types ? types.ProjectName : 'Loading...'}</h4>
                    </div>
                    <div className="col-md-6 pl-1">
                      <label>ProjectID</label>
                      <h4>{types ? types._id : 'Loading...'}</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>EquipmentName</label>
                        <input
                          type="text"
                          {...register("EquipmentName")}
                          className="form-control"
                          placeholder="Enter Equipment Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 pl-1">
                      <div className="form-group">
                        <label>Quantity</label>
                        <input
                          type="text"
                          {...register("Quantity")}
                          className="form-control"
                          placeholder="Enter Quantity"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                  <div className="col-md-4 pr-1">
                      <label>City</label>
                      <h4>{types ? types.City : 'Loading...'}</h4>
                    </div>
                    <div className="col-md-4 px-1">
                      <label>State</label>
                      <h4>{types ? types.State : 'Loading...'}</h4>
                    </div>
                    <div className="col-md-4 pl-1">
                      <label>Country</label>
                      <h4>{types ? types.Country : 'Loading...'}</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Status</label>
                        {/* <input
                          type="text"
                          {...register("status")}
                          className="form-control"
                          placeholder="Project Status"
                        /> */}
                        <select {...register("status")} className="form-control"
                          placeholder="Project Status">
                         <option value="">Select Status</option>
                            <option value="true">True</option>
                            <option value="False">False</option>
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

export default AddEquipment
