import React from "react";
import { NavLink, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Badge } from "antd";
import { GiShoppingBag } from 'react-icons/gi';
import { useAuth } from "../../context/auth";
import { useCart } from "../../context/cart";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <style>
        {`
          .navbar {
            background: linear-gradient(to right, #ff61a6, #ff9a8b, #ff7d00);
            font-family: 'Comic Sans MS', cursive, sans-serif;
            border-bottom: 3px solid #ff61a6;
          }

          .navbar-brand {
            color: #fff !important;
            font-weight: bold;
            font-size: 24px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          }

          .nav-link {
            color: #fff !important;
            font-size: 18px;
            font-weight: bold;
            padding: 8px 12px;
            transition: background-color 0.3s ease, color 0.3s ease;
            border-radius: 5px;
            margin-left: 5px;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
          }

          .nav-link:hover, .dropdown-item:hover {
            background-color: #fff;
            color: #ff61a6 !important;
          }

          .dropdown-menu {
            background-color: #ffe6f0;
            border: 2px solid #ff99cc;
          }

          .dropdown-item {
            color: #333 !important;
            font-weight: bold;
          }

          .badge {
            background-color: #fff !important;
            color: #ff61a6;
            font-weight: bold;
            font-size: 14px;
            margin-left: 3px;
          }
        `}
      </style>

      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <GiShoppingBag /> FASHTOPIA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contactus" className="nav-link">CONTACT US</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/aboutus" className="nav-link">ABOUT US</NavLink>
              </li>

              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">REGISTER</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">LOGIN</NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    style={{ border: "none" }}
                  >
                    {auth?.user?.name}
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                        className="dropdown-item"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={handleLogout}
                        to="/login"
                        className="dropdown-item"
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
              )}

              <li className="nav-item">
                <Badge count={cart?.length} showZero>
                  <NavLink to="/cart" className="nav-link">CART</NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
