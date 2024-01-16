import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <React.Fragment>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-cars"
            className="list-group-item list-group-item-action"
          >
            Create Cars
          </NavLink>
          <NavLink
            to="/dashboard/admin/cars"
            className="list-group-item list-group-item-action"
          >
            Cars
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>

          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminMenu;
