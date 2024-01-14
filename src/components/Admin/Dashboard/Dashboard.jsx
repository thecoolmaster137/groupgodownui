import React from "react";
import { Link, Routes, Route, useNavigate, Outlet } from "react-router-dom";
import "./Dashboard.css";
import AllGroupsTable from "./Tables/AllGroupsTable.jsx";
import ReportedGroupsTable from "./Tables/ReportedGroupsTable.jsx";
import UnReportedTable from "./Tables/UnReportedTable.jsx";
import ActiveGroupsTable from "./Tables/ActiveGroupsTable.jsx";

function Dashboard() {
  // const navigate = useNavigate();

  // const handleNavigate = (path) => {
  //   navigate(path);
  // };
  return (
    <>
      <h3 className="text-center">Admin Dashboard</h3>
      <div className="tabs_main-div">
        <div className="border border-3 p-4 bg-light rounded">
          <Link to="">All Groups</Link>
        </div>
        <div className="border border-3 p-4 bg-light rounded">
          <Link to="reportedgroupstable">Reported Groups</Link>
        </div>
        <div className="border border-3 p-4 bg-light rounded">
          <Link to="unreportedtable">UnReported</Link>
        </div>
        <div className="border border-3 p-4 bg-light rounded">
          <Link to="activegroupstable">Active Groups</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Dashboard;
