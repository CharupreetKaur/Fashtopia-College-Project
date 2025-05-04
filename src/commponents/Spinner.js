import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    if (count === 0) {
      navigate(`/${path}`, {
        state: location.pathname,
      });
    }
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <>
      <style>
        {`
          .spinner-container {
            background: linear-gradient(45deg, #ffc0cb, #ffb6c1);
            height: 100vh;
            font-family: 'Comic Sans MS', cursive, sans-serif;
            color: #d63384;
          }

          .spinner-container h1 {
            font-size: 24px;
            font-weight: bold;
            text-shadow: 2px 2px #ff69b4;
            margin-bottom: 20px;
          }

          .custom-spinner {
            width: 4rem;
            height: 4rem;
            border: 0.6em solid #f8c8dc;
            border-top: 0.6em solid #ff69b4;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div className="d-flex flex-column justify-content-center align-items-center spinner-container">
        <h1 className="text-center">Redirecting you in {count} second{count !== 1 && 's'}...</h1>
        <div className="custom-spinner" role="status"></div>
      </div>
    </>
  );
};

export default Spinner;
