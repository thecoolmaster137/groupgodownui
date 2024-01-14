import React from "react";

function Reports() {
  return (
    <div>
      <div className="d-flex justify-content-center flex-column">
        <h5 className="text-center">Reports</h5>
        <label>
          {" "}
          Category Name
          <select className="form-select">
            <option selected>Category Name</option>
            <option value="1">One</option>
          </select>
        </label>
        <label className="mt-2">
          {" "}
          Application Type
          <select className="form-select">
            <option selected>Application Type</option>
            <option value="1">One</option>
          </select>
        </label>
      </div>
      <div className="mt-4">
        <div className="d-flex gap-3 mb-3">
          <button className="btn btn-success">Search</button>
          <button className="btn btn-primary">Export</button>
        </div>
        <div>
          <table className="table table-hover text-center">
            <thead>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Category Name</th>
                <th scope="col">Application Type</th>
                <th scope="col">Group Name</th>
                <th scope="col">Group Link</th>
                <th scope="col">Report Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Funny</td>
                <td>Whatsapp</td>
                <td>Glinks</td>
                <td>
                  <a href="#">https://whatsapp.com</a>
                </td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Reports;
