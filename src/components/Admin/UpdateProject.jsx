import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateProject = () => {
  // const { id } = useParams();
  // const navigate = useNavigate();
  // const { register, handleSubmit, reset } = useForm();
  // const [types, settypes] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, reset } = useForm();
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedTypeName, setSelectedTypeName] = useState("");


  useEffect(() => {
    const fetchTypesAndProject = async () => {
      try {
        // Fetch types
        const typesRes = await axios.get("http://localhost:4000/api5/type");
        const typesData = typesRes.data.data;
        setTypes(typesData);

        // Fetch project data
        const projectRes = await axios.get(
          `http://localhost:4000/api4/project/${id}`
        );
        const projectData = projectRes.data.data;

        // Assuming projectData.type contains the type ID
        const currentType = typesData.find(
          (type) => type._id === projectData.type
        );

        // Set the selected type ID and name
        setSelectedType(currentType ? currentType._id : "");
        setSelectedTypeName(currentType ? currentType.TypeName : "");

        // Reset form fields with project data, omitting the type to handle it separately
        const { type, ...rest } = projectData;
        reset(rest);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTypesAndProject();
  }, [id, reset, setValue]);

  const submitHandler = async (data) => {
    try {
      await axios.put(`http://localhost:4000/api4/project/${id}`, data);
      navigate("/admin/adminviewproject");
    } catch (error) {
      console.log(error);
    }
  };
  const handleTypeChange = (e) => {
    const selectedValue = e.target.value;

    // Update the form value for type
    setValue("type", selectedValue);

    // Find the selected type object based on ID
    const selectedTypeObj = types.find((type) => type._id === selectedValue);

    // Update state for selected type ID and name
    setSelectedType(selectedTypeObj ? selectedTypeObj._id : "");
    setSelectedTypeName(selectedTypeObj ? selectedTypeObj.TypeName : "");
  };

  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-header" style={{ textAlign: "center" }}>
          <h3
            className="card-title"
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              color: "#34568B",
            }}
          >
            Update Project
          </h3>
          <Link
            to="/admin/adminviewproject"
            className="btn btn-danger btn-simple btn-link"
            style={{
              display: "flex",
              alignItems: "right",
              fontSize: "17px",
              position: "relative",
              left: "96%",
              top: "-44px",
            }}
          >
            <i className="fa fa-times" />
          </Link>
        </div>
        <div className="card-body" style={{ padding: "20px" }}>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="row">
              <div className="col-md-6 pr-1">
                <label>Project Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("ProjectName")}
                />
              </div>
              <div className="col-md-6 pl-1">
                <label>Project ID (Readonly)</label>
                <input
                  type="text"
                  className="form-control"
                  value={id}
                  readOnly
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 pr-1">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("City")}
                />
              </div>
              <div className="col-md-4 px-1">
                <label>State</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("State")}
                />
              </div>
              <div className="col-md-4 pl-1">
                <label>Country</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("Country")}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 pr-1">
                <label>Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("StartDate")}
                />
              </div>
              <div className="col-md-6 pl-1">
                <label>End Date</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("EndDate")}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 pr-1">
                <label>Latitude</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("Latitude")}
                />
              </div>
              <div className="col-md-4 px-1">
                <label>Longitude</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("Longitude")}
                />
              </div>
              <div className="col-md-4 pl-1">
                <label>Project Type</label>
                <select
                  {...register("type")}
                  className="form-control"
                  value={selectedType}
                  onChange={handleTypeChange}
                >
                  {types.map((type) => (
                    <option key={type._id} value={type._id}>
                      {type.TypeName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <label>SqaureFeet</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("squareFeet")}
                />
              </div>
              <div className="col-md-3 ">
                <label>BHK</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("bhk")}
                />
              </div>
              <div className="col-md-3">
                <label>Garden</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("garden")}
                />
              </div>
              <div className="col-md-3">
                <label>Rera</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("rera")}
                />
              </div>
            </div>

            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary">
                  Update Project
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProject;
