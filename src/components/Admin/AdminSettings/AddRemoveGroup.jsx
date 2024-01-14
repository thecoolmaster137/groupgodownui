import React from "react";

function AddRemoveGroup() {
  return (
    <div>
      <div className="justify-content-center">
        <h5 className="text-center p-2">Add/Remove Group</h5>
        {/* <div className="d-flex justify-content-center"> */}
        <div className="d-flex gap-3 justify-content-center mb-2">
          <label>
            {" "}
            Category Name
            <select className="form-select">
              <option selected>Category Name</option>
              <option value="1">One</option>
            </select>
          </label>

          <label>
            {" "}
            Group Name
            <input type="text" class="form-control" placeholder="Groupname" />
          </label>
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <label>
            {" "}
            Application Type
            <select className="form-select">
              <option selected>Application Type</option>
              <option value="1">One</option>
            </select>
          </label>

          <label>
            {" "}
            Group Link
            <input type="text" class="form-control" placeholder="Grouplink" />
          </label>
        </div>
        {/* </div> */}
      </div>
      <div>
        <div className="d-flex gap-2 mb-2 mt-4">
          <button className="btn btn-success">Add</button>
          <button className="btn btn-primary">Search</button>
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
                <th scope="col">Remove</th>
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
                <td>
                  <button className="btn btn-danger">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddRemoveGroup;
