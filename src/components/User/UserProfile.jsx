import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faGooglePlusSquare,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const UserProfile = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName]=useState('');
    const [email, setemail] = useState('');

  useEffect(() => {
    // Step 1: Retrieve the user ID from localStorage
    const userId = localStorage.getItem('id'); // Ensure this key matches what you've used to store the ID
    
    if (userId) {
      // Step 2: Fetch user data
      const fetchUserData = async () => {
        try {
          // Adjust the URL to your API endpoint that returns user data based on ID
          const res = await axios.get(`http://localhost:4000/api/user/${userId}`);
          // Assuming the user's name is returned in the response under 'name'
            console.log(res.data.data)
          setFirstName(res.data.data.FirstName); 
          setLastName(res.data.data.LastName);// Step 3: Display the name
          setemail(res.data.data.UserEmail);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      };

      fetchUserData();
    }
  }, []);
  return (
    <div className="col-md-12" style={{ maxWidth: "75%", padding: "20px" }}>
        <div className="card card-user"style={{ margin: "20px"}}>
          <div className="card-header no-padding">
            <div className="card-image">
              <img src="../assets/img/full-screen-image-3.jpg" alt="..." />
            </div>
          </div>
          <div className="card-body ">
            <div className="author">
              <label>
                <img
                  className="avatar border-gray"
                  src="../../assets/img/faces/face-3.jpg"
                  alt="..."
                />
                <h5 className="card-title">{firstName} {lastName}</h5> {/* Display the fetched user name */}
              </label>
              <p className="card-description">{email}</p>
            </div>
            <p className="card-description text-center">
              Hey there! As you can see,
              <br /> it is already looking great.
            </p>
          </div>
          <div className="card-footer ">
            <hr />
            <div className="button-container mr-auto ml-auto">
              <button href="#" className="btn btn-simple btn-link btn-icon">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </button>
              <button href="#" className="btn btn-simple btn-link btn-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button href="#" className="btn btn-simple btn-link btn-icon">
                <FontAwesomeIcon icon={faGooglePlusSquare} />
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default UserProfile
