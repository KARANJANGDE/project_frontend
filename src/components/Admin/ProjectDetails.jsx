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
import JsPDF, { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const ProjectDetails = () => {
  const id = useParams().id;

  const navigate = useNavigate();
  const [types, settypes] = useState([]);
  useEffect(() => {
    const getprojectbyid = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api4/project/${id}`);
        console.log(res.data.data);
        settypes(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getprojectbyid();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "Loading...";
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };


  // const handleExport = () => {
  //   const input = document.getElementById('contentToExport'); // Adjusted to target specific content
  
  //   html2canvas(input, {
  //     scale: 2, // Adjust scale as needed for quality
  //     useCORS: true, // To handle cross-origin images
  //   }).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/jpeg', 0.75); // You can adjust compression
  //     const pdf = new jsPDF('p', 'mm', 'a4');
      
  //     // Determine the width and height of the image in the PDF
  //     const imgWidth = 190; // Slightly less than A4 width for margins
  //     const pageHeight = 290; // A4 height
  //     const imgHeight = canvas.height * imgWidth / canvas.width;
  //     let heightLeft = imgHeight;
  //     let position = 0; // Top position of the image
      
  //     // Add image to the first page
  //     pdf.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;
  
  //     // Add new pages if the content overflows
  //     while (heightLeft >= 0) {
  //       position = heightLeft - imgHeight; // Top position for the next page
  //       pdf.addPage();
  //       pdf.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight;
  //     }
  
  //     pdf.save('project_details.pdf');
  //   });
  // };
  
  const handleExport = () => {
    // Hide the button
    const downloadButton = document.getElementById('downloadButton');
    const removeButton = document.getElementById('removeButton');
    downloadButton.style.display = 'none';
    removeButton.style.display = 'none';
  
    const input = document.getElementById('contentToExport'); // Target specific content
  
    html2canvas(input, {
      scale: 2, // Adjust scale as needed for quality
      useCORS: true, // To handle cross-origin images
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg', 0.75);
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 190; // Adjust width as needed
      const imgHeight = canvas.height * imgWidth / canvas.width;
      pdf.addImage(imgData, 'JPEG', 10, 0, imgWidth, imgHeight);
      
      pdf.save('project_details.pdf');
  
      // Show the button again
      downloadButton.style.display = 'block';
    });
  };
  


  return (
    <div className="col-md-12">
      <div className="card card-plain table-plain-bg">
        <div className="card-body table-full-width table-responsive">
          <div className="content">
            <div className="container-fluid" id="contentToExport">
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
                            Project Management
                          </h3>
                          <Link
                            type="button"
                            id="removeButton"
                            to="/admin/adminviewproject"
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
                          className="card-body "
                          style={{ minHeight: "500px", minWidth: "655px" }}
                        >
                          <div className="row">
                            <div className="col-md-6 pr-1">
                              <label style={{ fontWeight: "728" }}>
                                Project Name
                              </label>
                              <h4
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                {types ? types.ProjectName : "Loading..."}
                              </h4>
                            </div>
                            <div className="col-md-6 pl-1">
                              <label style={{ fontWeight: "728" }}>
                                ProjectID
                              </label>
                              <h4
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                {types ? types._id : "Loading..."}
                              </h4>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-4 pr-1">
                              <label style={{ fontWeight: "728" }}>City</label>
                              <h4
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                {types ? types.City : "Loading..."}
                              </h4>
                            </div>
                            <div className="col-md-4 px-1">
                              <label style={{ fontWeight: "728" }}>State</label>
                              <h4
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                {types ? types.State : "Loading..."}
                              </h4>
                            </div>
                            <div className="col-md-4 pl-1">
                              <label style={{ fontWeight: "728" }}>
                                Country
                              </label>
                              <h4
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                {types ? types.Country : "Loading..."}
                              </h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 pr-1">
                              <label style={{ fontWeight: "728" }}>
                                StartDate
                              </label>
                              <h4
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                {/* {types ? types.StartDate : "Loading..."} */}
                                {formatDate(types.StartDate)}
                              </h4>
                            </div>
                            <div className="col-md-6 pl-1">
                              <label style={{ fontWeight: "728" }}>
                                EndDate
                              </label>
                              <h4
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                {/* {types ? types.EndDate : "Loading..."} */}
                                {formatDate(types.EndDate)}
                              </h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 pr-1">
                              <label style={{ fontWeight: "728" }}>
                                Latitude
                              </label>
                              <h4
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                {types ? types.Latitude : "Loading..."}
                              </h4>
                            </div>
                            <div className="col-md-6 pl-1">
                              <label style={{ fontWeight: "728" }}>
                                Longitude
                              </label>
                              <h4
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                {types ? types.Longitude : "Loading..."}
                              </h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 pr-1">
                              <label style={{ fontWeight: "728" }}>
                                Project Type
                              </label>
                              <h4
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                {types?.type?.TypeName || "Loading..."}
                              </h4>
                            </div>
                            <div className="col-md-6 pl-1">
                              <label style={{ fontWeight: "728" }}>
                                Sqaure Feet
                              </label>
                              <h4
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                {types ? types.squareFeet : "Loading..."}
                              </h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-4 pr-1">
                              <label style={{ fontWeight: "728" }}>BHK</label>
                              <h4
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                {types ? types.bhk : "Loading..."}
                              </h4>
                            </div>
                            <div className="col-md-4 px-1">
                              <label style={{ fontWeight: "728" }}>
                                Garden
                              </label>
                              <h4
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                {types
                                  ? types.garden == true
                                    ? "Available"
                                    : "Not Available"
                                  : "Loading..."}
                              </h4>
                            </div>
                            <div className="col-md-4 pl-1">
                              <label style={{ fontWeight: "728" }}>Rera</label>
                              <h4
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                {types
                                  ? types.rera == true
                                    ? "Approved"
                                    : "Not Approved"
                                  : "Loading..."}
                              </h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 pr-1">
                              <label style={{ fontWeight: "728" }}>
                                Action
                              </label>
                              <label style={{ fontWeight: "728" }}>
                                Status
                              </label>
                              <h4
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                {types
                                  ? types.status == true
                                    ? "True"
                                    : "False"
                                  : "Loading..."}
                              </h4>
                            </div>
                            <div className="col-md-6 pl-1"  id="downloadButton">
                              <label style={{ fontWeight: "728" }}>
                                Action
                              </label>
                              <button
                               onClick={handleExport}
                                type="button"
                                className="btn btn-primary"
                                style={{
                                  width: "100%",
                                  height:'42%',
                                  borderColor:'#008DDA',
                                  //backgroundColor: "#007bff", // Bootstrap's primary blue color
                                  color:  '#008DDA',
                                  padding: "10px",
                                  borderRadius: "5px",
                                  marginTop:'29px'
                                }}
                              >
                                Download
                              </button>
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

export default ProjectDetails;
