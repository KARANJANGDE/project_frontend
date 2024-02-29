import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminDashBoard = () => {
  //Used For Chart
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [project, setproject] = useState([])

  useEffect(() => {


    const getname=async()=>{
      try {
        const res= await axios.get("http://localhost:4000/api4/project");
        const data=res.data.data;
        console.log(data);
        setproject(data);
        //console.log(setproject)
        
    } catch (error) {
        console.log(error);
    }
    }

    getname();


    //Used for chart

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
                <p className="card-category">On Going Projects</p>
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
                    Sukun
                  </div>
                </div>
                <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{
                      width: "25%",
                      backgroundColor: "#FF6384",
                      height: "40px",
                      fontSize: "18px",
                    }}
                  >
                    Shivalik
                  </div>
                </div>
                <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{
                      width: "55%",
                      backgroundColor: "#FFCD56",
                      height: "40px",
                      fontSize: "18px",
                    }}
                  >
                    Ratnakar
                  </div>
                </div>
                {/* <div id="chartHours" className="ct-chart">
                </div> */}
              </div>
              <div className="card-footer ">
                <div className="legend">
                  <span style={{ marginRight: "15px" }}>
                    <i className="fa fa-circle text-info" /> Sukun
                  </span>
                  <span style={{ marginRight: "15px" }}>
                    <i className="fa fa-circle text-danger" /> Shivalik
                  </span>
                  <span style={{ marginRight: "15px" }}>
                    <i className="fa fa-circle text-warning" /> Ratnakar
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
                      to="/admin/addproject"
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
                      Add Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
                <h3 className="card-title">Equipment</h3>
                <p className="card-category">Quick Access</p>
              </div>
              <div className="card-body " style={{ minHeight: '493px' }}>
                <div className="table-full-width">
                  <table className="table" >
                    <tbody>
                      {
                        project?.map((pro)=>{
                          return (
                            <tr>
                              <td style={{ width: '1%' }}></td>
                              <td style={{ textAlign: 'left', padding: '8px 12px', minWidth: '325px' }}>
                                {pro.ProjectName}
                              </td>
                              <td className="td-actions text-right">
                                <Link
                                  to={`/admin/getequipment/${pro._id}`}
                                  type="button"
                                  rel="tooltip"
                                  title=""
                                  className="btn btn-info btn-simple btn-link"
                                  data-original-title="Edit Task"
                                >
                                  <i className="fa fa-edit" />
                                </Link>
                                <button
                                  type="button"
                                  rel="tooltip"
                                  title=""
                                  className="btn btn-danger btn-simple btn-link"
                                  data-original-title="Remove"
                                >
                                  <i className="fa fa-times" />
                                </button>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
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

export default AdminDashBoard;
