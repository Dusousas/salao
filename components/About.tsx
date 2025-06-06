import React from 'react';

export default function About() {
    return (
        <>
            <section id='about' className='bgAbout py-30'>
                <div className='maxW w-full flex justify-end'>
                    <article className='lg:w-1/2'>
                        <p className='uppercase text-sm font-semibold tracking-wider text-Yellow text-center lg:text-left'>Sobre nós</p>
                        <h1 className='text-4xl mt-4 uppercase text-black font-medium text-center lg:text-left'>Seu salão aqui</h1>
                        <p className='text-Gray mt-2 text-center lg:text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolore veritatis voluptate soluta. Sapiente incidunt dignissimos ipsam nam officia. Odio dignissimos fugiat consectetur odit deleniti commodi consequatur, adipisci aspernatur modi!</p>
                        <p className='text-Gray mt-2 text-center lg:text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolore veritatis voluptate soluta. Sapiente incidunt dignissimos ipsam nam officia. Odio dignissimos fugiat consectetur odit deleniti commodi consequatur, adipisci aspernatur modi!</p>
                        <div className='flex justify-center mt-6 lg:justify-start'>
                            <a className='bg-Yellow py-4 px-8 uppercase font-semibold tracking-wide' href="">Saiba mais</a>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}