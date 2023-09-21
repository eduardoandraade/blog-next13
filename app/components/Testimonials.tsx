import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const testimonialsContent = {
    heading: {
        headingSubTitle: "Depoimentos dos Pacientes",
        headingTitle: "O que nossos pacientes têm a dizer",
        description: "Palavras reais, resultados reais. Leia o que nossos pacientes têm a dizer sobre a qualidade de nossos serviços e tratamentos.",
        cta: {
            cta_href: "#_",
            cta_label: "Agendar Consulta"
        }
    },
    testimonials: [
        {
            img: "/images/person-2.jpg",
            name: "Maria Silva",
            titleRole: "Engenheira",
            testimony: "Estou imensamente grata ao Dr. Bruno Ferreira e sua equipe pela atenção e cuidado excepcionais. Sua abordagem gentil e profissional tornou minha jornada de tratamento uma experiência positiva. Recomendo fortemente seus serviços."
        },
        {
            img: "/images/person-1.jpg",
            name: "João Cordeiro",
            titleRole: "Professor",
            testimony: "O Dr. Bruno Ferreira é um médico notável. Sua perícia em cirurgia urológica minimamente invasiva me proporcionou uma recuperação rápida e tranquila. Sinto-me muito melhor graças ao seu cuidado atencioso."
        },
        {
            img: "/images/person-3.jpg",
            name: "Ana Santos",
            titleRole: "Jornalista",
            testimony: "Encontrar o Dr. Bruno Ferreira foi um divisor de águas para mim. Sua abordagem compassiva e conhecimento profundo em urologia me deram confiança em cada etapa do tratamento. Minha saúde melhorou significativamente, e estou muito grata."
        },
    ]
}

const Testimonials = () => {
  return (
    <section className='py-20 bg-light'>
        <div className='container px-4 mx-auto'>
            <div className='lg:flex justify-between items-center'>
                <div className='lg:w-4/12 lg:pr-24 mb-10 lg:mb-0'>
                    {testimonialsContent.heading.headingSubTitle && (
                        <span className="inline-block py-0.5 pl-3 z-50 text-heading font-semibold relative 
                                mb-5 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0
                                before:top-0 before:bottom-0 before:-z-10"> 
                            {testimonialsContent.heading.headingSubTitle} 
                        </span>
                        )}


                    {testimonialsContent.heading.headingTitle && (
                        <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5"> 
                            {testimonialsContent.heading.headingTitle} 
                        </h2>
                    )}

                    {testimonialsContent.heading.description && (
                        <p className="text-body leading-relaxed mb-10"> 
                            {testimonialsContent.heading.description} 
                        </p>
                    )}

                    {testimonialsContent.heading.cta.cta_label && (
                        <p>
                            <Link href={testimonialsContent.heading.cta.cta_href}
                                className='py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-1'>
                                {testimonialsContent.heading.cta.cta_label}
                            </Link>
                        </p>
                    )}

                    

                    
                </div>
                <div className='lg:w-8/12'>
                    <div className='md:flex w-full h-full space-x-0 md:space-x-6 items-end'>
                        <div className='md:w-6/12 mb-6 md:mb-0 '> 
                        {testimonialsContent.testimonials.map((testimonial, idx) => {
                            
                            if ( idx == 2 ) return null;

                            return (
                            <div className={`bg-white p-7 rounded-lg w-full ${idx == 1 ? "" : "mb-6"}`}>
                                <div className='flex space-x-4 items-center mb-4'>
                                    <div className='relative'>
                                        <Image src={testimonial.img} width={579} height={720} className='object-cover h-14 w-14 rounded-full' alt='Fotos do Pacientes' />
                                        <span className='absolute bottom-0 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
                                            <Image src={"/images/quote.svg"} width={14} height={9} alt='Icone' className=''/>
                                        </span>
                                    </div>
                                    <div className='leading-3'>
                                        {testimonial.name && (
                                            <strong className='block text-heading text-lg'>
                                                {testimonial.name}
                                            </strong>
                                        )}

                                        {testimonial.titleRole && (
                                        <span className='text-sm'>
                                            {testimonial.titleRole}
                                        </span>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <blockquote>
                                        "{testimonial.testimony}"
                                    </blockquote>
                                </div>

                            </div>
                        )})}
                        </div>

                        <div className='md:w-6/12'>
                            <div className='w-16 h-16 hidden md:block bg-greenLight rounded-full mb-6'>
                            </div>

                            <div className='bg-white p-7 rounded-lg w-full mb-6'>
                                <div className='flex space-x-4 items-center mb-4'>
                                    <div className='relative'>
                                        <Image src={testimonialsContent.testimonials[2].img} width={579} height={720} alt='Icone Color' 
                                        className='object-cover h-14 w-14 rounded-full'/>

                                        <span className='absolute bottom-0 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
                                            <Image src={"/images/quote.svg"} width={14} height={9} alt='Icone' className=''/>
                                        </span>
                                    </div>
                                    <div className='leading-3'>
                                        {testimonialsContent.testimonials[2].name && (
                                            <strong className='block text-heading text-lg'>
                                                {testimonialsContent.testimonials[2].name}
                                            </strong>
                                        )}

                                        {testimonialsContent.testimonials[2].titleRole && (
                                            <span className='text-sm'>
                                                {testimonialsContent.testimonials[2].titleRole}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                    <div>
                                        <blockquote>
                                            "{testimonialsContent.testimonials[2].testimony}"
                                        </blockquote>
                                    </div>
                                </div>
                            
                                <div className='bg-[#F27763] hidden md:inline-block w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials