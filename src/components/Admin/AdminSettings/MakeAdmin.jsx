import React from "react";

function MakeAdmin() {
  return (
    <div className="d-flex justify-content-center">
      <div className="m-4 col-6 border border-3 p-4 bg-light rounded">
        <h5 className="text-center">Make Admin</h5>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            User ID
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="User ID"
            aria-label="UserID"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            First Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            aria-label="Firstname"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Middle Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Middle Name"
            aria-label="Middlename"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Last Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            aria-label="Lastname"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Phone Number
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Phone Number"
            aria-label="Phonenumber"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Email ID
          </span>
          <input
            type="email"
            className="form-control"
            placeholder="Email ID"
            aria-label="EmailID"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Password
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Confirm Password
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            aria-label="Confirmpassword"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <button className="btn btn-success">Add</button>
          <button className="btn btn-primary">Search</button>
          <button className="btn btn-danger">Update</button>
        </div>
      </div>
    </div>
  );
}

export default MakeAdmin;
