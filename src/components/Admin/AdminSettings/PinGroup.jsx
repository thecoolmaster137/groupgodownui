import React from "react";

function PinGroup() {
  return (
    <div className="d-flex justify-content-center">
      <div className="m-4">
        <div className="d-flex gap-3 flex-wrap justify-content-evenly mb-3">
          <div className="border border-4 p-3 rounded bg-light">
            <h6 className="text-center">Pinned Groups</h6>
            <p className="text-center">Count</p>
          </div>
          <div className="border border-4 p-3 rounded bg-light">
            <h6 className="text-center">Normal Groups</h6>
            <p className="text-center">Count</p>
          </div>
        </div>
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Group Name</th>
              <th scope="col">Group Links</th>
              <th scope="col">Group Category</th>
              <th scope="col">Country</th>
              <th scope="col">Language</th>
              <th scope="col">Application Type</th>
              <th scope="col">Reports Count</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark Henry</td>
              <td>
                <a href="#">https://whatsapp.com</a>
              </td>
              <td>Funny</td>
              <td>India</td>
              <td>Hindi</td>
              <td>Whatapp</td>
              <td>0</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-end">
          <button className="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  );
}

export default PinGroup;
