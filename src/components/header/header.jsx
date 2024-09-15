"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./header.css";
import "../../../public/style.css";
import "../../app/globals.css";
import Link from "next/dist/client/link";
const Header = () => {
  const [active, setActive] = useState(false);
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.search.value;
    router.push(`/search-result?search=${searchQuery}`);
  };
  return (
    <div>
      <header>
        <div className="rigth">
          <div className="cols">
            <div className="col">
              <div className="text_img act">
                <i className="fa-solid fa-bars icon-paragraph-right  icon-menu" />
                <a href="##" style={{ marginRight: "30px" }}>
                  تصنيفات المنتجات
                </a>
              </div>
            </div>
            <div className="col">
              <div className="text_img">
                <img alt="" src="img/header_rigth_1.webp" />
                <a href="/product-all">شاشات </a>
              </div>
            </div>
            <div className="col">
              <div className="text_img">
                <img alt="" src="img/header_rigth_2.webp" />
                <a href="/product-all">الأجهزة المنزلية الكبيرة</a>
              </div>
            </div>
            <div className="col">
              <div className="text_img">
                <img alt="" src="img/header_rigth_3.webp" />
                <a href="/product-all">الأجهزة المنزلية الصغيرة</a>
              </div>
            </div>
            <div className="col">
              <div className="text_img">
                <img alt="" src="img/header_rigth_4.webp" />
                <a href="/product-all">أحواض</a>
              </div>
            </div>
            <div className="col">
              <div className="text_img">
                <img alt="" src="img/header_rigth_5.webp" />
                <a href="/product-all">أطقم بلت إن</a>
              </div>
            </div>
            <div className="col">
              <div className="text_img">
                <img alt="" src="img/header_rigth_5.webp" />
                <a href="/product-all">بلت إن</a>
              </div>
            </div>
            <div className="col">
              <div className="text_img">
                <img alt="" src="img/header_rigth_7.jpg" />
                <a href="/product-all"> العناية الشخصية</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container top-nav">
            <div className="menus">
              <button
                onClick={() => setActive(!active)}
                className="fa-solid fa-bars icon-paragraph-right  icon-menu"
              />
            </div>
            <Link className="logo" href="/">
              {" "}
              <img alt="" src="img/logo_v.png" />
            </Link>
            {/* <form className="search" onSubmit={handleSearch}>
            <input name="search" placeholder="Search" type="search" />
            <button className="icon-search" type="submit"/>
            </form> */}
            {/* <div className="cart_header">
              <div className="icon_cart">
                <i className="   icon-cart" />
                <span className="count_item">0</span>
              </div>
            </div> */}
          </div>

          <nav className="nav-right-class">
            <div className="links">
              <ul className={active ? "active" : ""}>
                <li>
                  <Link href="/">الرئيسية</Link>
                </li>
                <li>
                  <Link href="/product-all">المتجر</Link>
                </li>
                {/* <li>
                  <a href=""> تسوق بالعلامة التجارية</a>
                  <ul id="submenu">
                    <li>
                      <a href="">
                        <img alt="" src="img/banner_1.png" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img alt="" src="img/banner_2.png" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img alt="" src="img/banner_3.png" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img alt="" src="img/banner_4.png" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img alt="" src="img/banner_5.webp" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img alt="" src="img/banner_6.png" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img alt="" src="img/banner_7.png" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img alt="" src="img/banner_8.png" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img alt="" src="img/banner_9.png" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img alt="" src="img/banner_10.webp" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img alt="" src="img/banner_11.png" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img alt="" src="img/banner_12.png" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img alt="" src="img/banner_13.webp" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img alt="" src="img/banner_14.png" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img alt="" src="img/banner_15.png" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img alt="" src="img/banner_16.png" />
                      </a>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <Link href="/contact">تواصل معنا</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* <section className="bottom_icon">
        <div className="icons">
          <div className="col">
            <i className="fa-solid fa-shop icon-home icon-shopping" />
            <p>Shop </p>
          </div>
          <div className="col">
            <i className="fa-regular fa-heart icon-heart icon-cart" />
            <p>Wishlist</p>
          </div>
          <div className="col">
            <i className="icon-cart " />
            <p>Cart</p>
          </div>
          <div className="col">
            <i className=" icon-user " />
            <p>My account</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Header;
