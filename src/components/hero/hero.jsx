"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./hero.css";

// Define your slide data
const slides = [
  { src: "/img/banner_1.png", alt: "Banner 1" },
  { src: "/img/banner_2.png", alt: "Banner 2" },
  { src: "/img/banner_3.png", alt: "Banner 3" },
  { src: "/img/banner_4.png", alt: "Banner 4" },
  { src: "/img/banner_17.png", alt: "Banner 5" },
  { src: "/img/banner_6.png", alt: "Banner 6" },
  { src: "/img/banner_7.png", alt: "Banner 7" },
  { src: "/img/banner_8.png", alt: "Banner 8" },
  { src: "/img/banner_9.png", alt: "Banner 9" },
  { src: "/img/banner_15.png", alt: "Banner 10" },
  { src: "/img/banner_11.png", alt: "Banner 11" },
  { src: "/img/banner_16.png", alt: "Banner 12" },
];

const Main = () => {
  return (
    <div>
      <section className="home_img">
        <div className="container">
          <div className="cols">
            <div className="col">
              <Swiper
                style={{ height: "100%", width: "100%" }}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="https://madmonegypt.com/wp-content/uploads/2024/03/Special-Food-Menu-Facebook-Post-18.webp" className="img-slider-class" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://madmonegypt.com/wp-content/uploads/2024/03/7000.webp" className="img-slider-class" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col">
              <div className="img_cols">
                <div className="imges">
                  <div className="img">
                    <div className="text">
                      <h2>الأجهزة المنزلية</h2>
                      <button className="btn">اطلب الآن</button>
                    </div>
                  </div>
                </div>
                <div className="tow_col">
                  <div className="imges">
                    <div className="img">
                      <div className="text">
                        <h2>الأجهزة المنزلية</h2>
                        <button className="btn">اطلب الآن</button>
                      </div>
                    </div>
                  </div>
                  <div className="imges img_2">
                    <div className="img">
                      <div className="text">
                        <h2>الأجهزة المنزلية</h2>
                        <button className="btn">اطلب الآن</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banner">
        <div className="slide slide_sale">
          <div className="container">
            <div className="sale_sec mySwiper">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={6}
                navigation
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1440: {
                    slidesPerView: 6,
                    spaceBetween: 50,
                  },
                }}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <img src={slide.src} alt={slide.alt} className="img-slider-class" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>




      <section className="imges">
            <div className="container">
              <div className="cols">
                <div className="col">
                  <div className="img img_1">
                    <div className="text">
                      <button>
                        غسالات
                      </button>
                      <h3>
                        خصومات الغسالات
                      </h3>
                      <a href="##">
                        المنتجات
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="img img_2">
                    <div className="text">
                      <button>
                        شاشات
                      </button>
                      <h3>
                        خصومات الشاشات
                      </h3>
                      <a href="##">
                        المنتجات
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="img img_3">
                    <div className="text">
                      <button>
                        ثلاجات
                      </button>
                      <h3>
                        اقوي خصومات الثلاجات
                      </h3>
                      <a href="##">
                        المنتجات
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="img img_4">
                    <div className="text">
                      <button>
                        غسالات الاطباق
                      </button>
                      <h3>
                        احدث غسالات الاطباق
                      </h3>
                      <a href="##">
                        المنتجات
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="img img_5">
                    <div className="text">
                      <button>
                        بوتجازات
                      </button>
                      <h3>
                        احدث البوتجازات
                      </h3>
                      <a href="##">
                        المنتجات
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="img img_6">
                    <div className="text">
                      <button>
                        تكييفات
                      </button>
                      <h3>
                        اقوي عروض التكييفات
                      </h3>
                      <a href="##">
                        المنتجات
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  );
};

export default Main;
