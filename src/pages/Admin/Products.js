import React, { useState, useEffect } from "react";
import AdminMenu from "../../commponets/Layouts/AdminMenu";
import Layout from "./../../commponets/Layouts/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  // Get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex flex-wrap justify-content-start">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard {
          background-color: #ffe6f2;
          padding: 20px;
          border-radius: 10px;
        }

        h1 {
          font-family: 'Arial', sans-serif;
          font-size: 28px;
          font-weight: bold;
          color: #ff66b2;
          text-align: center;
          margin-bottom: 30px;
        }

        .card {
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .card-title {
          font-size: 18px;
          font-weight: bold;
          color: #ff66b2;
        }

        .card-text {
          font-size: 14px;
          color: #555;
        }

        .product-link {
          text-decoration: none;
        }
      `}</style>
    </Layout>
  );
};

export default Products;
