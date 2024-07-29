import "./header.css";
import "../../../public/style.css";
import "../../app/globals.css";
import Link from "next/dist/client/link";
const Header = () => {
  return (

    <header className="flex">

      <div className="flex icons">

        <button className="icon-cart cart">
          <span className="cont1">0</span>
        </button>


        <button className="icon-heart-o">
          <span className="cont2">0</span>
        </button>

        <button className="icon-profile"></button>

      </div>

      <div className="slogo flex">

        <div
          className="search"
          style={{
            position: "relative",
            minWidth: "60rem",
            margin: "0 auto",
            direction: "rtl",
          }}
        >
          <input
            type="text"
            placeholder={"Search for Products "}
            style={{
              width: "100%",
              padding: "10px 40px 10px 10px",
              border: "1px solid #ccc",
              fontSize: "16px",
              opacity:"0.9",
              direction: "ltr",
              
            }}
          />
          <p
            className="icon-search"
            style={{
              position: "absolute",
              top: "50%",
              left: "-25px",
              transform: "translateY(-50%)",
              color: "#999",
            }}
          />
        </div>


      <div className="image">       
        <Link href="/"><img
        src="/madmon-logo.webp"
        alt="not found"
      /></Link></div>
      </div>




      <nav className="flex">
        <div className="flex mnue">
          <button className="icon-menu"></button>
          <button >
          تصنيفات المنتجات</button>
        </div>
          <ul className="flex">
          <li><a href="">عروض الافتتاح</a></li>
          <li><Link href="/" className="home">الرئيسية</Link></li>
          <li><a href="">المتجر</a></li>
          <li><a href="">تسوق بالعلامة التجارية</a></li>
          <li><Link href="/contact">تواصل معنا</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
