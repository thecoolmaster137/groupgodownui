import React from "react";

function AddModifyCategory() {
  return (
    <div className="d-flex justify-content-center mt-2">
      <div className="m-3 col-6">
        <h5 className="text-center p-2">Add/Modify Category</h5>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Category ID
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Application ID"
            aria-label="Application ID"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Category Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Application Type"
            aria-label="Application Type"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <button className="btn btn-success">Add</button>
          <button className="btn btn-primary">Search</button>
          <button className="btn btn-danger">Update</button>
        </div>
        <table class="table table-hover mt-4 text-center">
          <thead>
            <tr>
              <th scope="col">Category ID</th>
              <th scope="col">Category Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Entertainment</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Funny</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddModifyCategory;
