'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiChevronRight, BiLogoYoutube } from 'react-icons/bi'
import { HiLocationMarker } from 'react-icons/hi'
import { AiFillInstagram } from 'react-icons/ai'
import { HiPhone, HiMiniGlobeAmericas } from 'react-icons/hi2'


const footerContent = {
    about: {
        logo: "/images/logo-horizontal.png",
        description: "Confiança e credibilidade no tratamento. Previna-se! Em nosso site, você encontra informações sobre pré e pós operatório, relatos de pacientes, orientações para cirurgias e marcação de consultas.",
        cta: {
            href: "#about",
            label: "Saiba mais"
        },
    },
    footerLinks: [
        {
            heading: "Navege pelo site",
            links: [
                {
                    href: "#home",
                    label: "Inicio"
                },
                {
                    href: "#about",
                    label: "Sobre Mim"
                },
                {
                    href: "#services",
                    label: "Consultas"
                },
                {
                    href: "#testimonials",
                    label: "Depoimentos"
                }
            ],
        },
        {
            heading: "—",
            links: [
                {
                    href: "#posts-recents",
                    label: "Blog"
                },
                {
                    href: "#contact",
                    label: "Contato"
                },
                {
                    href: "#_",
                    label: "Política de Privacidade"
                },
            ],
        },
    ],
    contact: {
        heading: "Contato",
        description: "Entre em contato via whatsapp ou e-mail e navegue pelas minhas redes sociais: Youtube e Instagram. Lá você encontra diversos conteúdos e atendimento personalizado.",
        address: {
            instagram: "@drbrunourologista",
            phone1: "+55 85 98113-7575",
            youtube: "youtube.com/@urologistabrunoferreira",
            website: "www.drbrunoferreira.com.br"
        }
    },
    copyright: {
        labelOne: "© 2023 Dr. Bruno Ferreira. Todos os direitos reservados.",
    }
}

const Footer = () => {
  return (
    <footer role='contentinfo' className='py-10 mt-10 bg-white'>
        <div className='container px-4 mx-auto'>
            <div className='block lg:flex gap-20 pb-10'>
                <div className='w-full lg:w-4/12 mb-10 lg:mb-0'>
                    <Link href="/" className='mb-4 inline-block'>
                        <Image src={footerContent.about.logo} width={200} height={100} alt='Rodapé Logo Dr Bruno Ferreira'/>
                    </Link>
                    <p className='leading-relaxed mb-7'>
                        {footerContent.about.description}
                    </p>
                    <p>
                        <Link href={footerContent.about.cta.href}
                        className='flex space-x-2 outline-none items-center font-semibold text-primary group'>
                            <span>{footerContent.about.cta.label}</span>
                            <span className='w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center
                                duration-300 transition-all ease-in-out group-hover:bg-secondary'>
                                <BiChevronRight className='text-lg'/>
                            </span>
                        </Link>
                    </p>
                </div>

                <div className="w-ful lg:w-4/12 mb-10 lg:mb-0">
                    <div className='grid grid-cols-2 gap-10'>
                        {footerContent.footerLinks.map((footerLink, idx) => (
                            <div key={idx}>
                                <h3 className='font-semibold text-heading mb-5'>
                                    {footerLink.heading}
                                </h3>
                                <ul className='p-0 m-0'>
                                    {footerLink.links.map((link, idx) => (
                                        <li key={link.label} className='mb-6'>
                                            <Link href={link.href}
                                            className='group-flex items-center flex duration-300 transition-all ease-in-out hover:text-primary'
                                            >
                                                <span>{link.label}</span>
                                                <span className='left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3'>
                                                    <BiChevronRight className='text-xl'/>
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-4/12">
                    <h3 className='font-semibold text-heading mb-5'>
                        {footerContent.contact.heading}
                    </h3>
                    <p className='leading-relaxed mb-7'>
                        {footerContent.contact.description}
                    </p>
                    <ul className=''>
                        <Link href='https://www.instagram.com/drbrunourologista/
                        ' target='blank'>
                            <li className='flex hover:text-secondarynm items-start space-x-3 mb-5'>
                                <AiFillInstagram className='text-xl text-primary' 
                                />
                                <span>{footerContent.contact.address.instagram}</span>
                            </li>
                        </Link>

                        <Link href='tel:+5585981137575' target='blank'>
                            <li className='flex hover:text-secondary items-start space-x-3 mb-5'>
                                <HiPhone className='text-xl text-primary' 
                                />
                                <span>{footerContent.contact.address.phone1}</span>
                            </li>
                        </Link>


                        <Link href='https://www.youtube.com/@urologistabrunoferreira' target='blank'>
                            <li className='flex items-start hover:text-secondary space-x-3 mb-5'>
                                <BiLogoYoutube className='text-xl text-primary' 
                                />
                                <span>{footerContent.contact.address.youtube}</span>
                            </li>
                        </Link>

                        <Link href='https://dr-brunoferreira.vercel.app/'>
                            <li className='flex hover:text-secondary items-start space-x-3 mb-5'>
                                <HiMiniGlobeAmericas className='text-xl text-primary' 
                                />
                                <span>{footerContent.contact.address.website}</span>
                            </li>
                        </Link>

                    </ul>
                </div>
            </div>
            <div className="text-center pt-10 border-t border-gray-200">
                <p>
                    {footerContent.copyright.labelOne}
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer