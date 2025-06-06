import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ isAtTop }: { isAtTop: boolean }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    return (
        <>
            {/* Navbar Desktop */}
            <nav className="hidden lg:block">
                <ul className={`flex gap-6 text-md tracking-widest uppercase transition-colors duration-300 ${isAtTop ? 'text-white' : 'text-black'}`}>
                    <a href="#home"><li>Início</li></a>
                    <a href="#about"><li>Sobre</li></a>
                    <a href="#services"><li>Seviços</li></a>
                    <a href="#contato"><li>Contato</li></a>
                </ul>
            </nav>

            {/* Navbar Mobile */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`text-3xl ${isAtTop ? 'text-white' : 'text-black'} focus:outline-none relative z-50`}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

                <nav
                    className={`fixed top-0 right-0 h-screen w-full bg-Gray shadow-md z-40 flex flex-col items-center justify-center transition-transform duration-300 ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <ul className="flex flex-col items-center gap-8 text-lg uppercase text-white">
                        <a href="#home" onClick={() => setIsOpen(false)}><li>Início</li></a>
                        <a href="#about" onClick={() => setIsOpen(false)}><li>Sobre</li></a>
                        <a href="#services" onClick={() => setIsOpen(false)}><li>seviços</li></a>
                        <a href="#contato" onClick={() => setIsOpen(false)}><li>Contato</li></a>
                    </ul>
                </nav>
            </div>
        </>
    );
}
