import React, { useState, useEffect } from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsAtTop(currentScrollY <= 50);
            if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <header className={`py-4 fixed z-20 w-full transition-transform duration-300 ${isAtTop ? 'bg-transparent' : 'bg-white'} ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className='maxW flex justify-between items-center'>
                    <a className={`uppercase text-2xl font-Vast ${isAtTop ? 'text-white' : 'text-black'}`} href="">
                        Sua<span className='font-bold text-Yellow'>Logo</span>
                    </a>
                    <Navbar isAtTop={isAtTop} />

                </div>
            </header>
        </>
    );
}