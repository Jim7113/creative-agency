import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const AddService = () => {
  const history = useHistory();
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.id] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("serviceTitle", info.serviceTitle);
    formData.append("description", info.description);

    fetch("https://still-ocean-48985.herokuapp.com/add-services", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          history.push("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <AdminSidebar />
        <div className="col-md-9">
          <h4
            className="mt-2 py-4"
            style={{ borderRight: "2px solid #f5f5f5" }}
          >
            Add event
          </h4>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              height: "100%",
              border: "1px solid #f5f5f5",
            }}
          >
            <form
              className="m-5 p-5 border-rounded"
              style={{ backgroundColor: "white", borderRadius: 12 }}
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="serviceTitle">Service Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="serviceTitle"
                    placeholder="Service Title"
                    onBlur={(e) => handleBlur(e)}
                    required
                  />
                </div>
                <div className="custom-file col-md-6 mt-4">
                  <input
                    onChange={handleFileChange}
                    type="file"
                    className="custom-file-input"
                    id="image"
                    placeholder="Picture"
                  />
                  <label className="custom-file-label mt-2" htmlFor="image">
                    Choose image
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="Service Description"
                  onBlur={(e) => handleBlur(e)}
                />
              </div>
              <p className="text-danger my-2"></p>
              <button type="submit" className="btn btn-primary m-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
