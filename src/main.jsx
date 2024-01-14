import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Layout from "./Layout.jsx";
import AddGroup from "./components/AddGroup/AddGroup.jsx";
import Terms from "./components/Terms/Terms.jsx";
import Privacy from "./components/Privacy/Privacy.jsx";
import Contact from "./components/Contact/Contact.jsx";
import AdminSidebar from "./components/Admin/AdminSidebar/AdminSidebar.jsx";
import Dashboard from "./components/Admin/Dashboard/Dashboard.jsx";
import Login from "./components/Admin/Login/Login.jsx";
import ReportedGroups from "./components/Admin/ReportedGroups/ReportedGroups.jsx";
import AddModifyApplication from "./components/Admin/AdminSettings/AddModifyApplication.jsx";
import AddModifyCategory from "./components/Admin/AdminSettings/AddModifyCategory.jsx";
import GroupReporting from "./components/Admin/AdminSettings/GroupReporting.jsx";
import MakeAdmin from "./components/Admin/AdminSettings/MakeAdmin.jsx";
import PinGroup from "./components/Admin/AdminSettings/PinGroup.jsx";
import AdminLayout from "./AdminLayout.jsx";
import Reports from "./components/Admin/Reports/Reports.jsx";
import AddRemoveGroup from "./components/Admin/AdminSettings/AddRemoveGroup.jsx";
import AllGroupsTable from "./components/Admin/Dashboard/Tables/AllGroupsTable.jsx";
import ActiveGroupsTable from "./components/Admin/Dashboard/Tables/ActiveGroupsTable.jsx";
import ReportedGroupsTable from "./components/Admin/Dashboard/Tables/ReportedGroupsTable.jsx";
import UnReportedTable from "./components/Admin/Dashboard/Tables/UnReportedTable.jsx";
import JoinGroup from "./components/Home/JoinGroup.jsx";
import GroupInvite from "./components/Home/GroupInvite.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route>
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="addgroup" element={<AddGroup />} />
      <Route path="terms" element={<Terms />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="contact" element={<Contact />} />
      <Route path="groupinvite" element={<GroupInvite />} />
      <Route path="joingroup" element={<JoinGroup />} />
    </Route>
    <Route path="login" element={<Login />} />
    <Route path="admin" element={<AdminLayout />}>
      <Route path="sidebar" element={<AdminSidebar />} />
      <Route path="" element={<Dashboard />}>
        <Route path="" element={<AllGroupsTable />} />
        <Route path="reportedgroupstable" element={<ReportedGroupsTable />} />
        <Route path="unreportedtable" element={<UnReportedTable />} />
        <Route path="activegroupstable" element={<ActiveGroupsTable />} />
      </Route>
      <Route path="reported" element={<ReportedGroups />} />
      <Route path="addremovegroups" element={<AddRemoveGroup />} />
      <Route path="addmodifycategory" element={<AddModifyCategory />} />
      <Route path="addmodifyapptype" element={<AddModifyApplication />} />
      <Route path="pingroup" element={<PinGroup />} />
      <Route path="groupreporting" element={<GroupReporting />} />
      <Route path="makeadmin" element={<MakeAdmin />} />
      <Route path="reports" element={<Reports />} />
    </Route>
  </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
