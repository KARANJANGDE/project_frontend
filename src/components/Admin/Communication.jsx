import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Communication = () => {

    const [com, setcom] = useState([])

    useEffect(() => {
      const getallcom=async()=>{
        try {
        const res = await axios.get("http://localhost:4000/api9/com");
        console.log(res.data.data);
        setcom(res.data.data);
        
      } catch (error) {
        console.log(error);
      }
      }

      getallcom();
    }, [])
    
  return (
    <div className="col-md-12">
    <div className="card card-plain table-plain-bg">
      <div className="card-header ">
        <h4 className="card-title">Communication Management</h4>
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
                left: "100%",
                top: "54px",
              }}
            >
              <i className="fa fa-times" />
            </Link>
        
      </div>
      <div className="card-body table-full-width table-responsive" style={{padding:"15px 0px 10px 0px"}}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>UserName</th>
              <th>Inquiry</th>
              <th>ComDate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
              {
                com?.map((comu,index)=>{
                  const formatedDate=comu.ComDate.split('T')[0];
                  const firstName = comu.UserID ? comu.UserID.FirstName : "Unknown";
                  const lastName = comu.UserID ? comu.UserID.LastName : "User";
                    return(
                       <tr>
                        <td>{index+1}</td>
                        <td>{firstName} {lastName}</td>
                        <td>{comu.Inquiry}</td>
                        <td>{formatedDate}</td>
                        <td>{comu.Status==true?"false":"true"}</td>
                        {/* <td>
                        {<button
                                  onClick={()=>
                                    deletecommunication(comu._id)
                                  }
                                  type="button"
                                  rel="tooltip"
                                  title=""
                                  className="btn btn-info btn-simple btn-link"
                                  data-original-title="Edit Task"
                                >
                                  <i className="fa fa-edit" />
                                </button> }
                        </td> */}
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

export default Communication
