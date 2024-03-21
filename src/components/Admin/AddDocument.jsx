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


const AddDocument = () => {


  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  //const [projectIds, setProjectIds] = useState([]);
    
  
    
  
    useEffect(() => {


      const fetchData = async () => {
        try {
          const projectResponse = await axios.get("http://localhost:4000/api4/project");
          // const projectIds = projectResponse.data.data.map(project => project._id);
          const projects = projectResponse.data.data.map(project => ({
            id: project._id, // Assuming the ID field is named _id
            name: project.ProjectName, // Assuming the name field is named ProjectName
          }));
          setProjects(projects);
          //setProjectIds(projectIds);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();


    }, []);


  
    const { register, handleSubmit } = useForm();

  
    const submitHandler = async (data) => {
     
      try {
        const formData = new FormData();
        formData.append('DocumentName', data.DocumentName);
        formData.append('DocumentType', data.DocumentType);
        formData.append('document', data.FilePath[0]);
        formData.append('ProjectID', data.ProjectID);
        formData.append('status', data.status);
  
        const response = await axios.post("http://localhost:4000/api8/document", formData);
        console.log("response..................", response);
        navigate("/admin/viewdocument");
      } catch (error) {
        console.error("Error adding document:", error);
      }
    
  }
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
                    Add Document
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
                      <label>DocumentName</label>
                      <input
                          type="text"
                          {...register("DocumentName")}
                          className="form-control"
                          placeholder="Enter Document Name"
                        />
                    </div>
                    <div className="col-md-6 pl-1">
                      <label>DocumentType</label>
                      <input
                          type="text"
                          {...register("DocumentType")}
                          className="form-control"
                          placeholder="Enter Document Type"
                          defaultValue="PDF"
                        />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>FileUpload</label>
                        <input
                          type="file"
                          {...register("FilePath")}
                          //onChange={onFileChange}
                          className="form-control"
                          placeholder="Select PDF FIle"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>ProjectName</label>
                        <select {...register("ProjectID")} className="form-control">
                        {projects.map(project => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 pl-1">
                      <div className="form-group">
                        <label>Status</label>
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


export default AddDocument
