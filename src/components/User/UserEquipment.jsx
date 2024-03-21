import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const UserEquipment = () => {

  //const id=localStorage.getItem('id')

    const id = useParams().id;
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {

    
    const getEquipmentByID = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api6/equipment/`+id);
        console.log("res/....",res.data.data);
        setEquipment(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getEquipmentByID();
  }, []);
  return (
    <div>
      <div className="col-md-12">
        <div className="card card-plain table-plain-bg">
          <div className="card-header ">
            <h4 className="card-title">Equipment Management</h4>
            <p className="card-category">Companies Equipment</p>
            <Link
              type="button"
              to="/user/userprojectequipmentlist"
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
            {equipment.length > 0 ? (
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Sr.</th>
                    <th>ID</th>
                    <th>ProjectName</th>
                    <th>EquipmentName</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {equipment.map((pro,index) => (
                    <tr key={pro._id}>
                      {" "}
                      {/* Added key for React list rendering */}
                      <td>{index +1}</td>
                      <td>{pro._id}</td>
                      <td>{pro.ProjectID.ProjectName}</td>
                      <td>{pro.EquipmentName}</td>
                      <td>{pro.Quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No Data Available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserEquipment
