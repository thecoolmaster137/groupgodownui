import React from "react";
import "./Home.css";

function GroupInvite() {
  return (
    <div className="p-5">
      <div className="d-flex justify-content-center mt-2 flex-column border border-3 bg-light rounded">
        <div className="d-flex flex-column gap-2 align-items-center p-3">
          <img
            src="https://pps.whatsapp.net/v/t61.24694-24/416124946_1159428725435440_3598523982115232849_n.jpg?ccb=11-4&oh=01_AdRVGrprLJ5fwTJw_n9gD2ufZ44QmFWyWpRM_fp4oOqDHA&oe=65ADF556&_nc_sid=e6ed6c&_nc_cat=109"
            alt="Group Image"
            width={"10%"}
          />
          <a href="#">Group Heading</a>
          <div className="d-flex gap-2">
            <a href="#">
              <i className="bi bi-list"></i> Type
            </a>
            <a href="#">
              <i className="bi bi-globe"></i> Location
            </a>
            <a href="#">
              <i className="bi bi-translate"></i> Language
            </a>
          </div>
          <p>2024-01-12 12:09:20</p>
          <div
            className="border border-2 bg-light rounded p-2"
            style={{ width: "-webkit-fill-available" }}
          >
            <p className="m-0">Group Description</p>
          </div>
          <div className="d-flex gap-3 p-2">
            <button className="btn btn-primary">Join Group</button>
            <button className="btn btn-success">Share Group</button>
          </div>
        </div>
        <div className="ms-3">
          <p>
            <button
              className="btn btn-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWidthExample"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
            >
              Report Group
            </button>
          </p>
          <div className="d-flex flex-column">
            <div
              className="collapse collapse-horizontal me-3 mb-4"
              id="collapseWidthExample"
            >
              <div className="border border-3 p-3 rounded bg-light">
                <select className="form-select mb-3">
                  <option selected>Report For</option>
                  <option value="1">Options!!!</option>
                </select>
                <div class="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                  <label for="floatingTextarea">
                    Reasons for reporting group
                  </label>
                </div>
                <button className="btn btn-danger ">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card mt-5">
          <h5 className="pt-3 ps-3">Related Groups</h5>
          <div className="card-body">
            <img
              src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-group-icon-png-image_5097424.jpg"
              width={"8%"}
            />
            <div className="heading-div">
              <h5>
                <a href="#">Group Heading</a>
              </h5>
              <div>
                <a href="#">
                  <i class="bi bi-list"></i> Type
                </a>
                <a href="#">
                  <i class="bi bi-globe"></i> Location
                </a>
                <a href="#">
                  <i class="bi bi-translate"></i> Language
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center">
              <a href="#"> Group Description</a>
            </p>
            <hr />
          </div>
          <div className="ps-4 pe-4 d-flex justify-content-between">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Join Group{" "}
            </a>
            <p className="social-icons-p">
              Share on :{" "}
              <div className="social-icons-div">
                <a href="#">
                  <i class="bi bi-whatsapp"></i>
                </a>
                <a href="#">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i class="bi bi-telegram"></i>
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupInvite;
