import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateEquipment = () => {
const id = useParams().id;
  console.log(id);
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState('');
  

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    
    const fetchdata=async()=>{
        try {
            
            const res = await axios.get("http://localhost:4000/api6/equipment1/" + id);
            // console.log(res.data.data);
            // reset(res.data.data);

            const data = res.data.data;
            console.log(data);
            setProjectName(data.ProjectID.ProjectName);
        
            const formValues = {

              EquipmentName: data.EquipmentName, 
              Quantity: data.Quantity, 
              status:data.status
              
            };
      
            reset(formValues);
            
        } catch (error) {
            console.log(error);

        }
      }

      fetchdata();
    
  }, [])

  const submitHandler = async (data) => {

    try {

        const res=await axios.put(`http://localhost:4000/api6/equipment/`+id,data);
        console.log(res.data.data);
        navigate("/admin/equipment");
        
    } catch (error) {
        console.log(error);
    }
  }
  
  return (
    <div>
      <div className="col-md-12">
        <div className="card card-plain table-plain-bg">
          <div className="card-header ">
            <h4 className="card-title">Equipment Management</h4>
            <p className="card-category">Project: {projectName}</p>
            <Link
              type="button"
              to="/admin/equipment"
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
                    <th>EquipmentName</th>
                    <th>Quantity</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {/* <td>
                      { <input type="text" {...register("ProjectName")}></input> }
                      
                    </td> */}
                    <td>
                      <input type="text" {...register("EquipmentName")}></input>
                    </td>
                    <td>
                      <input type="text" {...register("Quantity")}></input>
                    </td>
                    <td>
                      <input type="text" {...register("status")}></input>
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
  )
}

export default UpdateEquipment
