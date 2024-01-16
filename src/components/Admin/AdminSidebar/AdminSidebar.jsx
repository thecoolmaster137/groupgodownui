import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./AdminSidebar.css";

function AdminSidebar() {
  return (
    <>
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <NavLink to="" className="navbar-brand">
              GroupGoDown
            </NavLink>
            <div className="pe-5">
              <div className="dropdown-center">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <i className="bi bi-person-square"></i> */}
                  Admin Profile
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
            <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100">
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                style={{ color: "black" }}
                id="menu"
              >
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/admin"
                    className="nav-link align-middle px-1"
                  >
                    <i className="fs-4 bi-house navbar_icons"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="reported" className="nav-link px-1 align-middle">
                    <i className="fs-4 bi-table navbar_icons"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">
                      Reported Groups
                    </span>
                  </NavLink>
                </li>
                <li>
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-speedometer2 navbar_icons"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">
                      Admin Settings <span className="fs-2 fw-bold">+</span>
                    </span>{" "}
                  </a>
                  <ul
                    className="collapse nav flex-column ms-1"
                    id="submenu1"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <NavLink to="addremovegroups" className="nav-link px-1">
                        {" "}
                        <span className="d-none d-sm-inline">
                          1. Add / Remove Group
                        </span>{" "}
                      </NavLink>
                    </li>
                    <li className="w-100">
                      <NavLink to="addmodifycategory" className="nav-link px-1">
                        {" "}
                        <span className="d-none d-sm-inline">
                          2. Add / Remove Category
                        </span>{" "}
                      </NavLink>
                    </li>
                    <li className="w-100">
                      <NavLink to="addmodifyapptype" className="nav-link px-1">
                        {" "}
                        <span className="d-none d-sm-inline">
                          3. Add / Remove Application Type
                        </span>{" "}
                      </NavLink>
                    </li>
                    <li className="w-100">
                      <NavLink to="pingroup" className="nav-link px-1">
                        {" "}
                        <span className="d-none d-sm-inline">
                          4. Pin Group
                        </span>{" "}
                      </NavLink>
                    </li>
                    <li className="w-100">
                      <NavLink to="groupreporting" className="nav-link px-1">
                        {" "}
                        <span className="d-none d-sm-inline">
                          5. Group Report Setting
                        </span>{" "}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="makeadmin" className="nav-link px-1">
                        {" "}
                        <span className="d-none d-sm-inline">
                          6. Make Admin
                        </span>{" "}
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="reports" className="nav-link px-1 align-middle">
                    <i className="fs-4 bi-people navbar_icons"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Reports</span>{" "}
                  </NavLink>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div className="col py-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
