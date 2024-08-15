"use client";
import "./header.css";
import "../../../public/style.css";
import "../../app/globals.css";
import { useState }  from 'react'
import Link from "next/dist/client/link";
const Header = () => {
   const [active, setactivee] = useState(false)
  return (
    <div>
          <header>
            <div className="rigth">
              <div className="cols">
                <div className="col">
                  <div className="text_img act">
                    <i className="fa-solid fa-bars icon-paragraph-right  icon-menu" />
                    <a href="##"
                    style={{marginRight:"30px"}}>
                      تصنيفات المنتجات
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="text_img">
                    <img
                      alt=""
                      src="img/header_rigth_1.webp"
                    />
                    <a href="##">
                      شاشات{' '}
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="text_img">
                    <img
                      alt=""
                      src="img/header_rigth_2.webp"
                    />
                    <a href="##">
                      الأجهزة المنزلية الكبيرة
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="text_img">
                    <img
                      alt=""
                      src="img/header_rigth_3.webp"
                    />
                    <a href="##">
                      الأجهزة المنزلية الصغيرة
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="text_img">
                    <img
                      alt=""
                      src="img/header_rigth_4.webp"
                    />
                    <a href="##">
                      أحواض
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="text_img">
                    <img
                      alt=""
                      src="img/header_rigth_5.webp"
                    />
                    <a href="##">
                      أطقم بلت إن
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="text_img">
                    <img
                      alt=""
                      src="img/header_rigth_5.webp"
                    />
                    <a href="##">
                      بلت إن
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="text_img">
                    <img
                      alt=""
                      src="img/header_rigth_7.jpg"
                    />
                    <a href="##">
                      {' '}العناية الشخصية
                    </a>
                  </div>
                </div>
              </div>
            </div>

            
            <div>
  <div className="container top-nav">
    <div className="menus">
    <i onClick={()=>setactivee(!active)} className="fa-solid fa-bars icon-paragraph-right  icon-menu" />
    </div>
    <Link
      className="logo"
      href="/"
    >
      {' '}
      <img
        alt=""
        src="img/logo_v.png"
      />
    </Link>
    <form
      action=""
      className="search">
      <input
        placeholder="Search"
        type="search"
      />
      <i className="  icon-search" />
      </form>
    <div className="cart_header">
      <div className="icon_cart">
      <i className="   icon-cart" />
      <span className="count_item">
          {' '}0
        </span>
      </div>
    </div>
  </div>
  <nav>
    <div className="links">
      {/* <div className="loging">
      <i className="fa-solid fa-bars icon-paragraph-right  icon-menu" />
      <a href="">
          تصنيفات المنتجات
        </a>
      </div> */}
      <ul className={active ? 'active' : ''}>
        {/* <li className="active">
          <a href="">
            عروض الافتتاح
          </a>
        </li> */}
        <li>
          <Link href="/">
            الرئيسية
          </Link>
        </li>
        <li>
          <Link href="/product-category">
            المتجر
          </Link>
        </li>
        <li>
          <a href="">
            {' '}تسوق بالعلامة التجارية
          </a>
          <ul id="submenu">
            <li>
              <a href="">
                <img
                  alt=""
                  src="img/banner_1.png"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  alt=""
                  src="img/banner_2.png"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  alt=""
                  src="img/banner_3.png"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  alt=""
                  src="img/banner_4.png"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  alt=""
                  src="img/banner_5.webp"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  alt=""
                  src="img/banner_6.png"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  alt=""
                  src="img/banner_7.png"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  alt=""
                  src="img/banner_8.png"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  alt=""
                  src="img/banner_9.png"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  alt=""
                  src="img/banner_10.webp"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  alt=""
                  src="img/banner_11.png"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  alt=""
                  src="img/banner_12.png"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  alt=""
                  src="img/banner_13.webp"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  alt=""
                  src="img/banner_14.png"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  alt=""
                  src="img/banner_15.png"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  alt=""
                  src="img/banner_16.png"
                />
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">
            تواصل معنا
          </Link>
        </li>
      </ul>
    </div>
  </nav>
</div>

            
   
          </header>

          <section className="bottom_icon">
            <div className="icons">
              <div className="col">
                <i className="fa-solid fa-shop icon-home icon-shopping" />
                <p>
                  Shop{' '}
                </p>
              </div>
              <div className="col">
                <i className="fa-regular fa-heart icon-heart icon-cart" />
                <p>
                  Wishlist
                </p>
              </div>
              <div className="col">
                <i className="icon-cart " />
                <p>
                  Cart
                </p>
              </div>
              <div className="col">
                <i className=" icon-user " />
                <p>
                  My account
                </p>
              </div>
            </div>
          </section>
    </div>
  );
};

export default Header;
