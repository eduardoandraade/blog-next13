import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillSafetyCertificate } from 'react-icons/ai'

const aboutContent = {
    text: {
        headginSubTitle: '',
        headingTitle: 'Minha trajetória',
        description: 'Iniciei minha história com a medicina na Universidade Federal do Ceará, na qual conheci meu professor e tutor, Dr. Ariel Scafuri. Grande homem e grande médico urologista (in memoriam). Segui para residência médica na Santa Casa da Misericórdia de Fortaleza e no Instituto Dr. José Frota (IJF). No Hospital Sírio-Libanês, realizei a especialização em Cirurgia Urológica Minimamente Invasiva, formato de procedimento que garante mais qualidade de vida aos pacientes. No Hospital Real Português, me especializei em Cirurgia Robótica, colocando a tecnologia junto da humanização e proporcionando um pós operatório seguro e mais confortável aos que a mim confiam a saúde.',
        formations: [
            {
                title: "Universidade Federal do Ceará - Faculdade de Medicina"
            },
            {
                title: "Hospital Sírio Libanês - Cirurgia Urológica Minimamente Invasiva"
            },
            {
                title: "Santa Casa da Misericórdia de Fortaleza - Urologia"
            },
            {
                title: "Instituto Dr. José Frota - Cirurgia Geral"
            },
            
            {
                title: "Hospital Real Português - Cirurgia Robótica "
            },
        ],
        cta: {
            btn1: {
                href: "https://api.whatsapp.com/send/?phone=5585981137575&text=Ol%C3%A1%2C+gostaria+de+marcar+uma+consulta&type=phone_number&app_absent=0",
                label: "Agendar Consulta"
            },
            btn2: {
                href: "#services",
                label: "Serviços"
            },
        }
    },
    images: {
        img1: "/images/img-1.svg",
        img2: "/images/img-8.svg",
        img4: "/images/img-3.svg",
        img3: "/images/cirurgia4.svg"
    },
}

const About = () => {
  return (
    <section id='about' className='py-20 bg-light overflow-x-hidden'>
        <div className='container px-4 mx-auto'>
            <div className='lg:flex space-x-2 justify-between'>
                <div className="lg:w-6/12 relative mb-10 lb:mb-0 z-10 before:-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-primary before:-bottom-20">
                    <div className="flex gap-2">
                        <div className='flex flex-col space-y-2'>
                            <div>
                                <Image src={aboutContent.images.img1} width={626} height={640} alt='Fotos Dr Bruno Ferreira' className='object-cover h-full w-full rounded-lg'/>
                            </div>
                            <div className='flex justify-end gap-'>
                                <div className="w-4/12 flex">
                                    <div className='ml-2'>
                                        <div className='bg-primary w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]'></div>
                                    </div>
                                </div>
                                <div className="w-6/12">
                                    <Image src={aboutContent.images.img3} alt='Fotos Dr Bruno Ferreira' width={626} height={640} className='object-cover h-full w-full rounded-lg'/>
                                </div>
                            </div>
                        </div>
                        {/* end col */}
                        <div className='mt-auto'>
                            <div className="flex flex-col gap-2">
                                <div>
                                    <div className="bg-secondary w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px]"></div>
                                </div>
                                <div className='mt-3'>
                                    <Image src={aboutContent.images.img2} alt='Fotos Dr Bruno Ferreira' width={547} height={573} 
                                        className='object-cover h-full w-full rounded-lg shadow-2xl'/>
                                </div>

                                <div className='w-7/12 pt-1'>
                                    <Image src={aboutContent.images.img4} alt='Fotos Dr Bruno Ferreira' width={547} height={573} 
                                        className='object-cover h-full w-full rounded-lg shadow-2xl'/>
                                </div>

                                {
                                    /*
                                        {aboutContent.experience.label && (
                                            <div className='p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5'>
                                                <strong className='block font-bold text-primary text-xl lg:text-5xl'>
                                                    {aboutContent.experience.year}
                                                </strong>
                                                <span>
                                                    {aboutContent.experience.label}
                                                </span>
                                            </div>
                                        )}                                
                                    */
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-5/12 relative z-10">
                    {aboutContent.text.headginSubTitle && (
                        <span className="inline-block py-0.5 z-50 font-semibold relative 
                                mb-5 before:content-[''] before:absolute before:w-2/3 before:left-0
                                before:top-0 before:bottom-0 before:-z-10 text-white md:text-heading lg:text-red"> 
                            {aboutContent.text.headginSubTitle}
                        </span>
                    )}

                    {aboutContent.text.headingTitle && (
                        <h2 className="text-white text-xl lg:text-4xl lg:text-heading font-bold mb-5 mt-4"> 
                            {aboutContent.text.headingTitle}
                        </h2>
                    )}

                    {aboutContent.text.description && (
                        <p className="text-body leading-relaxed mb-10"> 
                            {aboutContent.text.description}
                        </p>
                    )}

                    <ul className='grid grid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-5 mb-10'>
                        {aboutContent.text.formations.map((formation, idx) => (
                            <li className='flex flex-grow items-center space-x-5' key={formation.title}>
                                <span className='w-7 h-7 rounded-full bg-primary flex items-center justify-center'>
                                    <AiFillSafetyCertificate className='text-white text-2xl p-1' />
                                </span>
                                <span>{formation.title}</span>
                            </li>
                        ))}
                    </ul>


                    <div className='flex space-x-3'>
                        <Link target='blank' href={aboutContent.text.cta.btn1.href} className='py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761]
                        hover:shadow-lg inline-block relative top-0 hover:-top-1'>{aboutContent.text.cta.btn1.label}</Link>

                        <Link href={aboutContent.text.cta.btn2.href} className='py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#179792]
                        hover:shadow-lg inline-block relative top-0 hover:-top-1'>{aboutContent.text.cta.btn2.label}</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About