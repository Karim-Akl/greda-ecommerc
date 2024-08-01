import "./header.css";
import "../../../public/style.css";
import "../../app/globals.css";
import Link from "next/dist/client/link";
const Header = () => {
  return (

<header>
  <div className="rigth">
    <div className="cols">
      <div className="col">
        <div className="text_img act">
          <i className="fa-solid fa-bars icon-persona" />
          <a href="">تصنيفات المنتجات</a>
        </div>
      </div>
      <div className="col">
        <div className="text_img">
          <img src="img/header_rigth_1.webp" alt="" />
          <a href="">شاشات </a>
        </div>
      </div>
      <div className="col">
        <div className="text_img">
          <img src="img/header_rigth_2.webp" alt="" />
          <a href="">الأجهزة المنزلية الكبيرة</a>
        </div>
      </div>
      <div className="col">
        <div className="text_img">
          <img src="img/header_rigth_3.webp" alt="" />
          <a href="">الأجهزة المنزلية الصغيرة</a>
        </div>
      </div>
      <div className="col">
        <div className="text_img">
          <img src="img/header_rigth_4.webp" alt="" />
          <a href="">أحواض</a>
        </div>
      </div>
      <div className="col">
        <div className="text_img">
          <img src="img/header_rigth_5.webp" alt="" />
          <a href="">أطقم بلت إن</a>
        </div>
      </div>
      <div className="col">
        <div className="text_img">
          <img src="img/header_rigth_5.webp" alt="" />
          <a href="">بلت إن</a>
        </div>
      </div>
      <div className="col">
        <div className="text_img">
          <img src="img/header_rigth_7.jpg" alt="" />
          <a href=""> العناية الشخصية</a>
        </div>
      </div>
    </div>
  </div>
  {/* //////////////////////////////////// */}
  <div className="navpar">
    <div className="icon_logo">
      <div className="pars">
        <i id="nume" className="fa-solid fa-bars" />
      </div>
      <div className="logo">
        <img src="img/logo.webp" alt="" />
      </div>
      <div className="search">
        <form action="">
          <input type="text" placeholder="Search" />
          <i className="fa-solid fa-magnifying-glass" />
        </form>
      </div>
      <div className="icon">
        <div className="con">
          <i className="fa-regular fa-user" />
        </div>
        <div className="con">
          <i className="fa-regular fa-heart" />
          <p className="none">1</p>
        </div>
        <div className="con">
          <i
            style={{
              backgroundColor: "#f33419",
              color: "#fff",
              border: "none"
            }}
            className="fa-solid fa-cart-plus"
          />
          <p>0</p>
        </div>
      </div>
    </div>
    <div id="mex" className="nav">
      <div className="icon">
        <i className="fa-solid fa-bars" />
        <a href="">تصنيفات المنتجات</a>
      </div>
      <div>
        <nav>
          <ul id="mex">
            <li>
              <a href=""> عروض الافتتاح</a>
            </li>
            <li>
              <a href="">الرئيسية</a>
            </li>
            <li>
              <a href="">المتجر</a>
            </li>
            <li>
              <a href="">تسوق بالعلامة التجارية</a>
            </li>
            <li>
              <a href="">تواصل معنا</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>

  );
};

export default Header;
