import React, { useEffect, useState } from "react";
import Layout from "./../../commponets/Layouts/Layout";
import AdminMenu from "./../../commponets/Layouts/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../commponets/Form/CategoryForm";
import { Modal } from "antd";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/category/create-category", { name });
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in input form");
    }
  };

  // Get all Categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting categories");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Handle Category Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/v1/category/update-category/${selected._id}`, { name: updatedName });
      if (data?.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Category Deletion
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(`/api/v1/category/delete-category/${pId}`);
      if (data.success) {
        toast.success(`Category is deleted`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="container-fluid m-3 p-3 dashboard create-category">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="admin-panel-bg">
              <h1 className="text-center">Manage Category</h1>
              <div className="p-3 w-50">
                <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
              </div>
              <div className="w-75">
                <table className="table retro-table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories?.map((c) => (
                      <tr key={c._id}>
                        <td className="retro-text">{c.name}</td>
                        <td className="actions">
                          <button
                            className="btn btn-edit ms-2"
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(c.name);
                              setSelected(c);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-delete ms-2"
                            onClick={() => {
                              handleDelete(c._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>
                <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate} />
              </Modal>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .create-category {
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

        .admin-panel-bg {
          background-color: #fff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .retro-table {
          width: 100%;
          border-collapse: collapse;
        }

        .retro-table th,
        .retro-table td {
          padding: 10px;
          text-align: left;
          border: 1px solid #ff66b2;
        }

        .retro-table th {
          background-color: #ff66b2;
          color: white;
        }

        .retro-table td {
          background-color: #fff;
        }

        .retro-text {
          color: #ff66b2;
        }

        .actions {
          display: flex;
          gap: 10px;
        }

        .btn {
          padding: 8px 15px;
          border-radius: 5px;
          font-size: 14px;
          cursor: pointer;
        }

        .btn-edit {
          background-color: #ff66b2;
          color: white;
          border: none;
        }

        .btn-edit:hover {
          background-color: #ff3385;
        }

        .btn-delete {
          background-color: #ff4d94;
          color: white;
          border: none;
        }

        .btn-delete:hover {
          background-color: #ff1a6a;
        }

        .ant-modal {
          background-color: #ffe6f2;
          border-radius: 10px;
        }

        .form-control {
          border-radius: 5px;
          padding: 10px;
          border: 1px solid #ff66b2;
          margin-bottom: 15px;
        }

        .form-control:focus {
          outline: none;
          border-color: #ff3385;
        }

        .text-center img {
          max-width: 100%;
          border-radius: 8px;
        }
      `}</style>
    </Layout>
  );
};

export default CreateCategory;
