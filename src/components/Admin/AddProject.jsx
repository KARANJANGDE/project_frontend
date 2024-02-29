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

const AddProject = () => {

  const navigate=useNavigate();
  const [types, settypes] = useState([]);

  const getAllType = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api5/type");
      console.log(res.data.data);
      settypes(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllType();
  }, []);

  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    try {
      const res = await axios.post("http://localhost:4000/api4/project", data);
      console.log(res.data.data);
      navigate("/admin/adminviewproject");

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
                      Add Project
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
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Project Name</label>
                          <input
                            type="text"
                            {...register("ProjectName")}
                            className="form-control"
                            placeholder="Company"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>Start Date</label>
                          <input
                            type="text"
                            {...register("StartDate")}
                            className="form-control"
                            placeholder="YYYY/MM/DD"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label>End Date</label>
                          <input
                            type="text"
                            {...register("EndDate")}
                            className="form-control"
                            placeholder="YYYY/MM/DD"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
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
                    </div>
                    <div className="row">
                      <div className="col-md-4 pr-1">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            {...register("City")}
                            className="form-control"
                            placeholder="City"
                            defaultValue="Ahmedabad"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 px-1">
                        <div className="form-group">
                          <label>State</label>
                          <input
                            type="text"
                            {...register("State")}
                            className="form-control"
                            placeholder="State"
                            defaultValue="Gujarat"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 pl-1">
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            type="text"
                            {...register("Country")}
                            className="form-control"
                            placeholder="Country"
                            defaultValue="India"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>Project Type</label>
                          <select
                            {...register("type")}
                            className="form-control"
                          >
                            {/* <option value="">Select Project Type</option>
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Rental">Rental</option> */}
                            {types.map((type) => (
                              <option key={type._id} value={type._id}>
                                {type.TypeName}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label>Status</label>
                          <input
                            type="text"
                            {...register("status")}
                            className="form-control"
                            placeholder="Project Status"
                          />
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
  );
};

export default AddProject;
