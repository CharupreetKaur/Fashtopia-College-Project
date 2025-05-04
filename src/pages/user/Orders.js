import React, { useState, useEffect } from "react";
import UserMenu from "../../commponets/Layouts/UserMenu";
import Layout from "./../../commponets/Layouts/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title={"Your Orders"}>
      <style>{`
        .dashboard {
          background: linear-gradient(135deg, #ffe4ec, #ffd6e7, #fff0f5);
          min-height: 100vh;
          font-family: 'Comic Sans MS', cursive, sans-serif;
          color: #333;
        }

        .text-center {
          color: #d63384;
          text-shadow: 1px 1px 2px #fff;
          margin-bottom: 20px;
        }

        .card {
          background: #fffafc;
          border: 2px dashed #ffb6c1;
          border-radius: 12px;
          box-shadow: 0 0 8px rgba(255, 182, 193, 0.3);
          margin-bottom: 20px;
        }

        .table {
          background-color: #ffffff;
          border: 1px solid #ffb6c1;
        }

        .table th {
          background-color: #fcdde7;
          color: #333;
          font-weight: bold;
        }

        .table td {
          background-color: #fff0f7;
        }

        .card-img-top {
          border-radius: 8px;
          border: 2px solid #ffb6c1;
        }

        .product-card {
          background-color: #fff0f7;
          border-radius: 10px;
          box-shadow: 0 0 6px rgba(255, 182, 193, 0.2);
        }

        .product-card p {
          margin: 4px 0;
        }
      `}</style>

      <div className="container-flui p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Orders</h1>
            {orders?.map((o, i) => (
              <div className="card p-3" key={i}>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Status</th>
                      <th scope="col">Buyer</th>
                      <th scope="col">Date</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>
                      <td>{o?.status}</td>
                      <td>{o?.buyer?.name}</td>
                      <td>{moment(o?.createAt).fromNow()}</td>
                      <td>{o?.payment.success ? "Success" : "Failed"}</td>
                      <td>{o?.products?.length}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="container">
                  {o?.products?.map((p) => (
                    <div className="row mb-2 p-3 product-card flex-row" key={p._id}>
                      <div className="col-md-4">
                        <img
                          src={`/api/v1/product/product-photo/${p._id}`}
                          className="card-img-top"
                          alt={p.name}
                          width="100px"
                          height="100px"
                        />
                      </div>
                      <div className="col-md-8">
                        <p><strong>{p.name}</strong></p>
                        <p>{p.description.substring(0, 30)}...</p>
                        <p>Price: ₹{p.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
