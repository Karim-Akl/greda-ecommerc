import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Main from "../main/main";
import "./product.css";

const Products = () => {
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
            <img src="/img/prodect-16.jpeg" alt="not found" style={{padding:"20px"}}/>
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
            <h4>
              أوشن ديب فريزر أفقي 490 لتر دي فروست يعمل بكفاءة النوفروست سيلف NJ
              65 TLLS A+ WFS
            </h4>

            <div
              className="flex cost"
              style={{ display: "flex", gap: "2rem", textAlign: "center" }}
            >
              <span>39.129 EGP </span>
              <span>35.999 EGP</span>
            </div>

            <p>- فريزر 524 لتر</p>
            <p>- صافى الحجم 490 لتر</p>
            <p>- بمفتاح لوك</p>
            <p>- لون سيلفر</p>
            <p>- يعمل بتكنولوجيا WFS ( يعمل بكفاءة النوفروست)</p>
            <p>- جوان مضاد للبكتيريا</p>
            <p>- الابعاد 176*71*88 سم</p>

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
                اضافه الي السله{" "}
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
                الطلب عبر الواتساب
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
      <Main/>
      <Footer />
    </div>
  );
};
export default Products;
