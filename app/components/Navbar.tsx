"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/images/logo-name-drbruno.svg'
import { HiBars3 } from 'react-icons/hi2';
import { GrClose } from 'react-icons/gr'
import { BiChevronRight } from 'react-icons/bi'



const navigationMenu = [
    {
        href: '#home',
        label: "Inicio",
    },  
    {
        href: '#about',
        label: "Sobre Mim",
    },
    {
        href: '#services',
        label: "Consultas",
    },
    {
        href: '/allposts',
        label: "Blog",
    },
    {
        href: '#contact',
        label: "Contato",
    },
]


export default function Navbar(){

    const [navOpen, setNavOpen ] = useState(false);
    const [dimensions, setDimensions] = useState({
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
    });
    
    const mobileMenuHandler = () => {
        setNavOpen(!navOpen)
    }

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });

            if( dimensions.width > 768 && navOpen) {
                setNavOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);

        return() => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (

        <>
         <header className="py-7">
            <div className="container px-4 mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <Link href="/">
                            <Image src={logo} width={180} height={120} alt='Logo Dr Bruno Ferreira'/>
                        </Link>
                    </div>

                    {/* Navigation Menu */}
                    <div className='hidden lg:block text-center '>
                        <ul className="flex space-x-7 ">
                            {navigationMenu.map((item, idx)=> (
                                <li className='group' key={item.label}>
                                    <Link className='group-hover:text-secondary' href={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <Link 
                        target='blank'
                        href="https://www.doctoralia.com.br/bruno-ferreira-4/urologista-cirurgiao-geral/fortaleza?utm_source=website&utm_medium=website&utm_campaign=website#highlight-calendar-117681" className='px-5 py-4 bg-primary text-white rounded-lg hidden lg:inline-block'>
                            Agendar Consulta
                        </Link>

                        <button className='block lg:hidden' onClick={mobileMenuHandler}>
                            <HiBars3 className='text-3xl' />
                        </button>
                    </div>
                </div>
            </div>
         </header>

         {/* for Mobile/Tablet Devices Nav Menu*/}

         <div className={ navOpen ? "py-0 block fixed w-screen z-[9999]" : "py-0 hidden fixed w-screen z-[9999]"}>
            <div className='h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50' onClick={mobileMenuHandler}>

            </div>


            <div className="bg-white w-[300px] top-0 right-0 z-[9999] h-screen fixed">
                <div className="h-14 px-10 border-b flex items-center" onClick={mobileMenuHandler}>
                    <button className='flex items-center space-x-3'>
                        <GrClose/>
                        <span>Fechar</span>
                    </button>
                </div>

                <div className='h-full py-3 px-10 overflow-y-scroll scroll-smooth'>
                    <ul className='block mb-7'>
                        {navigationMenu.map((item, idx)=> (
                            <li key={item.label}>
                                <Link href={item.href} className='group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary'>
                                    <span>{item.label}</span>
                                    <span className="left-2 relative duration-300 transition-all eaase-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                                        <BiChevronRight />
                                    </span>
                                    
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
         </div>
        </>
    )
}