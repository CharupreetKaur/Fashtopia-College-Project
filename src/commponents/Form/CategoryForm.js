import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <style>
        {`
          /* Retro form styling */
          .category-input {
            width: 100%;
            padding: 12px;
            font-size: 18px;
            font-family: 'Press Start 2P', cursive, sans-serif;
            border: 2px solid #ff66cc;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 0.8);
            color: #333;
            box-shadow: 0 0 10px rgba(255, 0, 150, 0.3);
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }

          .category-input:focus {
            border-color: #ff00cc;
            outline: none;
            box-shadow: 0 0 15px rgba(255, 0, 150, 0.7);
          }

          .category-btn {
            background: linear-gradient(45deg, #ff66cc, #ff3399);
            color: white;
            font-size: 18px;
            font-family: 'Press Start 2P', cursive, sans-serif;
            font-weight: bold;
            padding: 12px 20px;
            border: none;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(255, 0, 150, 0.5);
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .category-btn:hover {
            background: linear-gradient(45deg, #ff3399, #ff66cc);
            transform: scale(1.1);
          }

          .category-btn:active {
            box-shadow: 0 0 10px rgba(255, 0, 150, 0.7);
            transform: scale(1.05);
          }

          .mb-3 {
            margin-bottom: 20px;
            text-align: center;
          }
        `}
      </style>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control category-input"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className="btn category-btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
