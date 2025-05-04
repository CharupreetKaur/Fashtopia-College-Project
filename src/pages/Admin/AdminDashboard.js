import React from "react";
import AdminMenu from "../../commponets/Layouts/AdminMenu";
import Layout from "../../commponets/Layouts/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <style>
        {`
          .dashboard {
            font-family: 'Comic Sans MS', cursive, sans-serif;
          }

          .admin-panel-bg {
            background: linear-gradient(to bottom right, #ffe6f0, #ffccdf);
            border-radius: 12px;
            padding: 20px;
            margin-right: 30px; /* leaves space on the right */
            box-shadow: 0 0 10px rgba(255, 105, 180, 0.3);
          }

          .admin-card {
            background: #fff0f5;
            border: 3px dashed #ff69b4;
            border-radius: 12px;
            box-shadow: 0 0 15px rgba(255, 105, 180, 0.4);
            padding: 20px;
            font-size: 18px;
            color: #d63384;
            transition: transform 0.3s ease;
          }

          .admin-card:hover {
            transform: scale(1.02);
          }

          .admin-card h3 {
            margin-bottom: 15px;
            font-weight: bold;
            text-shadow: 1px 1px #ff99cc;
          }
        `}
      </style>

      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="admin-panel-bg">
              <div className="admin-card">
                <h3>Admin Name: {auth?.user?.name}</h3>
                <h3>Admin Email: {auth?.user?.email}</h3>
                <h3>Admin Contact: {auth?.user?.phone}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
