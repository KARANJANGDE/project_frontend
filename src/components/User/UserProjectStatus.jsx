import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
const UserProjectStatus = () => {
  const [statuses, setstatuses] = useState([]);

  const [pro, setpro] = useState([]);
  //   const [projectName, setProjectName] = useState("");
  //   const [projectState, setProjectState] = useState("");
  //const [visibleStatusIds, setVisibleStatusIds] = useState(new Set());

  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { id, status } = useParams();

  useEffect(() => {
    const getprojectbyid = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api4/project/${id}`);
        setpro(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getprojectbyid();

    const getallstatus = async () => {
      try {
        // const res = await axios.get(`http://localhost:4000/api11/status/${id}`);
        // console.log(res.data.data);
        // setstatuses(res.data.data);
        //reset(res.data.data);
        const url = status
          ? `http://localhost:4000/api11/status/project/${id}/${status}`
          : `http://localhost:4000/api11/status/${id}`; // Fallback to a default API if no status is selected
        const res = await axios.get(url);
        setstatuses(res.data.data);
        console.log("res.....", res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getallstatus();
  }, [id, status]);

  const handleViewStatus = (newStatus) => {
    //setstatuses(newStatus);
    navigate(`/user/userprojectstatus/${id}/${newStatus}`);
    // Update the selected status
    // Optionally navigate if you want to change the URL, not strictly necessary if you're only filtering on the current page
    // navigate(`/admin/projectstatus/${id}/${status}`);
  };

  // const submitHandler = async (data) => {
  //     const object = {
  //       name: data.name,
  //       status: data.status,
  //       Project: id,
  //     };

  //     try {
  //       const res = await axios.post(
  //         `http://localhost:4000/api11/status/`,
  //         object
  //       );
  //       console.log(res.data.data);
  //       reset(res.data.data);
  //       navigate(`/admin/projectstatus/${id}`);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   const updatestatus = async (statusId, newStatus) => {
  //     try {
  //       const res = await axios.put(
  //         `http://localhost:4000/api11/status/${statusId}`,
  //         { status: newStatus }
  //       );
  //       console.log(res.data.data);
  //       navigate(`/admin/projectstatus/${id}`);
  //       //setRenderKey(prevKey => prevKey + 1);
  //       setstatuses((prevStatuses) =>
  //         prevStatuses.map((statusItem) =>
  //           statusItem.id === statusId
  //             ? { ...statusItem, status: newStatus }
  //             : statusItem
  //         )
  //       );
  //       console.log("Status updated locally");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

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
          <div
            className="col-md-8"
            style={{ minWidth: "967px", marginLeft: "90px" }}
          >
            <div className="card" style={{ minHeight: "400px" }}>
              <div className="card-header">
                <h3
                  className="card-title"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "bold",
                    color: "#34568B",
                  }}
                >
                  Project Status
                </h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="row" style={{ marginBottom: "30px" }}>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>Project Name</label>
                        <h3>{pro.ProjectName}</h3>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>Project City</label>
                        <h3>{pro.City}</h3>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>Project State</label>
                        <h3>{pro.State}</h3>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="form-group">
                        <label>Project Country</label>
                        <h3>{pro.Country}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>Start Date</label>
                        <h3>{pro.StartDate}</h3>
                      </div>
                    </div>
                    <div className="col-md-6 pl-1">
                      <div className="form-group">
                        <label>EndDate</label>
                        <h3>{pro.EndDate}</h3>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/user/userviewproject"
                    className="btn btn-round"
                    style={{
                      position: "relative",
                      top: "49px",
                      left: "26px",
                      fontSize: "11px",
                      fontWeight: "bold",
                      color: "white",
                      borderColor: "#FF0000",
                      backgroundColor: "#FF0000",
                      margin: "-18px",
                    }}
                  >
                    Furter Info
                  </Link>
                  <div className="clearfix" />
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3 ml-auto" style={{ maxHeight: "146px" }}>
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row" style={{ width: "100%" }}>
                  <div className="col-5">
                    <div className="icon-big text-center icon-warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="40"
                        viewBox="0 0 24 24"
                        style={{ height: "40px", width: "40px" }}
                        data-id={6}
                      >
                        {/* <circle
                          cx="12"
                          cy="12"
                          r="9" // Adjusted radius to ensure stroke is visible within viewBox
                          fill="white"
                          stroke="Red" // Stroke color set to black for visibility
                          strokeWidth="1" // Stroke width to ensure visibility around the fill
                        /> */}

                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          fill="white"
                          stroke="Red"
                          strokeWidth="1"
                        />
                        <circle
                          cx="12" // Centered horizontally in the SVG
                          cy="12" // Centered vertically in the SVG
                          r="4" // Smaller radius for the inner circle
                          fill="red" // White fill for the inner circle
                          stroke="white" // Red stroke for the inner circle
                          strokeWidth="1" // Stroke width for the inner circle
                        />
                      </svg>
                      {/* <i className="nc-icon nc-chart text-warning" /> */}
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="numbers">
                      <p className="card-category">Status</p>
                      <h4 className="card-title">Pending</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer ">
                <hr />
                <div className="stats">
                  <i className="fa fa-refresh" />{" "}
                  <button
                    onClick={() => handleViewStatus("Pending")}
                    style={{
                      color: "grey",
                      backgroundColor: "transparent", // Make background transparent
                      border: "none", // Remove border
                      padding: 0, // Optional: remove padding
                      margin: 0, // Optional: remove margin
                      cursor: "pointer", // Change cursor to pointer to indicate it's clickable
                      //textDecoration: "underline"
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{ maxHeight: "156px" }}>
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center icon-warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="40"
                        viewBox="0 0 24 24"
                        style={{ height: "40px", width: "40px" }}
                        data-id={6}
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="9" // Adjusted radius to ensure stroke is visible within viewBox
                          fill="white"
                          stroke="Orange" // Stroke color set to black for visibility
                          strokeWidth="1" // Stroke width to ensure visibility around the fill
                        />
                        <circle
                          cx="12" // Centered horizontally in the SVG
                          cy="12" // Centered vertically in the SVG
                          r="4" // Smaller radius for the inner circle
                          fill="orange" // White fill for the inner circle
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="numbers">
                      <p className="card-category">Status</p>
                      <h4 className="card-title">Not Started Yet</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer ">
                <hr />
                <div className="stats">
                  <i className="fa fa-refresh" />{" "}
                  <button
                    onClick={() => handleViewStatus("NotStarted")}
                    style={{
                      color: "grey",
                      backgroundColor: "transparent", // Make background transparent
                      border: "none", // Remove border
                      padding: 0, // Optional: remove padding
                      margin: 0, // Optional: remove margin
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mr-auto" style={{ maxHeight: "146px" }}>
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center icon-warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="40"
                        viewBox="0 0 24 24"
                        style={{ height: "40px", width: "40px" }}
                        data-id={6}
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="9" // Adjusted radius to ensure stroke is visible within viewBox
                          fill="white"
                          stroke="Green" // Stroke color set to black for visibility
                          strokeWidth="1" // Stroke width to ensure visibility around the fill
                        />
                        <circle
                          cx="12" // Centered horizontally in the SVG
                          cy="12" // Centered vertically in the SVG
                          r="4" // Smaller radius for the inner circle
                          fill="green" // White fill for the inner circle
                        stroke="white" // Red stroke for the inner circle
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="numbers">
                      <p className="card-category">Status</p>
                      <h4 className="card-title">Done</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer ">
                <hr />
                <div className="stats">
                  <i className="fa fa-refresh" />{" "}
                  <button
                    onClick={() => handleViewStatus("Done")}
                    style={{
                      color: "grey",
                      backgroundColor: "transparent", // Make background transparent
                      border: "none", // Remove border
                      padding: 0, // Optional: remove padding
                      margin: 0, // Optional: remove margin
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content"
          style={{ position: "relative", right: "0px", bottom: "32px" }}
        >
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
                      stroke={getStatusColor(statusItem.status)} // Stroke color set to black for visibility
                      strokeWidth="1" // Stroke width to ensure visibility around the fill
                    />
                  </svg>

                  <div
                    data-id={7}
                    style={{ fontSize: "14px", fontWeight: "500" }}
                  >
                    {statusItem.status}
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

export default UserProjectStatus;
