import React, { useState, useEffect } from "react";
import Layout from "./../../commponets/Layouts/Layout";
import AdminMenu from "./../../commponets/Layouts/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = await axios.post("/api/v1/product/create-product", productData);
      if (data?.error) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid m-3 p-3 dashboard create-product">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">Create Product</h1>
            <div className="form-container">
              <form onSubmit={handleCreate}>
                <div className="form-group">
                  <Select
                    bordered={false}
                    placeholder="Select a category"
                    size="large"
                    showSearch
                    className="form-select mb-3"
                    onChange={(value) => setCategory(value)}
                  >
                    {categories?.map((c) => (
                      <Option key={c._id} value={c._id}>
                        {c.name}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div className="form-group mb-3">
                  <label className="btn btn-outline-secondary upload-btn">
                    {photo ? photo.name : "Upload Photo"}
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      hidden
                    />
                  </label>
                </div>

                {photo && (
                  <div className="text-center mb-3">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}

                <div className="form-group mb-3">
                  <input
                    type="text"
                    value={name}
                    placeholder="Product Name"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <textarea
                    value={description}
                    placeholder="Product Description"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="number"
                    value={price}
                    placeholder="Product Price"
                    className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="number"
                    value={quantity}
                    placeholder="Quantity"
                    className="form-control"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <Select
                    bordered={false}
                    placeholder="Select Shipping"
                    size="large"
                    showSearch
                    className="form-select mb-3"
                    onChange={(value) => setShipping(value)}
                  >
                    <Option value="0">No</Option>
                    <Option value="1">Yes</Option>
                  </Select>
                </div>

                <div className="form-group mb-3">
                  <button className="btn btn-primary" type="submit">
                    CREATE PRODUCT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .create-product {
          background-color: #ffe6f2;
          padding: 40px;
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

        .form-container {
          background-color: #fff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .form-select {
          background-color: #ffd9e6;
          border: 1px solid #ff66b2;
          border-radius: 5px;
          padding: 10px;
          color: #ff66b2;
        }

        .upload-btn {
          width: 100%;
          text-align: center;
          font-size: 16px;
          padding: 12px;
          background-color: #ff66b2;
          color: white;
          border: 1px solid #ff66b2;
          border-radius: 5px;
        }

        .upload-btn:hover {
          background-color: #ff3385;
          cursor: pointer;
        }

        .form-control {
          border-radius: 5px;
          padding: 12px;
          border: 1px solid #ff66b2;
          margin-bottom: 15px;
        }

        .form-control:focus {
          outline: none;
          border-color: #ff3385;
        }

        button.btn {
          padding: 12px 30px;
          background-color: #ff66b2;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button.btn:hover {
          background-color: #ff3385;
        }

        button.btn:active {
          background-color: #e00069;
        }

        .text-center img {
          max-width: 100%;
          border-radius: 8px;
        }
      `}</style>
    </Layout>
  );
};

export default CreateProduct;
