import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateProject = () => {
  //const [project, setproject] = useState([]);

  const id = useParams().id;
  console.log(id);
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api4/project/" + id);
        console.log(res.data.data);
        //setproject(res.data.data);
        reset(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, []);

  const submitHandler = async (data) => {
    try {
      const res = await axios.put(
        "http://localhost:4000/api4/project/" + id,
        data
      );
      console.log(res.data.data);
      navigate("/admin/adminviewproject");
      //setproject(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   const getProjectbyID = async () => {
  //     try {

  //       setproject(res.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getProjectbyID();
  //   }, []);

  return (
    <div>
      <div className="col-md-12">
        <div className="card card-plain table-plain-bg">
          <div className="card-header ">
            <h4 className="card-title">Project Management</h4>
            <p className="card-category">Updation</p>
            <Link
              type="button"
              to="/admin/adminviewproject"
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
          <div className="card-body table-full-width table-responsive">
            <form onSubmit={handleSubmit(submitHandler)}>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>ProjectName</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Action</th>
                    <th>StartDate</th>
                    <th>EndDate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="text" {...register("ProjectName")}></input>
                    </td>
                    <td>
                      <input type="text" {...register("City")}></input>
                    </td>
                    <td>
                      <input type="text" {...register("State")}></input>
                    </td>
                    <td>
                      {" "}
                      <button
                        type="submit"
                        className="btn btn-danger"
                        style={{
                          height: "27px",
                          width: "77px",
                          lineHeight: "20px",
                          padding: "0 8px",
                          fontSize: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <input type="text" {...register("StartDate")}></input>
                    </td>
                    <td>
                      <input type="text" {...register("EndDate")}></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            {/* <div className="stats">
                    <Link
                      to="/admin/addproject"
                      className="btn btn-danger"
                      style={{
                        height: "40px",
                        lineHeight: "20px",
                        padding: "0 10px",
                        fontSize: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Add Project
                    </Link>
                  </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProject;
