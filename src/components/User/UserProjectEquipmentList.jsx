import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const UserProjectEquipmentList = () => {

  const proid = localStorage.getItem("id");
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
      case 0: return 'Ratnakar2.jpg';
      case 1: return 'Shivalik2.jpg';
      case 2: return 'Shukun2.jpg';
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
    color: '#008DDA',
    border: '1px solid #008DDA',
    padding: '5px 10px',
    borderRadius: '5px',
    marginTop: '10px', // Add some margin above the status button
    
  };
  return (

    <div>
    <header style={{ textAlign: 'center', margin: '20px 0' }}>
      <h2>Equipment Management</h2>
      <p>View Your Projects Equipment</p>
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
          <h3 style={{position:'relative',top:"10%"}}>Here is the Equipment information about the {project.ProjectName}. You can look for the Equipment list by clicking on the Equipment button.</h3>
          <Link to={`/user/equipment/${project._id}`} style={projectStatusStyle}>
            Equipment
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
  )
}

export default UserProjectEquipmentList
