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

  const id =useParams().id;

    const navigate=useNavigate();
    const [types, settypes] = useState([]);
    // const [documents, setDocuments] = useState([]);
    // const [showForm, setShowForm] = useState(false);
    //const [selectedfile, setselectedfile] = useState()
    //const projectid=useParams().id;
  
    
  
    useEffect(() => {


      const getallproject=async()=>{
        try {

          const res=await axios.get("http://localhost:4000/api4/project");
          console.log(res.data.data);
          settypes(res.data.data);
          
        } catch (error) {
          console.log(error);
        }
      }

      getallproject();



    }, []);


  
    const { register, handleSubmit } = useForm();
    // const onFileChange = (event) => {
    //   setselectedfile(event.target.files[0]); // Update the state when a file is selected
    // };
  
    const submitHandler = async (data,event) => {
      //  try {
      //   const res=await axios.post("http://localhost:4000/api8/document",data);
      //   console.log(res.data.data);
      //   navigate("/admin/viewdocument");
        
      //  } catch (error) {
      //   console.log(error);
      //  }
      event.preventDefault(); // Prevent the default form submission

    const formData = new FormData();
    // Append file to formData. Ensure "file" matches the expected field name in your backend.
    const fileInput = event.target.FilePath; // Adjust this if your file input name differs
    if (fileInput && fileInput.files[0]) {
        formData.append("file", fileInput.files[0]);
    }

    // Append other data to formData as needed. Ensure field names match your backend expectations.
    formData.append("DocumentName", data.DocumentName);
    formData.append("DocumentType", data.DocumentType); // Adjust based on actual field names
    formData.append("ProjectID", data.ProjectID);
    formData.append("status", data.status); // Make sure boolean values are handled correctly on the backend

    
    try {
      await axios.post("http://localhost:4000/api8/document", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/admin/viewdocument");
    } catch (error) {
      console.log(error);
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
                          {...register("DocumentName")}
                          className="form-control"
                          placeholder="Enter Document Type"
                        />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>FilePath</label>
                        <input
                          type="file"
                          {...register("document")}
                          //onChange={onFileChange}
                          className="form-control"
                          placeholder="Enter FIle"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>ProjectName</label>
                        <select {...register("ProjectID")} className="form-control"
                          placeholder="Project Status">
                            {
                              types?.map((pro)=>{
                                return(
                                  <option key={pro._id} value={pro._id}>
                                    {pro.ProjectName}
                                  </option>
                                )
                              })
                            }
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
