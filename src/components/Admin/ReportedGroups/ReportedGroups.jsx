import React from "react";

function ReportedGroups() {
  return (
    <>
      <div>
        <div className="p-3">
          <h5 className="ms-2">Reported Groups</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr.no.</th>
                <th scope="col">Group Name</th>
                <th scope="col">Group Links</th>
                <th scope="col">Country</th>
                <th scope="col">Language</th>
                <th scope="col">Application Type</th>
                <th scope="col">Reports Count</th>
                <th scope="col">Checkout</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <button className="btn btn-secondary">Report</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ReportedGroups;
