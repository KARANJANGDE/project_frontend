import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AdminViewProject = () => {

    const [project, setproject] = useState([])

   const getAllProject=async()=>{
    try {
        const res= await axios.get("http://localhost:4000/api4/project");
        console.log(res.data.data);
        setproject(res.data.data);
        
    } catch (error) {
        console.log(error);
    }
   }
   const deleteProject = async (id) => {
    try {
        const res=await axios.delete(`http://localhost:4000/api4/project/${id}`);
        console.log(res.data.data);
        const updatedProjects = project.filter(pro => pro._id !== id);
        setproject(updatedProjects);
        
    } catch (error) {
        console.log("Failed to delete project:", error);
        
    }
};

   useEffect(() => {
     getAllProject();
   }, [])
   

    

  return (
    <div className="col-md-12">
    <div className="card card-plain table-plain-bg">
      <div className="card-header ">
        <h4 className="card-title">Project Management</h4>
        <p className="card-category">Companies project</p>
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
                left: "102%",
                top: "54px",
              }}
            >
              <i className="fa fa-times" />
            </Link>
        
      </div>
      <div className="card-body table-full-width table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>ProjectName</th>
              <th>City</th>
              <th>State</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Action</th>
              <th>Status</th>
              <th>Deletion</th>
              <th>StartDate</th>
              <th>EndDate</th>
            </tr>
          </thead>
          <tbody>
              {
                project?.map((pro,index)=>{
                  const formattedStartDate = pro.StartDate.split('T')[0];
                  const formattedEndDate = pro.EndDate.split('T')[0];
      
                    return(
                        <tr>
                            <td>{index +1}</td>
                            <td>{pro.ProjectName}</td>
                            <td>{pro.City}</td>
                            <td>{pro.State}</td>
                            <td>{pro.Latitude}</td>
                            <td>{pro.Longitude}</td>
                            <td> <Link
                      to={`/admin/updateproject/${pro._id}`}
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
                      Update
                    </Link></td>
                    <td> <Link
                      to={`/admin/projectstatus/${pro._id}`}
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
                        color: "#4CAF50",
                        borderColor: "#4CAF50",
                      }}
                    >
                      Status
                    </Link></td>
                    <td> <button
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
                    </button></td>
                            {/* <td>{pro.StartDate}</td>
                            <td>{pro.EndDate}</td> */}
                            <td>{formattedStartDate}</td>
                    <td>{formattedEndDate}</td>
                        </tr>
                    )
                })
              }
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default AdminViewProject
