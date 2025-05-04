import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <style>
        {`
          .dashboard-menu {
            background: linear-gradient(to bottom, #ff99cc, #ff66b2);
            border-radius: 10px;
            padding: 20px;
            font-family: 'Comic Sans MS', cursive, sans-serif;
            box-shadow: 0 0 12px rgba(255, 105, 180, 0.4);
          }

          .dashboard-menu h4 {
            color: white;
            font-weight: bold;
            margin-bottom: 20px;
            text-shadow: 2px 2px 5px #ff66b2;
          }

          .dashboard-menu .list-group-item {
            background-color: white;
            color: #ff1493;
            font-weight: bold;
            margin-bottom: 10px;
            border: 2px solid #ff69b4;
            border-radius: 6px;
            transition: all 0.3s ease;
            text-align: left;
          }

          .dashboard-menu .list-group-item:hover {
            background-color: #ffb6c1;
            color: white;
            border-color: #ff69b4;
            transform: scale(1.03);
          }

          .dashboard-menu .list-group-item.active {
            background-color: #ff69b4 !important;
            color: white !important;
            border-color: #ff1493 !important;
          }
        `}
      </style>

      <div className="text-center dashboard-menu">
        <div className="list-group">
          <h4>DASHBOARD</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            PROFILE
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            ORDERS
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
