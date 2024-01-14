import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./components/Admin/AdminSidebar/AdminSidebar";

function AdminLayout() {
  return (
    <>
      <AdminSidebar />
    </>
  );
}

export default AdminLayout;
