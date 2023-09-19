import Link from 'next/link'
import React from 'react'
import Image from 'next/image'



const heroContent = {
    text: {
        subheading: "Médico Especialista",
        heading: "Dr. Bruno Ferreira Urologista & Cirurgião Geral",
        description: "Formado na Santa Casa da Misericórdia em Fortaleza/Ce, com expertise em Cirurgia Robótica, Vídeo-Cirurgia, Cirurgia Urológica Minimamente Invasiva e Cirurgia Laparoscópica. Atualmente, estou disponível para atendimento no renomado Instituto Ariel Scafuri. Minha paixão e dedicação estão voltadas para oferecer cuidados urológicos de excelência aos meus pacientes, utilizando as mais avançadas técnicas cirúrgicas e tratamentos disponíveis.",
    },
    images: {
        img1: '/images/hero-1.jpg',
        img2: '/images/hero-2.jpg',
        img3: '/images/hero-3.jpg',
        img4: '/images/hero-4.jpg',
        img5: '/images/hero-5.jpg',
    }
}

const Hero = () => {
  return (
    <section className='py-10 ml-10 mr-10'>
        <div className="container px-4 mx-auto">
            <div className='lg:flex justify-between items-center'>
                <div className='lg:w-5/12 mb-10 lg:mb-0'>
                    {heroContent.text.subheading && (
                    <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative 
                    mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0
                    before:top-0 before:bottom-0 before:z-[-1]"> {heroContent.text.subheading}</span>)}

                    {heroContent.text.heading && (<h1 className='text-4xl mb-7 lg:text-5xl font-bold text-heading'>
                        {heroContent.text.heading}</h1>
                    )}

                    {heroContent.text.description && (
                        <p className='leading-relaxed text-body mb-10'>
                        {heroContent.text.description}
                        </p>
                    )}

                    <div className='flex space-x-3'>
                        <Link href='#_' className='py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761]
                        hover:shadow-lg inline-block relative top-0 hover:-top-1'>Agendar Consulta</Link>

                        <Link href='#_' className='py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#179792]
                        hover:shadow-lg inline-block relative top-0 hover:-top-1'>Saiba Mais</Link>
                    </div>
                </div>

                <div className='lg:w-6/12 space-y-2'>
                    <div className='flex space-x-2 items-stretch'>
                        <div className="w-8/12">
                            {heroContent.images.img1 && (
                                <Image src={heroContent.images.img1} width={397}
                                height={346} alt="Fotos Dr Bruno Ferreira" className="object-cover h-full w-full rounded-2xl" />
                            )}

                        </div>
                        <div className="w-4/12 self-end space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                                {heroContent.images.img2 && (
                                    <div>
                                        <Image src={heroContent.images.img2} width={437} height={437} alt='Fotos Dr Bruno Ferreira'
                                        className='object-cover h-full w-full rounded-2xl' />
                                    </div>
                                )}

                                <div className="bg-yellowLight rounded-2xl rounded-tr-[200px]"></div>
                            </div>

                            {heroContent.images.img3 && (
                                <div>
                                    <Image src={heroContent.images.img3} width={374} height={392} 
                                    alt='Fotos Dr Bruno Ferreira'
                                    className='object-cover h-full w-full rounded-2xl'/>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='flex space-x-2'>
                        <div className='w-4/12'>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-greenLight rounded-2xl rounded-bl-[200px]"></div>
                                {heroContent.images.img4 && (
                                    <div>
                                        <Image alt='Fotos Dr Bruno Ferreira' width={394} height={394} src={heroContent.images.img4}
                                        className='object-cover h-full w-full rounded-2xl'/>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='w-5/12'>
                            {heroContent.images.img5 && (
                                <div>
                                    <Image src={heroContent.images.img5} alt='Fotos Dr Bruno Ferreira' width={446} height={495}
                                    className='object-cover h-full w-full rounded-2xl'/>
                                </div>
                            )}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section>
  )
}

export default Hero