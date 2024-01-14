import React from "react";

function GroupReporting() {
  return (
    <div className="d-flex justify-content-center">
      <div className="m-4">
        <h5 className="text-center p-2">Group Reporting Settings</h5>
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Group Name</th>
              <th scope="col">Group Links</th>
              <th scope="col">Group Category</th>
              <th scope="col">Country</th>
              <th scope="col">Language</th>
              <th scope="col">Reports Count</th>
              <th scope="col">Approved Reports</th>
              <th scope="col">Default Group</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>GLinks</td>
              <td>
                <a href="#">https://whatsapp.com</a>
              </td>
              <td>Funny</td>
              <td>India</td>
              <td>Hindi</td>
              <td>0</td>
              <td>1</td>
              <td>NA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GroupReporting;
