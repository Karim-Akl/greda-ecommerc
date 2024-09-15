"use client";
import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Link from "next/dist/client/link";
import { useEffect, useState } from "react";
import "./product-all.css"
import "../contact/contact.css"
const ProductAll = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/data/db.json") // Fetch from public folder
      .then((response) => response.json())
      .then((data) => setProducts(data.Products)) // Access Products key inside data
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
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
    {/* /////// */}
    <div>
      <div className="slide slide_sale">
        <div className="container">
          <div className="sale_sec mySwiper">
            <div className="top_slide">
              <h2>
                احدث عروض اطقم البلت ان
              </h2>
            </div>
            <div className="products swiper-wrapper">

                {products.map((product) => (
                   
                    <div key={product.id} className="product swiper-slide">
                      <div className="icons">
                        <span>
                          <i className="fa-solid fa-share icon-redo2 icon-cart " />
                        </span>
                        <span>
                          <i className="fa-solid fa-magnifying-glass icon-search" />
                        </span>
                      </div>
                      <span className="sale_present">10%</span>
                      <Link href={`/Product-detils/${product.id}`}>
                        <div className="img_product">
                          <img alt="" src={product.image} />
                          <img
                            alt=""
                            className="img_hover"
                            src={product.hoverImage}
                          />
                        </div>
                      </Link>
                      <h3 className="name_product">
                        <Link href={`/Product-detils/${product.id}`}>{product.name}</Link>
                      </h3>
                      <div className="price">
                        <p className="old_price">{product.oldPrice}</p>
                        <p>
                          <span>{product.newPrice}</span>
                        </p>
                      </div>
                      <div className="card">
                        <div className="button">
                          <div className="button-wrapper">
                            <div className="text">إضافة إلى السلة</div>
                            <span className="icon">
                              <svg
                                className="bi bi-cart2"
                                fill="currentColor"
                                height="16"
                                viewBox="0 0 16 16"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="whats">
                        <button>
                          الطلب عبر واتساب{" "}
                          <i className="fa-brands fa-whatsapp icon-whatsapp" />
                        </button>
                      </div>
                    </div>
                ))}

            </div>
          </div>
        </div>
      </div>
    </div>


      </section>
      <Footer/>
    </div>
  );
};

export default ProductAll;
