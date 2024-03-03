import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUserProfile = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const getuserbyid = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/user/" + id);
        console.log(res.data.data);
        reset(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getuserbyid();
  }, []);

  const submitHandler = async (data) => {
    try {
      const res = await axios.put(`http://localhost:4000/api/user/` + id, data);
      console.log(res.data.data);
      navigate("/admin/adminprofile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card" style={{minHeight: "400px"}}>
            <div className="card-header">
              <h4 className="card-title">Edit Profile</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="row" style={{ marginBottom: '30px' }}>
                  <div className="col-md-6 pr-1">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        {...register("FirstName")}
                        className="form-control"
                        placeholder="Company"
                        defaultValue="Mike"
                        style={{ height: '45px', padding: '10px' }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 pl-1">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        {...register("LastName")}
                        className="form-control"
                        placeholder="Last Name"
                        defaultValue="Andrew"
                        style={{ height: '45px', padding: '10px' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 pr-1">
                    <div className="form-group">
                      <label>Company (disabled)</label>
                      <input
                        type="text"
                        className="form-control"
                        disabled=""
                        placeholder="Company"
                        defaultValue="Better Housing"
                        style={{ height: '45px', padding: '10px' }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 px-1">
                    <div className="form-group">
                      <label>Status</label>
                      <select {...register("status")} className="form-control"
                          placeholder="Project Status"style={{ height: '45px', padding: '10px' }}>
                         <option value="">Select Status</option>
                            <option value="true">True</option>
                            <option value="False">False</option>
                        </select>
                    </div>
                  </div>
                  <div className="col-md-4 pl-1">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        {...register("UserEmail")}
                        className="form-control"
                        placeholder="Email"
                        style={{ height: '45px', padding: '10px' }}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-info btn-fill pull-right"
                  style={{ padding: '12px 20px', marginTop: '20px' }}
                >
                  Update Profile
                </button>
                <div className="clearfix" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
