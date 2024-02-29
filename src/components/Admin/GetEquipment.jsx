import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const GetEquipment = () => {
  const id = useParams().id;
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    const getEquipmentByID = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api6/equipment/" + id
        );
        console.log(res.data.data);
        setEquipment(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getEquipmentByID();
  }, []);

  const deleteEquipmentByID = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api6/equipment/${id}`
      );
      console.log(res.data.data);
      const updatedEquipments = equipment.filter((equip) => equip._id !== id);
      setEquipment(updatedEquipments);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="col-md-12">
        <div className="card card-plain table-plain-bg">
          <div className="card-header ">
            <h4 className="card-title">Equipment Management</h4>
            <p className="card-category">Companies Equipment</p>
            <Link
                          className="btn btn-danger"
                          to={`/admin/getequipment/addequipment/${id}`}
                          style={{
                            height: "30px",
                            width: "85px",
                            lineHeight: "30px",
                            padding: "14 8px",
                            fontSize: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            top: "33px",
                          }}
                        >
                          Add Equipment
                        </Link>
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
            {equipment.length > 0 ? (
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>ProjectName</th>
                    <th>EquipmentName</th>
                    <th>Quantity</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {equipment.map((pro) => (
                    <tr key={pro._id}>
                      {" "}
                      {/* Added key for React list rendering */}
                      <td>{pro._id}</td>
                      <td>{pro.ProjectID.ProjectName}</td>
                      <td>{pro.EquipmentName}</td>
                      <td>{pro.Quantity}</td>
                      <td>
                        <Link
                          to={`/admin/getequipment/updateequipment/${pro._id}`}
                          className="btn btn-primary"
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
                          Edit
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteEquipmentByID(pro._id)}
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
                          Delete
                        </button>
                      </td>
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
  );
};

export default GetEquipment;
