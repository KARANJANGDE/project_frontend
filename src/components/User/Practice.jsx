import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Practice = () => {
  //const [renderKey, setRenderKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [statuses, setstatuses] = useState([]);
  const [status, setStatus] = useState("Pending");
  const [projectName, setProjectName] = useState("");
  const [projectState, setProjectState] = useState("");
  const [visibleStatusIds, setVisibleStatusIds] = useState(new Set());

  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

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
    const getallstatusbyid = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api11/status/65e8ab3e357327d56359a349"
        );
        console.log(res.data.data);
        setProjectName(res.data.data.Project.ProjectName);
        setProjectState(res.data.data.Project.State);
      } catch (error) {
        console.log(error);
      }
    };

    getallstatusbyid();

    const getallstatus = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api11/status");
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
      Project: "65d9b080eec8efe599d75ee3",
    };

    try {
      const res = await axios.post(
        `http://localhost:4000/api11/status/`,
        object
      );
      console.log(res.data.data);
      reset(res.data.data);
      navigate("/user/practice");
    } catch (error) {
      console.log(error);
    }
  };

  const updatestatus = async (statusId, newStatus) => {
    try {
      const res = await axios.put(`http://localhost:4000/api11/status/${statusId}`, { status: newStatus });
      console.log(res.data.data);
      navigate('/user/practice');
      //setRenderKey(prevKey => prevKey + 1);
      setstatuses((prevStatuses) =>
      prevStatuses.map((statusItem) =>
        statusItem.id === statusId ? { ...statusItem, status: newStatus } : statusItem
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
                <h4 className="card-title">Edit Profile</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="row" style={{ marginBottom: "30px" }}>
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>Project Name</label>
                        <h4>{projectName}</h4>
                      </div>
                    </div>
                    <div className="col-md-6 pl-1">
                      <div className="form-group">
                        <label>Project State</label>
                        <h4>{projectState}</h4>
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
                          placeholder="Last Name"
                          defaultValue="Andrew"
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
        </div>
        <div className="content">
          <div className="container-fluid">
            {statuses?.map((statusItem) => (
              <div
                key={`${statusItem.id}`}
                style={{
                  visibility: "visible",
                  opacity: "1",
                  transition: "opacity 150ms",
                  //maxWidth: "500px",
                  margin: "42px auto",
                  //padding: "0px 6px",
                  display: "flex",
                  //position: "relative",
                  top: "2px",
                  borderRadius: "0.5rem",
                  //border: "1px solid",
                  //backgroundColor: "#f0f0f0",
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
                    padding: "24px",
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
                    Status: {statusItem.status}
                  </p>
                </div>
                <div
                  style={{
                    padding: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                  data-id={5}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ height: "16px", width: "16px" }}
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
                      style={{
                        height: 32,
                        fontSize: 12,
                        fontWeight: "normal",
                        width: 96,
                        justifyContent: "start",
                        borderRadius: 8,
                        border: "1px solid #ccc",
                        padding: "5px 10px",
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
