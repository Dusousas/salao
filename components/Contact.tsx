import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { IoIosPin } from 'react-icons/io';

export default function Contact() {
    return (
        <>
            <section id='contact' className='py-20 bg-white'>
                <div className='maxW flex flex-col lg:flex-row gap-10 justify-center items-center'>
                    <article className='lg:w-[50%]'>
                        <p className='uppercase text-sm font-semibold tracking-wider text-Yellow'>Nossos contatos</p>
                        <h1 className='text-4xl mt-4 uppercase text-black font-medium'>Informações de contato</h1>
                        <p className='text-Gray mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolore veritatis voluptate soluta. Sapiente incidunt dignissimos ipsam nam officia. Odio dignissimos fugiat consectetur odit deleniti commodi consequatur, adipisci aspernatur modi!</p>
                        
                        <div className='mt-6 flex flex-col gap-4'>
                            <p className='flex items-center gap-4 uppercase text-black'><IoIosPin className='text-black text-4xl px-2' />Avenida das Nações unidas, 276 - Bela Vista. São Paulo - SP</p>
                            <p className='flex items-center text-lg gap-4  text-black'><FaPhone className='text-black text-4xl px-2' />11 1234 - 1234</p>
                        </div>

                        <div className='flex mt-6 gap-4'>
                            <div className='bg-OrangeP cursor-pointer p-2 transition-all duration-300 hover:border-pink-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-pink-500/25 group'>
                                <FaInstagram className='text-Yellow text-lg group-hover:text-black transition-colors duration-300' />
                            </div>

                            <div className='bg-OrangeP cursor-pointer p-2 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25 group'>
                                <FaFacebook className='text-Yellow text-lg group-hover:text-black transition-colors duration-300' />
                            </div>

                            <div className='bg-OrangeP cursor-pointer p-2 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/25 group'>
                                <FaWhatsapp className='text-Yellow text-lg group-hover:text-black transition-colors duration-300' />
                            </div>
                        </div>
                    </article>

                    <article className='lg:w-[50%]'>
                        <img src="/new-2.jpg" alt="" />
                    </article>
                </div>
            </section>
        </>
    );
}