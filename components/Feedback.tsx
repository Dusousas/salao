import React from 'react';
import { MdFormatQuote } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const feedbacks = [
    {
        name: 'Ana Laura',
        profession: 'Advogada',
        message: 'Excelente atendimento e resultado impecável! Voltarei com certeza.'
    },
    {
        name: 'Carlos Henrique',
        profession: 'Empresário',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type'
    },
    {
        name: 'Juliana Silva',
        profession: 'Estudante',
        message: 'Fiquei encantada com o cuidado e carinho que recebi. Superou minhas expectativas!'
    }
];

export default function Feedback() {
    return (
        <section className='bg-[#141414] py-20'>
            <div className='maxW'>
                <article className='flex flex-col justify-center items-center'>
                    <MdFormatQuote className='text-5xl text-Yellow' />
                    <h1 className='mt-4 uppercase text-white font-medium text-center text-3xl tracking-widest lg:text-5xl'>Depoimentos</h1>

                    <div className='mt-10 w-full max-w-3xl'>
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000 }}
                            spaceBetween={30}
                            slidesPerView={1}
                            className='custom'>
                            {feedbacks.map((item, index) => (
                                <SwiperSlide key={index} className=''>
                                    <div className='text-center px-4'>
                                        <p className='text-white text-base md:text-lg'>{item.message}</p>
                                        <h1 className='text-Yellow mt-6 uppercase text-lg font-semibold'>{item.name}</h1>
                                        <p className='text-Gray text-sm'>{item.profession}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </article>
            </div>
        </section>
    );
}
