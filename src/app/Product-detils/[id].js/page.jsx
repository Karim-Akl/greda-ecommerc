"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import Main from "../../../components/main/main";
import productData from "../../../../public/data/db.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./product.css";

// Function to fetch the product data by ID
async function getData(id) {
  const product = productData.Products.find(
    (item) => item.id === parseInt(id, 10)
  );
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
}

const Products = ({ params }) => {
  const [obgdata, setObgData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effect hook to fetch product data when component mounts or params.id changes
  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getData(params.id); // Fetch data for the specific product
        setObgData(data); // Set product data
      } catch (error) {
        setError(error.message); // Handle errors and display a message
      } finally {
        setLoading(false); // Ensure loading ends
      }
    }
    fetchProduct();
  }, [params.id]);

  // Display loading state
  if (loading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  // Display error state if product not found
  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
      </div>
    );
  }

  // Render product details once loaded
  return (
    <div className="fff">
      <Header />
      <section className="flex products">
        <div
          className="top-prodect"
          style={{
            gap: "4rem",
            justifyContent: "space-between",
            width: "85%",
            margin: "auto",
            marginBlock: "15rem",
          }}
        >
          <div className="img-product" style={{ background: "#FFFFFF" }}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay, Thumbs]}
              navigation
              loop={true}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
            >
              <SwiperSlide>
                <img
                  src={obgdata.image}
                  alt="Product"
                  style={{ padding: "20px", width: "100%" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={obgdata.hoverImage}
                  alt="Product"
                  style={{ padding: "20px", width: "100%" }}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div
            className="prodect-right"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              width: "50%",
              margin: "auto",
              gap: "1rem",
              background: "#f6f6f6",
              padding: "20px",
            }}
          >
            <h4>{obgdata.name}</h4>
            <div
              className="flex cost"
              style={{ display: "flex", gap: "2rem", textAlign: "center" }}
            >
              <span>
                {obgdata.newPrice
                  ? (
                      parseFloat(obgdata.newPrice.replace(/[^0-9.-]+/g, "")) +
                      1550
                    ).toFixed(2) + " EGP"
                  : "N/A"}
              </span>
              <span>{obgdata.newPrice}</span>
            </div>
            <p>{obgdata.description1}</p>

            <div style={{ display: "flex", gap: "2rem", textAlign: "center" }}>
              <button
                style={{
                  background: "red",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "9rem",
                  height: "1.5rem",
                  color: "#fff",
                }}
              >
                اضافه الي السله
              </button>
              <button
                style={{
                  background: "green",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "9rem",
                  height: "1.5rem",
                  color: "#fff",
                }}
              >
                <a
                  href={`https://api.whatsapp.com/send?phone=+123455678910&text=Hi, I'm contacting you through Greda.ae I'd like to inquire about a car listed on your website`}
                >
                  الطلب عبر الواتساب
                </a>
              </button>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            gap: "2rem",
            flexDirection: "column",
          }}
        >
          <div className="details-product">
            <div className="span-gap">
              <h4>الوصف</h4>
            </div>
            <hr />
            <div className="span-gap">
              <p>{obgdata.description1}</p>
            </div>
            <hr />
            <div className="span-gap">
              <p>{obgdata.description2}</p>
            </div>
            <hr />
            <div className="span-gap">
              <p>{obgdata.description3}</p>
            </div>
            <hr />
          </div>

          <div className="details-product">
            <div className="span-gap">
              <h4>معلومات إضافية</h4>
            </div>
            <hr />
            <div className="span-gap">
              <span>علامة تجارية</span>
              <span>{obgdata.brand}</span>
            </div>
            <hr />
            <div className="span-gap">
              <span>اللون</span>
              <span>{obgdata.color}</span>
            </div>
            <hr />
            <div className="span-gap">
              <span>الكمية</span>
              <span>{obgdata.quantity}</span>
            </div>
            <hr />
          </div>
        </div>
      </section>
      <Main />
      <Footer />
    </div>
  );
};

export default Products;
