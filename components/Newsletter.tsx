import React from 'react';

export default function Newsletter() {
    return (
        <>
            <section className='py-30 bgNew'>
                <div className='maxW flex flex-col gap-30 justify-center lg:flex-row'>
                    <article className='lg:w-[40%]'>
                        <h1 className='uppercase text-3xl text-center text-white lg:text-left'>Newsletter</h1>
                        <p className='mt-4 text-center text-white lg:text-left'>Sed ut perspiciatis unde omnis iste natus error sit volupt atem accu santium doloremque laudantium, totam remap.</p>
                        <input className='bg-white outline-none px-4 text-black py-3 w-full mt-6' placeholder='Seu nome*' type="text" />
                        <input className='bg-white outline-none px-4 text-black py-3 w-full mt-4' placeholder='Seu Email*' type="text" />
                        <div className='flex justify-center mt-6 lg:justify-start'>
                            <a className='bg-Yellow py-4 px-8 uppercase font-semibold tracking-wide' href="">Inscrever-se</a>
                        </div>
                    </article>

                    <article className='hidden lg:block lg:w-[40%]'>
                        <img src="/new-2.jpg" alt="" />
                    </article>
                </div>
            </section>
        </>
    );
}