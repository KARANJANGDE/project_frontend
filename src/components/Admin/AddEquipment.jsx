import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faGooglePlusSquare,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddEquipment = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const [types, setTypes] = useState([]);

  const getAllProjectbyID = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api4/project/" + id);
      console.log(res.data.data);
      setTypes(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProjectbyID();
  }, []);

  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    const objectToSubmit = Object.assign(data, { ProjectID: types._id });
    try {
      const res = await axios.post(
        "http://localhost:4000/api6/equipment",
        objectToSubmit
      );
      console.log(res.data.data);
      navigate(`/admin/getequipment/${id}`);
    } catch (error) {
      console.log(
        "Failed to submit project:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const readOnlyInputStyle = {
    fontWeight: "400", // Medium font weight for a bit of emphasis
    color: "#495057", // Slightly darker than placeholder text for readability
    //backgroundColor: "#e9ecef", // A very light gray background to distinguish the field
    padding: "0.375rem 0.5rem", // Standard padding to match other inputs
    borderRadius: "0.25rem", // Rounded borders to match Bootstrap's style
    //boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.075)", // Subtle inner shadow for depth
    border: "1px solid #ced4da",
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
                      to="/admin/equipment"
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
                    style={{ minHeight: "500px", minWidth: "607px" }}
                  >
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <label>Project Name</label>
                        <input
                          type="text"
                          value={types ? types.ProjectName : "Loading..."}
                          readOnly
                          className="form-control"
                          style={readOnlyInputStyle}
                        />
                      </div>
                      <div className="col-md-6 pl-1">
                        <label>ProjectID</label>
                        <input
                          type="text"
                          value={types ? types._id : "Loading..."}
                          readOnly
                          className="form-control"
                          style={readOnlyInputStyle}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4 pr-1">
                        <label>City</label>
                        <input
                          type="text"
                          value={types ? types.City : "Loading..."}
                          readOnly
                          className="form-control"
                          style={readOnlyInputStyle}
                        />
                      </div>
                      <div className="col-md-4 px-1">
                        <label>State</label>
                        <input
                          type="text"
                          value={types ? types.State : "Loading..."}
                          readOnly
                          className="form-control"
                          style={readOnlyInputStyle}
                        />
                      </div>
                      <div className="col-md-4 pl-1">
                        <label>Country</label>
                        <input
                          type="text"
                          value={types ? types.Country : "Loading..."}
                          readOnly
                          className="form-control"
                          style={readOnlyInputStyle}
                        />
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
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Status</label>
                          <select
                            {...register("status")}
                            className="form-control"
                            placeholder="Project Status"
                          >
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
      <div
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
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
  );
};

export default AddEquipment;
