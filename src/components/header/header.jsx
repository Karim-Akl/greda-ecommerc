import "./header.css";
import "../../../public/style.css";
import "../../app/globals.css";

import Link from "next/dist/client/link";
const Header = () => {
  return (
    <div>
          <header>
            <div className="rigth">
              <div className="cols">
                <div className="col">
                  <div className="text_img act">
                    <i className="fa-solid fa-bars icon-paragraph-right" />
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
            <div className="navpar">
              <div className="icon_logo">
                <div className="pars">
                  <i
                    className="fa-solid fa-bars icon-paragraph-right"
                    id="nume"
                  />
                </div>
                <div className="logo">
                  <a href="/">
                  <img
                    alt=""
                    src="img/logo.webp"
                  />
                  </a>

                </div>
                <div className="search">
                  <form action="">
                    <input
                      placeholder="Search"
                      type="text"
                    />
                    <i className="fa-solid fa-magnifying-glass icon-search" />
                  </form>
                </div>
                <div className="icon">
                  <div className="con">
                    {/* <i className="fa-regular fa-user icon-user" /> */}
                  </div>
                  <div className="con">
                    <i className="fa-regular fa-heart icon-heart-o " />
                    <p className="none">
                      1
                    </p>
                  </div>
                  <div className="con">
                    <i
                      className="fa-solid fa-cart-plus icon-cart"
                      style={{
                        backgroundColor: '#f33419',
                        border: 'none',
                        color: '#fff'
                      }}
                    />
                    <p>
                      0
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="nav"
                id="mex"
              >
                <a className="icon">
                  <i className="fa-solid fa-bars icon-paragraph-right icon-menu" />
                  <a href="##" 
                  >
                    تصنيفات المنتجات
                  </a>
                </a>
                <div>
                  <nav>

                    <ul id="mex">
                      <li>
                        <a href="##">
                          {' '}عروض الافتتاح
                        </a>
                      </li>
                      <li>
                        <a href="##">
                          الرئيسية
                        </a>
                      </li>
                      <li>
                        <a href="##">
                          المتجر
                        </a>
                      </li>
                      <li>
                        <a href="##">
                          تسوق بالعلامة التجارية
                        </a>
                        <ul id="submenu">
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_1.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_2.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_3.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_4.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_5.webp"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_6.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_7.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_8.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_9.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_10.webp"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_11.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_12.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_13.webp"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_14.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_15.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
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
                  </nav>
                </div>
              </div>
            </div>
            <script
              dangerouslySetInnerHTML={{
                __html: '          let btnMenu = document.getElementById(\'nume\');                let mex = document.getElementById(\'mex\');                        btnMenu.onclick = (event) => {                    event.stopPropagation(); // لمنع تفعيل الحدث في العناصر الأب                    btnMenu.classList.toggle(\'fa-times\');                    mex.classList.toggle(\'active\');                                    }                        document.onclick = () => {                    btnMenu.classList.remove(\'fa-times\');                    mex.classList.remove(\'active\');                }    '
              }}
             />
          </header>

          <section className="bottom_icon">
            <div className="icons">
              <div className="col">
                <i className="fa-solid fa-shop icon-home icon-male" />
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
                <i className="fa-solid fa-cart-plus icon-cart " />
                <p>
                  Cart
                </p>
              </div>
              <div className="col">
                <i className="fa-regular fa-user icon-user" />
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
