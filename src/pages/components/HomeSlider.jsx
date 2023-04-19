import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./Asset/styles.css";
import Logo from '../images/Stage_A_Dream_Logo_with_text.png'

// import required modules
import { Autoplay, EffectCreative } from "swiper";


export default function HomeSlider() {
    return (
        <>
            <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ["-120%", 0, -500],
                    },
                    next: {
                        shadow: true,
                        translate: ["120%", 0, -500],
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectCreative, Autoplay]}
                className="mySwiper2"
            >
                <SwiperSlide><div className="background-layer">
                    <figure className='logo-fig'>
                        <img src={Logo} alt="Stage A dream Logo" className='info-logo' />
                    </figure></div></SwiperSlide>
                <SwiperSlide><div className="background-layer">
                    <figure className='logo-fig'>
                        <img src={Logo} alt="Stage A dream Logo" className='info-logo' />
                    </figure></div></SwiperSlide>
                <SwiperSlide><div className="background-layer">
                    <figure className='logo-fig'>
                        <img src={Logo} alt="Stage A dream Logo" className='info-logo' />
                    </figure></div></SwiperSlide>
                <SwiperSlide><div className="background-layer">
                    <figure className='logo-fig'>
                        <img src={Logo} alt="Stage A dream Logo" className='info-logo' />
                    </figure></div></SwiperSlide>
                <SwiperSlide><div className="background-layer">
                    <figure className='logo-fig'>
                        <img src={Logo} alt="Stage A dream Logo" className='info-logo' />
                    </figure></div></SwiperSlide>
            </Swiper>
        </>
    );
}
