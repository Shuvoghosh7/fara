import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './ClientReview.css'

import { Parallax, Pagination, Navigation } from "swiper";
import user from '../../Assets/user.jpg'
const ClientReview = () => {
    return (
        <div>
            <h1 className="client-title">Our Client Says</h1>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        "background-image":
                            "url(https://i.ibb.co/JmPXMWC/gettyimages-1169592197-612x612.jpg)",
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide className="text-center">
                    <div className="title" data-swiper-parallax="-300">
                        <span>"</span> The Service Was Amazine.I Never had to wait that long for my food <span>"</span>
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        <div className="user-img">
                            <img src={user} alt="" />
                        </div>
                        <h3>Jane Doe</h3>
                        <h5>SomeCompany LLC</h5>
                    </div>

                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <div className="title" data-swiper-parallax="-300">
                        <span>"</span> The Service Was Amazine.I Never had to wait that long for my food <span>"</span>
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        <div className="user-img">
                            <img src={user} alt="" />
                        </div>
                        <h3>Jane Doe</h3>
                        <h5>SomeCompany LLC</h5>
                    </div>

                </SwiperSlide>
                


            </Swiper>
        </div>
    );
};

export default ClientReview;