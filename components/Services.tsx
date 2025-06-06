import React, { useRef, useEffect, useState } from 'react';
import { FaAngleRight, FaCalculator } from 'react-icons/fa';
import { MdArrowRightAlt } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const servicesData = [
    { id: '01', title: 'Alongamento de Unhas', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis dolorum alias laborum. Amet quos, maiores sed non debitis accusamus.', bg: 'bgService1' },
    { id: '02', title: 'Hidratação Capilar Profunda', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis dolorum alias laborum. Amet quos, maiores sed non debitis accusamus.', bg: 'bgService1' },
    { id: '03', title: 'Progressiva (Alisamento Capilar)', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis dolorum alias laborum. Amet quos, maiores sed non debitis accusamus.', bg: 'bgService1' },
    { id: '04', title: 'Coloração ou Mechas', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis dolorum alias laborum. Amet quos, maiores sed non debitis accusamus.', bg: 'bgService1' },
    { id: '05', title: 'Botox Capilar', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis dolorum alias laborum. Amet quos, maiores sed non debitis accusamus.', bg: 'bgService1' },
];

export default function Services() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [navigation, setNavigation] = useState({ prevEl: null, nextEl: null });

    useEffect(() => {
        setNavigation({
            prevEl: prevRef.current,
            nextEl: nextRef.current
        });
    }, []);

    return (
        <section id='services' className='py-20 bg-white'>
            <div className='maxW'>
                <article className='lg:w-[50%]'>
                    <p className='uppercase text-sm font-semibold tracking-wider text-Yellow text-center lg:text-left'>Nossos Serviços</p>
                    <h1 className='text-4xl mt-4 uppercase text-black font-medium text-center lg:text-left'>Veja tudo o que podemos fazer por você</h1>
                    <p className='text-Gray mt-2 text-center lg:text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolore veritatis voluptate soluta. Sapiente incidunt dignissimos ipsam nam officia. Odio dignissimos fugiat consectetur odit deleniti commodi consequatur, adipisci aspernatur modi!</p>
                </article>

                <div className='mt-10'>
                    {/* SETAS */}
                    <div className='flex w-full justify-center gap-4 mb-4  lg:justify-end '>
                        <button ref={prevRef}>
                            <FaAngleRight className='rotate-180 text-Yellow text-4xl cursor-pointer' />
                        </button>
                        <button ref={nextRef}>
                            <FaAngleRight className='text-Yellow text-4xl cursor-pointer' />
                        </button>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 4000 }}
                        navigation={navigation}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                    >
                        {servicesData.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className={`relative border-l-3 border-Yellow ${service.bg} py-10 px-10 h-full overflow-hidden`}>
                                    {/* OVERLAY */}
                                    <div className='absolute inset-0 bg-black/50 z-0' />

                                    {/* CONTEÚDO */}
                                    <div className='relative z-10'>
                                        <div className='bg-Yellow h-25 w-25 flex justify-center items-center rounded-full'>
                                            <img src="/icons/nails.png" alt="" />
                                        </div>
                                        <p className='text-Yellow font-bold mt-10'>{service.id}</p>
                                        <h1 className='text-Yellow text-xl font-semibold mt-4'>{service.title}</h1>
                                        <p className='text-Gray mt-4'>{service.description}</p>
                                        <div className='mt-6'>
                                            <a className='text-white bg-Yellow justify-center py-3 cursor-pointer uppercase flex gap-2 items-center'>
                                                Marcar horário <MdArrowRightAlt className='text-lg' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}