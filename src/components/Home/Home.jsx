import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div className="home-main-div">
      <div className="add-btn-div">
        <button className="btn btn-success">+ Add Groups</button>
      </div>
      <div className="select-div">
        <div>
          <label>Any Category</label>
          <select name="Category" className="form-select">
            <option>Any Category</option>
          </select>
        </div>
        <div>
          <label>Any Country</label>
          <select name="Country" className="form-select">
            <option>Any Country</option>
          </select>
        </div>
        <div>
          <label>Any Language</label>
          <select name="Language" className="form-select">
            <option>Any Language</option>
          </select>
        </div>
        <div>
          <label>Application Type</label>
          <select name="Type" className="form-select">
            <option>Application</option>
          </select>
        </div>
        <button className="btn btn-primary">Find Group</button>
      </div>
    </div>
  );
}
