import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Main() {
    return (
        <>
            <section className='bgMain relative top-0'>
                <div className='maxW relative w-full h-full flex flex-col justify-center items-center'>

                    <p className='uppercase text-[10px] font-semibold tracking-wider text-center lg:text-sm'>Realce sua beleza com quem entende do assunto</p>
                    <h1 className='uppercase text-center text-4xl mt-4 lg:text-7xl lg:mt-6'>Sua beleza merece o melhor cuidado</h1>
                    <p className='text-center text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur similique suscipit quaerat dolorum velit facere fugiat aliquam ex corrupti!</p>
                    <div className='flex mt-4 lg:mt-6'>
                        <a className='bg-Yellow py-4 px-8 uppercase font-semibold tracking-wide' href="">Entre em contato</a>
                    </div>

                    <article className='absolute bottom-4 gap-4 flex lg:bottom-4 lg:flex-col lg:right-6'>
                        <div className='border border-gray-400 cursor-pointer p-2 transition-all duration-300 hover:border-pink-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-pink-500/25 group'>
                            <FaInstagram className='text-gray-200 text-lg group-hover:text-white transition-colors duration-300' />
                        </div>

                        <div className='border border-gray-400 cursor-pointer p-2 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25 group'>
                            <FaFacebook className='text-gray-200 text-lg group-hover:text-white transition-colors duration-300' />
                        </div>

                        <div className='border border-gray-400 cursor-pointer p-2 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/25 group'>
                            <FaWhatsapp className='text-gray-200 text-lg group-hover:text-white transition-colors duration-300' />
                        </div>
                    </article>


                </div>
            </section>
        </>
    );
}