import React from 'react'
import { Data } from "./Data"
import "./products.css"
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const Products = () => {
  return (
    <section className="products container section" id="products">
        <div className="grey__area">
                <h2 className="section__title">Products</h2>
            <h1 className="products__title">Featured Products</h1>
        </div>
        <div id="spacer"></div>
        <div className="clear__area">
            <Swiper className="products__container"
                    loop={true}
                    grabCursor={true}
                    spaceBetween={10}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },

                    }}
                    modules={[Pagination]}
                >
                {Data.map(({id, image, title, location})=> {
                    return (
                        <SwiperSlide className="product__card" key={id}>
                            <img src={image} className="product__img" alt="" />
                            
                            <h3 className="product__name">{title}</h3>
                            <p className="product__location">{location}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
        <div id="spacer"></div>
    </section>
  )
}

export default Products