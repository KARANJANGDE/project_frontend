import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const UserProjectList = () => {

    const proid = localStorage.getItem("id");
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [projectIds, setProjectIds] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null); // To track which project is being hovered

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/user/${proid}`);
        if (res.data && res.data.data && res.data.data.ProjectID) {
          // Assume ProjectID is an array of project objects, extract the IDs
          const projectIds = res.data.data.ProjectID.map(project => project._id);
          setProjectIds(projectIds); // Save the extracted project IDs
          fetchProjectDetails(projectIds); // Fetch project details using the extracted IDs
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    const fetchProjectDetails = async (projectIDs) => {
      try {
        const projectDetailsPromises = projectIDs.map(projectID =>
          axios.get(`http://localhost:4000/api4/project/${projectID}`)
        );
        const projectDetailsResponses = await Promise.all(projectDetailsPromises);
        const detailedProjects = projectDetailsResponses.map(response => response.data.data);
        setProjects(detailedProjects); // Save the detailed project information
        console.log(detailedProjects);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
      }
    };

    fetchUserData();
  }, [proid]);


  const projectContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const projectCardStyle = {
    margin: '10px',
    width: '300px',
    height: '641px',
    overflow: 'hidden',
    borderRadius: '5px',
  };

  const getProjectImageStyle = (index) => ({
    width: '100%',
    height: '100%',
    backgroundImage: `url('/assets/img/${getImageName(index)}')`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end', // Ensure the text aligns to the bottom
    alignItems: 'center',
    position: 'relative',
  });

  const getImageName = (index) => {
    switch(index) {
      case 0: return 'Residential.jpg';
      case 1: return 'Beautifulhome.jpg';
      case 2: return 'Rental.jpg';
      default: return 'Default.jpg';
    }
  };

  const projectTitleStyle = {
    color: 'white', // Keep the text color white for contrast
    position:'relative',
    bottom:'22%',
    display: 'block', // Make sure the title is always visible by default
    fontWeight: 'bold', // Make the font bolder
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  };

  const projectInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Use space-between to push the p and Link apart
    textAlign: 'center',
    width: '100%',
    height: '100%', // Ensure the overlay covers the full height
    transition: 'opacity 0.5s', // Smooth transition for the hover effect
    opacity: 0, // Hide the paragraph and status button by default
    backgroundColor: 'rgba(0, 0, 0, 0.75)', // Semi-transparent overlay
    color: 'white',
    padding: '20px', // Adjust padding as needed
    position: 'absolute',
    top: 0,
    left: 0,
  };

  const projectStatusStyle = {
    position:'relative',
    bottom:'30%',
    textDecoration: 'none',
    color: 'red',
    border: '1px solid red',
    padding: '5px 10px',
    borderRadius: '5px',
    marginTop: '10px', // Add some margin above the status button
  };


  return (

    
    <div>
      <header style={{ textAlign: 'center', margin: '20px 0' }}>
        <h2>Project Management</h2>
        <p>View Your Project</p>
        </header>

    <div style={projectContainerStyle}>
      {projects.map((project, index) => (
        <div key={index} style={projectCardStyle}
          onMouseEnter={() => setHoverIndex(index)} // Set hover index to current project
          onMouseLeave={() => setHoverIndex(null)} // Reset hover index when not hovering
        >
          <div style={getProjectImageStyle(index)}>
            <h2 style={{...projectTitleStyle, opacity: hoverIndex === index ? 0 : 1}}>{project.ProjectName}</h2> {/* Hide title on hover */}
            <div style={{...projectInfoStyle, opacity: hoverIndex === index ? 1 : 0}}>
              <h3 style={{position:'relative',top:"20%"}}>Here is the Project information about the {project.ProjectName}. You can look for the project Further Info by clicking on the View button.</h3>
              <Link to={`/user/userviewproject/${project._id}`} style={projectStatusStyle}>
                View
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  //   <div className="col-md-12">
  //   <div className="card card-plain table-plain-bg">
  //   <div className="card-header ">
  //         <h3 className="card-title">View Project</h3>
  //         <p className="card-category">Here is a list of your projects</p>
  //       </div>
  //     <div className="card-body table-full-width table-responsive">
  //       <div className="content">
  //         <div className="container-fluid">
  //           <form>
  //             <div className="row">
  //               <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
  //                 {projects.map((project, index) => (
  //                   <div key={index} className="card" style={{ margin: "10px" }}>
  //                     <div className="card-header" style={{ textAlign: "center" }}>
  //                       <h3 className="card-title" style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", color: "#34568B" }}>
  //                         {project.ProjectName}
  //                       </h3>
  //                     </div>
  //                     <div className="card-body"
  //                     style={{ minHeight: "auto", minWidth: "auto" }}
  //                     >
  //                     <div className="row">
  //                           <div className="col-md-4" style={{minWidth:"300px"}}>
  //                             <label style={{ fontWeight: '728' }}>Project Name</label>
  //                             <h4 style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
  //                               {/* {types ? types.ProjectName : "Loading..."} */}
  //                               {project.ProjectName}
  //                             </h4>
  //                           </div>
  //                         </div>
  //                       <div className="row">
  //                       <div className="col-md-4" style={{minWidth:"300px"}}>
  //                             <label style={{ fontWeight: '728' }}>ProjectCity</label>                             
  //                             <h4 style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
  //                               {/* {types ? types._id : "Loading..."} */}
  //                               {project.City}
  //                               </h4>
  //                           </div>
  //                       </div>
  //                       <div className="row">
  //                         <div className="col-md-4" style={{minWidth:"300px"}}>
  //                             <label style={{ fontWeight: '728' }}>Project Type</label>                             
  //                             <h4 style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
  //                               {/* { {types ? types._id : "Loading..."} } */}
  //                               {project.type.TypeName}
  //                               </h4>
  //                           </div>
  //                         </div> 
  //                         <div className="row">
  //                           <div className="col-md-4" style={{minWidth:"300px"}}>
  //                             <label style={{ fontWeight: '728' }}>Latitude</label>
  //                             <h4 style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
  //                               {/* { {types ? types.ProjectName : "Loading..."} } */}
  //                               {project.Latitude}
  //                             </h4>
  //                           </div>
                            
  //                         </div>
  //                         <div className="row">
  //                         <div className="col-md-4" style={{minWidth:"300px"}}>
  //                             <label style={{ fontWeight: '728' }}>Longitude</label>                             
  //                             <h4 style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
  //                               {/* { {types ? types._id : "Loading..."} } */}
  //                               {project.Longitude}
  //                               </h4>
  //                           </div>
  //                         </div> 

  //                         {/* <div className="row">
  //                           <div className="col-md-4" style={{minWidth:"300px"}}>
  //                             <label style={{ fontWeight: '728' }}>StartDate</label>
  //                             <h4 style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
  //                               {/* {types ? types.ProjectName : "Loading..."} }
  //                               {new Date(project.StartDate).toLocaleDateString()}
  //                             </h4>
  //                           </div>
  //                         </div> */}
  //                         {/* <div className="row">
  //                         <div className="col-md-4" style={{minWidth:"300px"}}>
  //                             <label style={{ fontWeight: '728' }}>EndDate</label>                             
  //                             <h4 style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
  //                               { {types ? types._id : "Loading..."} }
  //                               {new Date(project.EndDate).toLocaleDateString()}
  //                               </h4>
  //                           </div>
  //                         </div> */}
  //                         <div className="row">
  //                         <div className="col-md-4" style={{minWidth:"300px"}}>
                                          
  //                             <Link
  //                     to={`/user/userviewproject/${project._id}`}
  //                     className="btn btn-primary"
  //                     style={{
  //                       height: "37px",
  //                       width:"270px",
  //                       lineHeight: "20px",
  //                       padding: "0 8px",
  //                       fontSize: "17px",
  //                       display: "flex",
  //                       alignItems: "center",
  //                       justifyContent: "center",
  //                       color: "red",
  //                       borderColor: "red",
  //                     }}
  //                   >
  //                     View
  //                   </Link>
  //                           </div>
  //                         </div>
  //                       {/* <p>Project ID: {project._id}</p> */}
  //                       {/* <p>Start Date: {new Date(project.StartDate).toLocaleDateString()}</p> */}
  //                       {/* <p>End Date: {new Date(project.EndDate).toLocaleDateString()}</p> */}
  //                       {/* <p>City: {project.City}</p> */}
  //                       {/* <p>State: {project.State}</p> */}
  //                       {/* <p>Country: {project.Country}</p> */}
  //                       {/* Add more project details as needed */}
  //                     </div>
  //                   </div>
  //                 ))}
  //               </div>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  )
}

export default UserProjectList
