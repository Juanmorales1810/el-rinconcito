"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import '@/styles/globals.css';

// import required modules
import { EffectCreative, Autoplay } from 'swiper/modules';

export default function SwiperHome() {
    const Images = [
        { id: 1, webp: 'https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620_1280.jpg', small: 'https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620_1280.jpg' },
        { id: 2, webp: 'https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620_1280.jpg', small: 'https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620_1280.jpg' },
        { id: 3, webp: 'https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620_1280.jpg', small: 'https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620_1280.jpg' },
    ]
    return (
        <>
            <Swiper
                grabCursor={false}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ["0%", 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCreative, Autoplay]}
                className="home-swiper"
            >

                {Images.map((image) => (
                    <SwiperSlide key={image.id} className="otro-swiper-slide">
                        <picture>
                            <source srcSet={image.webp} type="image/avif" media="(width >= 800px)" />
                            <source srcSet={image.small} type="image/avif" media="(width <= 800px)" />
                            <img
                                className='max-h-[600px] w-full rounded-md object-cover lg:max-h-[800px]'
                                src={image.webp}
                                alt={`Imagen ${image.id}`}
                            />
                        </picture>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}