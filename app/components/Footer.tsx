'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import { HiLocationMarker } from 'react-icons/hi'
import { HiPhone, HiMiniGlobeAmericas, HiMiniHeart } from 'react-icons/hi2'

const footerContent = {
    about: {
        logo: "/images/logo-name-drbruno.svg",
        description: "Com anos de experiência e paixão pela medicina, o Dr. Ferreira oferece serviços de excelência em urologia e cirurgia geral. Navegue pelo nosso site para obter informações úteis sobre procedimentos, agendamento de consultas e recursos educacionais.",
        cta: {
            href: "#_",
            label: "Saiba mais"
        },
    },
    footerLinks: [
        {
            heading: "Company",
            links: [
                {
                    href: "#_",
                    label: "Inicio"
                },
                {
                    href: "#_",
                    label: "Sobre Mim"
                },
                {
                    href: "#_",
                    label: "Consultas"
                },
                {
                    href: "#_",
                    label: "Depoimentos"
                }
            ],
        },
        {
            heading: "Recursos",
            links: [
                {
                    href: "#_",
                    label: "Blog"
                },
                {
                    href: "#_",
                    label: "FAQ"
                },
                {
                    href: "#_",
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
        description: "Sinta-se à vontade para entrar em contato conosco caso tenha alguma dúvida, dúvida ou assistência que possa precisar.",
        address: {
            street: "Rua República do Líbano, 1513 | Fortaleza, Ceará",
            phone: "+55 85 98113-7575",
            website: "drbrunoferreira.com.br"
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
                                        <li key={idx} className='mb-3'>
                                            <Link href={link.href}
                                            className='group-flex items-center duration-300 transition-all ease-in-out hover:text-primary'
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
                        <li className='flex items-start space-x-3 mb-5'>
                            <HiLocationMarker className='text-xl text-primary' 
                            />
                            <span>{footerContent.contact.address.street}</span>
                        </li>
                        <li className='flex items-start space-x-3 mb-5'>
                            <HiPhone className='text-xl text-primary' 
                            />
                            <span>{footerContent.contact.address.phone}</span>
                        </li>
                        <li className='flex items-start space-x-3 mb-5'>
                            <HiMiniGlobeAmericas className='text-xl text-primary' 
                            />
                            <span>{footerContent.contact.address.website}</span>
                        </li>
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