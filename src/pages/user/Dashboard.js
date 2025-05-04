import React from "react";
import Layout from "../../commponets/Layouts/Layout";
import UserMenu from "../../commponets/Layouts/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title={"Dashboard - Fashtopia"}>
      <style>
        {`
          .dashboard {
            background: linear-gradient(135deg, #ffdee9, #ffc4ec, #ffe6fa);
            min-height: 80vh;
            padding: 30px;
            font-family: 'Comic Sans MS', cursive, sans-serif;
            color: #333;
          }

          .card {
            background: linear-gradient(135deg, #ff9a8b, #ff61a6, #ff7d00);
            color: white;
            font-family: 'Comic Sans MS', cursive, sans-serif;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
            border: 2px solid #ff61a6;
            border-radius: 12px;
          }

          .card h3 {
            font-size: 22px;
            margin-bottom: 10px;
          }
        `}
      </style>

      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>Name: {auth?.user?.name}</h3>
              <h3>Email: {auth?.user?.email}</h3>
              <h3>Address: {auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
