"use client";
import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Main from "../main/main";
import "./product-category.css"
import "../contact/contact.css"
const ProductCategory = () => {
  return (
    <div>
      <Header/>
      <section>
      <div className="bg">
        <div className="img-rols">
          <img src="/rols.webp" alt="not found" />
        </div>
        <div className="text-rols">
          <h3>المتجر </h3>
          <span>
            {" "}
            <a href="/" className="home-hover">
              {" "}
              Home
            </a>{" "}
            /  المتجر{" "}
          </span>
        </div>
      </div>
      <Main/>
      <Main/>
      <Main/>
      <Main/>
      </section>
      <Footer/>
    </div>
  );
};

export default ProductCategory;
