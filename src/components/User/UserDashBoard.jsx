import axios from "axios";
import { Chart } from "chart.js";
import React, { useEffect, useRef, useState } from "react";
import { set, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const UserDashBoard = () => {
  //Used For Chart
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const {register,handleSubmit}=useForm();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    //Used for chart
    const storedUserId = localStorage.getItem('id');
    if (storedUserId) {
      setUserId(storedUserId);
      console.log(storedUserId)
    } else {
      console.log("No user ID found in localStorage.");
    }


    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    const ctx = chartRef.current.getContext("2d");
    // Create a new chart instance and store it in the ref
    chartInstanceRef.current = new Chart(ctx, {
      type: "pie",
      data: {
        //labels: ['Rental', 'Residential', 'Commercial'],
        datasets: [
          {
            //label: [],
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Overview",
            position: "bottom",
            padding: {
              // Add padding around the title
              top: 30, // Adds space above the title
              //bottom: 20, // Adds space below the title (affects space between title and pie chart)
            },
          },
        },
      },
    });
    // Cleanup function to destroy chart instance when component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);


  const submitHandler=async(data)=>{
    const object={
      AdminID:"65b92c6a1f41719ccc4b29ac",
      UserID:userId,
      Inquiry:data.Inquiry
    }
    try {
      const res=await axios.post("http://localhost:4000/api9/com",object)
      console.log(res.data.data);
      
    } catch (error) {
      console.log(error);
    }
  }


  // const id=localStorage.getItem(id);
  // console.log(id)
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="card ">
              <div className="card-header ">
                <h3 className="card-title">Tracking</h3>
                <p className="card-category">Project Tracks</p>
              </div>
              <div className="card-body ">
                <div
                  id="chartPreferences"
                  className="ct-chart ct-perfect-fourth"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "auto",
                  }}
                >
                  <canvas ref={chartRef}></canvas>
                </div>
              </div>

              <div className="card-footer ">
                <div
                  className="legend"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span style={{ marginRight: "15px" }}>
                    <i className="fa fa-circle text-info" /> Pending
                  </span>
                  <span style={{ marginRight: "15px" }}>
                    <i className="fa fa-circle text-danger" /> On Going
                  </span>
                  <span style={{ marginRight: "15px" }}>
                    <i className="fa fa-circle text-warning" /> Completed
                  </span>
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-clock-o" /> Record updated 2 days ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card ">
              <div className="card-header ">
                <h3 className="card-title">Project Management</h3>
                <p className="card-category">Ratnakar</p>
              </div>
              <div className="card-body " style={{ minHeight: "395px" }}>
                <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{
                      width: "75%",
                      backgroundColor: "#2196F3",
                      height: "40px",
                      fontSize: "18px",
                    }}
                  >
                    1st Floor
                  </div>
                </div>
                <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{
                      width: "55%",
                      backgroundColor: "#FF6384",
                      height: "40px",
                      fontSize: "18px",
                    }}
                  >
                    2nd Floor
                  </div>
                </div>
                <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{
                      width: "25%",
                      backgroundColor: "#FFCD56",
                      height: "40px",
                      fontSize: "18px",
                    }}
                  >
                    3rd Floor
                  </div>
                </div>
                {/* <div id="chartHours" className="ct-chart">
                </div> */}
              </div>
              <div className="card-footer ">
                <div className="legend">
                  <span style={{ marginRight: "15px" }}>
                    <i className="fa fa-circle text-info" /> 1st Floor
                  </span>
                  <span style={{ marginRight: "15px" }}>
                    <i className="fa fa-circle text-danger" /> 2nd Floor
                  </span>
                  <span style={{ marginRight: "15px" }}>
                    <i className="fa fa-circle text-warning" /> 3rd Floor
                  </span>
                </div>
                <hr />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                  <div className="stats">
                    <Link
                      to="/user/userviewproject"
                      className="btn btn-danger"
                      style={{
                        height: "20px",
                        lineHeight: "20px",
                        padding: "0 10px",
                        fontSize: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="card ">
              <div className="card-header ">
                <h4 className="card-title">Image Management</h4>
                <p className="card-category">On Going Projects</p>
              </div>
              <div className="card-body ">
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "75%" ,backgroundColor: '#2196F3' }}>
                    75%
                  </div>
                </div>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "25%",backgroundColor: '#FF6384'}}>
                    25%
                  </div>
                </div>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "55%", backgroundColor: "#FFCD56" }}>
                    55%
                  </div>
                </div>
                { <div id="chartHours" className="ct-chart">
                </div> }
              </div>
              <div className="card-footer ">
                <div className="legend">
                  <i className="fa fa-circle text-info" /> Sukun
                  <i className="fa fa-circle text-danger" /> Shivalik
                  <i className="fa fa-circle text-warning" /> Ratnakar
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card ">
              <div className="card-header ">
                <h3 className="card-title">About Us</h3>
                <p className="card-category">Company Description</p>
              </div>
              <div className="card-body ">
                <p className="orange-theme">
                  At Better Housing, we are pioneering the future of
                  construction management through digital innovation. Our mobile
                  application is tailored to revolutionize how construction
                  projects are managed, tracked, and executed, bringing
                  unparalleled efficiency and clarity to the entire process.
                  Designed for professionals across the construction industry,
                  including contractors, project managers, architects, and
                  engineers, Better Housing serves as your digital assistant in
                  the palm of your hand.
                </p>
                <p className="orange-theme">
                  It serves as an digital tool which help the professionals,
                  including contractors, project managers, architects,
                  engineers. It will also help them maintain the documentation
                  properly and store it.
                </p>
              </div>
              <div className="card-footer">
                <div className="legend">
                  <span style={{ marginRight: "15px" }}>
                    <i className="fa fa-circle text-info" /> News18
                  </span>
                  <span style={{ marginRight: "15px" }}>
                    <i className="fa fa-circle text-danger" /> AajTak
                  </span>
                </div>
                <hr />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                  <div className="stats">
                    <Link
                      to="#"
                      className="btn btn-danger"
                      style={{
                        height: "20px",
                        lineHeight: "20px",
                        padding: "0 10px",
                        fontSize: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card  card-tasks">
              <div className="card-header ">
                <h3 className="card-title">Communication</h3>
                <p className="card-category">Let Me Connect you with ur query solver</p>
              </div>
              <div className="card-body " style={{minHeight:"500px"}}>
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="form-group">
                    <label htmlFor="issueMessage">Enquiry Box</label>
                    <textarea
                      className="form-control"
                      {...register("Inquiry")}
                      id="issueMessage"
                      rows="3"
                      placeholder="Describe your issue here..."
                      style={{minHeight:"400px"}}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit Issue
                  </button>
                </form>
              </div>
              <div className="card-footer ">
                <hr />
                <div className="stats">
                  <i className="now-ui-icons loader_refresh spin" /> Updated 3
                  minutes ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
