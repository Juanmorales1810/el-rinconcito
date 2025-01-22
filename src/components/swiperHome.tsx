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
        {
            id: 1,
            webp: '/img/hero/Fotos_Oficiales-1.avif',
            small: '/img/hero/Fotos_Oficiales-1.avif',
            title: 'Piscina amplia y cómoda',
            description: 'Ven y disfruta de nuestra piscina, diseñada para que puedas disfrutar de un momento agradable y relajante.'
        },
        {
            id: 2,
            webp: '/img/hero/Fotos_Oficiales-30.avif',
            small: '/img/hero/Fotos_Oficiales-30.avif',
            title: 'Disfruta de un momento con tu familia',
            description: 'Tenemos todo lo que necesitas para disfrutar de un momento en familia.'
        },
        {
            id: 3,
            webp: '/img/hero/Fotos_Oficiales-58.avif',
            small: '/img/hero/Fotos_Oficiales-58.avif',
            title: 'Distintas actividades para ti',
            description: 'Contamos con distintas actividades para que puedas disfrutar de un momento agradable.'
        },
        {
            id: 4,
            webp: '/img/hero/Fotos_Oficiales-85.avif',
            small: '/img/hero/Fotos_Oficiales-85.avif',
            title: 'Disfruta de un momento de paz',
            description: 'Ven y disfruta de un momento de paz y tranquilidad en nuestro espacio.'
        },
        {
            id: 5,
            webp: '/img/hero/Fotos_Oficiales-138.avif',
            small: '/img/hero/Fotos_Oficiales-138.avif',
            title: 'Relaja tu mente y cuerpo',
            description: 'Contamos con un espacio diseñado para que puedas relajarte y disfrutar de un momento de paz y tranquilidad. Ven y conócenos.'
        },
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
                        <div className='relative'>
                            <picture>
                                <source srcSet={image.webp} type="image/avif" media="(width >= 800px)" />
                                <source srcSet={image.small} type="image/avif" media="(width <= 800px)" />
                                <img
                                    className='max-h-[600px] w-full rounded-md object-cover lg:max-h-[800px]'
                                    src={image.webp}
                                    alt={`Imagen ${image.id}`}
                                />
                            </picture>
                            <div className='absolute top-0 left-0 p-8 w-full h-full bg-black bg-opacity-70 flex flex-col items-end justify-end [mask-image:radial-gradient(ellipse_120%_100%_at_10%_160%,#000_90%,transparent_110%)]'>
                            </div>
                            <div className='absolute top-0 left-0 p-8 w-full h-full flex flex-col items-start justify-end'>
                                <p className='text-white text-lg font-bold md:text-2xl'>
                                    {image.title}
                                </p>
                                <p className='text-white text-xs md:text-base'>
                                    {image.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}