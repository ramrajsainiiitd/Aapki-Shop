import React, { useContext, useState } from "react";
import "../Navbar/styles.css";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import { MyContext } from "../../Context/Context";

export default function Navbar() {
  const { Search, setSearch } = useContext(MyContext);
  const { CartItem, setCartItem } = useContext(MyContext);

  const navigate = useNavigate();

  function handleCart() {
    navigate("/cart");
  }

  function handleSearch() {
    console.log("ok"); // need to create some logic to filter the data.
  }

  function handleLoginSignUp() {
    navigate("/login-signup");
  }
  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid ">
          <div>
            <Link
              to="/"
              className="logoContainer navbar-brand border rounded px-2"
            >
              Aapki Shop
            </Link>
            <Link to="about-us" className="navbar-brand">
              About Us
            </Link>
            <Link to="contact-us" className="navbar-brand">
              Contact Us
            </Link>
          </div>
          <form
            className="d-flex justify-content-center item-align-center"
            role="search"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              id="searchbar"
              className="btn btn-outline-success"
              type="submit"
              onClick={handleSearch}
            >
              🔍
            </button>
          </form>
          <div className="d-flex">
            <div>
              <button
                id="login-signup-btn"
                className="btn btn-outline-success mx-2"
                onClick={handleLoginSignUp}
              >
                Login/SignUp
              </button>
            </div>
            <button
              id="cart"
              className="btn btn-outline-success"
              onClick={handleCart}
            >
              🛒 Cart {CartItem.length>0&&CartItem.length}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
