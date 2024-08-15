"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    image: "img/home_2.jpg",
    hoverImage: "img/home_3.jpg",
    name: "طقم بيورتي + PIATTA 60 cm",
    oldPrice: "EGP 240",
    newPrice: "220 EGP",
  },
  {
    id: 1,
    image: "img/home_2.jpg",
    hoverImage: "img/home_3.jpg",
    name: "طقم بيورتي + PIATTA 60 cm",
    oldPrice: "EGP 240",
    newPrice: "220 EGP",
  },
  {
    id: 1,
    image: "img/home_2.jpg",
    hoverImage: "img/home_3.jpg",
    name: "طقم بيورتي + PIATTA 60 cm",
    oldPrice: "EGP 240",
    newPrice: "220 EGP",
  },
  {
    id: 1,
    image: "img/home_2.jpg",
    hoverImage: "img/home_3.jpg",
    name: "طقم بيورتي + PIATTA 60 cm",
    oldPrice: "EGP 240",
    newPrice: "220 EGP",
  },
  {
    id: 1,
    image: "img/home_2.jpg",
    hoverImage: "img/home_3.jpg",
    name: "طقم بيورتي + PIATTA 60 cm",
    oldPrice: "EGP 240",
    newPrice: "220 EGP",
  },
  {
    id: 1,
    image: "img/home_2.jpg",
    hoverImage: "img/home_3.jpg",
    name: "طقم بيورتي + PIATTA 60 cm",
    oldPrice: "EGP 240",
    newPrice: "220 EGP",
  },
  {
    id: 1,
    image: "img/home_2.jpg",
    hoverImage: "img/home_3.jpg",
    name: "طقم بيورتي + PIATTA 60 cm",
    oldPrice: "EGP 240",
    newPrice: "220 EGP",
  },
  {
    id: 1,
    image: "img/home_2.jpg",
    hoverImage: "img/home_3.jpg",
    name: "طقم بيورتي + PIATTA 60 cm",
    oldPrice: "EGP 240",
    newPrice: "220 EGP",
  },
  // يمكنك إضافة المزيد من المنتجات هنا بنفس الشكل
];

const Main = () => {
  return (
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
              <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="product swiper-slide">
                      <div className="icons">
                        <span>
                          <i className="fa-solid fa-share icon-redo2 icon-cart " />
                        </span>
                        <span>
                          <i className="fa-solid fa-magnifying-glass icon-search" />
                        </span>
                        <span>
                          <i className="fa-regular fa-heart icon-heart icon-cart" />
                        </span>
                      </div>
                      <span className="sale_present">
                        10%
                      </span>
                      <div className="img_product">
                        <img
                          alt=""
                          src={product.image}
                        />
                        <img
                          alt=""
                          className="img_hover"
                          src={product.hoverImage}
                        />
                      </div>
                      <h3 className="name_product">
                        <a href="##">
                          {product.name}
                        </a>
                      </h3>
                      <div className="price">
                        <p className="old_price">
                          {product.oldPrice}
                        </p>
                        <p>
                          <span>
                            {product.newPrice}
                          </span>
                        </p>
                      </div>
                      <div className="card">
                        <div className="button">
                          <div className="button-wrapper">
                            <div className="text">
                              إضافة إلى السلة
                            </div>
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
                          الطلب عبر واتساب{' '}
                          <i className="fa-brands fa-whatsapp icon-whatsapp" />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
