import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ViewDocument = () => {
    const [document, setdocument] = useState()

    useEffect(() => {
      const getalldocument=async()=>{
        try {
          const res= await axios.get("http://localhost:4000/api8/document");
          console.log(res.data.data);
          setdocument(res.data.data);
        } catch (error) {
          console.log(error);
        }
      }
      getalldocument();
    }, [])
    
    return (
      <div>
        <div className="col-md-12">
      <div className="card card-plain table-plain-bg">
        <div className="card-header ">
          <h4 className="card-title">Document Management</h4>
          <p className="card-category">Company's project</p>
          <Link
                            className="btn btn-danger"
                            to={`/admin/adddocument`}
                            style={{
                              height: "30px",
                              width: "85px",
                              lineHeight: "30px",
                              padding: "14 8px",
                              fontSize: "10px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              position: "relative",
                              top: "33px",
                            }}
                          >
                            Add Document
                          </Link>
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
                  left: "100%",
                  top: "53px",
                }}
              >
                <i className="fa fa-times" />
              </Link>
          
        </div>
        <div className="card-body" style={{padding:'14px 51px 10px 0px'}}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>DocumentName</th>
                <th>DocumentType</th>
                <th>FilePath</th>
                <th>ProjectName</th>
                <th>Status</th>
              </tr>
            </thead>
            {/* <tbody>
                {
                  project?.map((pro)=>{
                      return(
                          <tr>
                              <td>{pro._id}</td>
                              <td>{pro.ProjectName}</td>
                              <td>{pro.City}</td>
                              <td>{pro.State}</td>
                              <td> <Link
                        to={`/admin/getequipment/${pro._id}`}
                        className="btn btn-primary"
                        style={{
                          height: "27px",
                          width:"77px",
                          lineHeight: "20px",
                          padding: "0 8px",
                          fontSize: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Get Equipment
                      </Link></td>
                      { <td> <button
                        className="btn btn-danger"
                        onClick={() => deleteProject(pro._id)}
                        style={{
                          height: "27px",
                          width:"77px",
                          lineHeight: "20px",
                          padding: "0 8px",
                          fontSize: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Delete
                      </button></td> }
                              <td>{pro.StartDate}</td>
                              <td>{pro.EndDate}</td>
                          </tr>
                      )
                  })
                }
            </tbody> */}
            <tbody>
            {
              document?.map((d)=>{
                return(
                  <tr>
                    <td>{d.DocumentName}</td>
                    <td>{d.DocumentType}</td>
                    <td>{d.FilePath}</td>
                    <td>{d.ProjectID.ProjectName}</td>
                    <td>{d.status==true?"true":"false"}</td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
      </div>
    )
}

export default ViewDocument
