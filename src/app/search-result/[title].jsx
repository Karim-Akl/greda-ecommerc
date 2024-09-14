'use client';
import React, { useState, useEffect } from "react";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import Main from "../../../components/main/main";
import productData from "../../../../public/data/db.json";

async function getData(search) {
  const product = productData.Products.find(
    (item) => item.title.toLowerCase() === title.toLowerCase()
  );
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
}
const Products = ({ params }) => {
  const [obgdata, setObgData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(params);
    async function fetchProduct() {
      try {
        const data = await getData(params.title); // Fetch by product name
        setObgData(data);  
        console.log(productData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [params.title]);

  return (
    <div className="fff">
      <Header />
      <section className="flex products">
      <h1>Search Results for {title}</h1>
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
            <img src={obgdata.image} alt={obgdata.title} style={{ padding: "20px" }} />
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
            <h4>{obgdata.title}</h4>

            <div
              className="flex cost"
              style={{ display: "flex", gap: "2rem", textAlign: "center" }}
            >
              <span>{obgdata.newPrice}</span>
              <span>{obgdata.oldPrice}</span>
            </div>
            <p>{obgdata.description}</p>

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
                <a href={`https://api.whatsapp.com/send?phone=+123455678910&text=Hi, I'm contacting you through Greda.ae I'd like to inquire about a car listed on your website`}>
                  الطلب عبر الواتساب
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="details-product">
          <div className="span-gap">
            <h4>معلومات إضافية</h4>
          </div>
          <hr />
          <div className="span-gap">
            <span>علامة تجارية</span>
            <span>اوشن</span>
          </div>
          <hr />
          <div className="span-gap">
            <span>اللون</span>
            <span>فضى</span>
          </div>
          <hr />
          <div className="span-gap">
            <span>نوع الفريزر</span>
            <span>فريزر افقي</span>
          </div>
          <hr />
        </div>
      </section>
      <Main />
      <Footer />
    </div>
  );
};

export default Products;
