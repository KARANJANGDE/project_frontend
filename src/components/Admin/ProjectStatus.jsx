import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProjectStatus = () => {
  //const [isVisible, setIsVisible] = useState(false);
  const [statuses, setstatuses] = useState([]);
  //const [status, setStatus] = useState("Pending");
  const [projectName, setProjectName] = useState("");
  const [projectState, setProjectState] = useState("");
  const [visibleStatusIds, setVisibleStatusIds] = useState(new Set());

  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const id = useParams().id;

  const toggleVisibility = (statusId) => {
    setVisibleStatusIds((prevVisibleStatusIds) => {
      const newVisibleStatusIds = new Set(prevVisibleStatusIds);
      if (newVisibleStatusIds.has(statusId)) {
        newVisibleStatusIds.delete(statusId);
      } else {
        newVisibleStatusIds.add(statusId);
      }
      return newVisibleStatusIds;
    });
  };

  useEffect(() => {
    const getprojectbyid = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api4/project/${id}`);
        console.log("res....", res.data.data);
        setProjectName(res.data.data.ProjectName);
        setProjectState(res.data.data.State);
      } catch (error) {
        console.log(error);
      }
    };

    getprojectbyid();

    const getallstatus = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api11/status/${id}`);
        console.log(res.data.data);
        setstatuses(res.data.data);
        //reset(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getallstatus();
  }, []);

  const submitHandler = async (data) => {
    const object = {
      name: data.name,
      status: data.status,
      Project: id,
    };

    try {
      const res = await axios.post(
        `http://localhost:4000/api11/status/`,
        object
      );
      console.log(res.data.data);
      reset(res.data.data);
      navigate(`/admin/projectstatus/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const updatestatus = async (statusId, newStatus) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api11/status/${statusId}`,
        { status: newStatus }
      );
      console.log(res.data.data);
      navigate(`/admin/projectstatus/${id}`);
      //setRenderKey(prevKey => prevKey + 1);
      setstatuses((prevStatuses) =>
        prevStatuses.map((statusItem) =>
          statusItem.id === statusId
            ? { ...statusItem, status: newStatus }
            : statusItem
        )
      );
      console.log("Status updated locally");
    } catch (error) {
      console.log(error);
    }
  };

  // const handleStatusChange = (newStatus) => {
  //   setStatus(newStatus);
  //   setIsVisible(false);
  // };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "#FF0000"; // Red
      case "NotStarted":
        return "#FFD700"; // Yellow
      case "Done":
        return "#008000"; // Green
      default:
        return "#808080"; // Default color
    }
  };
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8" style={{ maxWidth: "500px" }}>
            <div className="card" style={{ minHeight: "400px" }}>
              <div className="card-header">
                <h3 className="card-title" style={{ fontSize: "30px" }}>
                  Project Status
                </h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="row" style={{ marginBottom: "30px" }}>
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>Project Name</label>
                        <h3>{projectName}</h3>
                      </div>
                    </div>
                    <div className="col-md-6 pl-1">
                      <div className="form-group">
                        <label>Project State</label>
                        <h3>{projectState}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>Status Name</label>
                        <input
                          type="text"
                          {...register("name")}
                          className="form-control"
                          placeholder="Your Project status"
                          defaultValue=""
                          style={{ height: "45px", padding: "10px" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 pl-1">
                      <div className="form-group">
                        <label>Status</label>
                        <select
                          {...register("status")}
                          className="form-control"
                          placeholder="Project Status"
                          style={{ height: "45px", padding: "10px" }}
                        >
                          <option value="">Select Status</option>
                          <option value="Pending">Pending</option>
                          <option value="NotStarted">Not Started</option>
                          <option value="Done">Done</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-info btn-fill pull-right"
                    style={{ padding: "12px 20px", marginTop: "20px" }}
                  >
                    Submit
                  </button>
                  <div className="clearfix" />
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{maxHeight:"146px"}}>
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row" style={{ width: "100%" }}>
                  <div className="col-5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning" />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="numbers">
                      <p className="card-category">Electronics</p>
                      <h4 className="card-title">500+</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer ">
                <hr />
                <div className="stats">
                  <i className="fa fa-refresh" /> Update Now
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{maxHeight:"146px"}}>
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success" />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="numbers">
                      <p className="card-category">Cost</p>
                      <h4 className="card-title">₹ 10,00,000</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer ">
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar-o" /> Funding 
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4" style={{ position: 'relative', left: '612px', top: '-270px' }}>
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary" />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="numbers">
                      <p className="card-category">Health Amenities</p>
                      <h4 className="card-title">+100K</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer ">
                <hr />
                <div className="stats">
                  <i className="fa fa-refresh" /> Update now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content" style={{ position: 'relative', right: '0px', bottom: '201px' }}>
          <div className="container-fluid">
            {statuses?.map((statusItem) => (
              <div
                key={`${statusItem.id}`}
                style={{
                  visibility: "visible",
                  opacity: "1",
                  transition: "opacity 150ms",
                  margin: "42px auto",
                  display: "flex",
                  justifyContent: "space-between",
                  top: "2px",
                  borderRadius: "0.5rem",
                  color: "#333",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  padding: "0px 47px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    padding: "0 24px 0 0",
                    paddingBottom: "0",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      lineHeight: "normal",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {statusItem.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "400",
                      lineHeight: "normal",
                      letterSpacing: "-0.5px",
                      color: "#aaa",
                    }}
                  >
                    Project: {statusItem.Project.ProjectName}
                  </p>
                </div>
                <div
                  style={{
                    padding: "0", // Adjust padding as needed
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "20px",
                  }}
                  data-id={5}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ height: "16px", width: "25px" }}
                    data-id={6}
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="8" // Adjusted radius to ensure stroke is visible within viewBox
                      fill={getStatusColor(statusItem.status)}
                      stroke="black" // Stroke color set to black for visibility
                      strokeWidth="1" // Stroke width to ensure visibility around the fill
                    />
                  </svg>

                  <div
                    data-id={7}
                    style={{ fontSize: "14px", fontWeight: "500" }}
                  >
                    {statusItem.status}
                  </div>

                  <div style={{ position: "relative" }}>
                    <button
                      className="btn btn-primary"
                      style={{
                        height: "27px",
                        width: "77px",
                        lineHeight: "20px",
                        padding: "0 8px",
                        fontSize: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={() => toggleVisibility(statusItem._id)}
                    >
                      Change
                    </button>
                    {visibleStatusIds.has(statusItem._id) && (
                      <div
                        style={{
                          width: 128,
                          position: "absolute",
                          background: "white",
                          border: "1px solid #ccc",
                          marginTop: "5px",
                        }}
                      >
                        {/* <div style={{ padding: 10 }}>
                        <label style={{ display: "block", marginBottom: 5 }}>
                          <input
                            type="radio"
                            name="status"
                            value="Pending"
                            style={{ marginRight: 5 }}
                            onChange={() => handleStatusChange("Pending")}
                          />
                          Pending
                        </label>
                        <label style={{ display: "block", marginBottom: 5 }}>
                          <input
                            type="radio"
                            name="status"
                            value="NotStarted"
                            style={{ marginRight: 5 }}
                            onChange={() =>
                              handleStatusChange("Not Started Yet")
                            }
                          />
                          NotStarted
                        </label>
                        <label style={{ display: "block" }}>
                          <input
                            type="radio"
                            name="status"
                            value="Done"
                            style={{ marginRight: 5 }}
                            onChange={() => handleStatusChange("Done")}
                          />
                          Done
                        </label>
                      </div> */}
                        <div style={{ padding: 10 }}>
                          {["Pending", "NotStarted", "Done"].map(
                            (statusOption) => (
                              <label
                                key={statusOption}
                                style={{ display: "block", marginBottom: 5 }}
                              >
                                <input
                                  type="radio"
                                  name={`status-${statusItem._id}`}
                                  value={statusOption}
                                  style={{ marginRight: 5 }}
                                  checked={statusItem.status === statusOption}
                                  onChange={() =>
                                    updatestatus(statusItem._id, statusOption)
                                  }
                                />
                                {statusOption}
                              </label>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* <div>
                    <Link
                      type="button"
                      to="/admin/admindashboard"
                      rel="tooltip"
                      className="btn btn-danger btn-simple btn-link"
                      data-original-title="Remove"
                      style={{
                        display: "flex",
                        alignItems: "right",
                        fontSize: "20px",
                        position: "relative",
                        left: "112%",
                        top: "-33px",
                      }}
                    >
                      <i className="fa fa-times" />
                    </Link>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;
