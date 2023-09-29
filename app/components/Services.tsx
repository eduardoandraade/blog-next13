import React from 'react'
import Image from 'next/image'

const servicesContent = {
    heading: {
        headingSubTitle: "Principais Especialidades",
        headingTitle: "Serviços e Procedimentos",
        description: "Cuidados médicos de qualidade para sua saúde urológica. Como urologista e cirurgião geral, o Dr. Bruno Ferreira está preparado para atender às suas necessidades com experiência em cirurgia robótica, vídeo-cirurgia, cirurgia urológica minimamente invasiva e cirurgia laparoscópica. Descubra como podemos ajudar você a manter sua saúde urológica em ótima forma."
    },
    items: [
        {
            icon: '/images/icon-services.svg',
            title: "Consulta urologista",
            description: "Oferecemos consultas especializadas em urologia, onde o Dr. Bruno Ferreira avaliará sua saúde urológica, responderá às suas perguntas e recomendará tratamentos personalizados, se necessário."
        },
        {
            icon: '/images/icon-services.svg',
            title: "Reposição hormonal masculina",
            description: "Para homens que enfrentam desequilíbrios hormonais, oferecemos terapias de reposição hormonal masculina, ajudando a restaurar os níveis hormonais naturais e melhorar o bem-estar."
        },
        {
            icon: '/images/icon-services.svg',
            title: "Cistoscopia",
            description: "A cistoscopia é um procedimento de diagnóstico que nos permite examinar a bexiga e o trato urinário. Utilizamos tecnologia avançada para avaliar e diagnosticar condições urológicas."
        },
        {
            icon: '/images/icon-services.svg',
            title: "Circuncisão",
            description: "Realizamos cirurgias de circuncisão com precisão e cuidado, seguindo os mais altos padrões médicos. A circuncisão pode ser realizada por razões médicas ou pessoais."
        },
        {
            icon: '/images/icon-services.svg',
            title: "Cauterização de verrugas do HPV",
            description: "Oferecemos procedimentos de cauterização eficazes para tratar verrugas genitais causadas pelo HPV, proporcionando alívio e prevenindo complicações futuras."
        },
        {
            icon: '/images/icon-services.svg',
            title: "Cirurgia para cálculo renal",
            description: "Realizamos cirurgias para tratar cálculos renais, incluindo procedimentos minimamente invasivos, garantindo alívio da dor e recuperação mais rápida."
        },
    
    ]
}

const Services = () => {
  return (
    <section id='services' className='py-20 bg-light'>
        <div className='container px-4 mx-auto'>
            <div className="max-w-xl mx-auto text-center mb-20">


            {servicesContent.heading.headingSubTitle && (
                <span className="inline-block py-0.5 z-50 text-heading font-semibold relative 
                        mb-5 before:content-[''] before:absolute before:w-2/3 before:left-0
                        before:top-0 before:bottom-0 before:-z-10"> 
                    {servicesContent.heading.headingSubTitle}
                </span>
            )}

            {servicesContent.heading.headingTitle && (
                <h2 className='text-heading text-2-xl lg:text-4xl font-bold mb-3'>{servicesContent.heading.headingTitle}</h2>
            )}

            {servicesContent.heading.description && (
                <h2 className='text-body leading-relaxed'>{servicesContent.heading.description}</h2>
            )}
                
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                {servicesContent.items.map((item,idx) => ( 
                    <div className='flex space-x-10' key={item.title}>
                        <div className='w-14 shrink-0'>
                            <span className='inline-flex items-center justify-center p-2 w-[70px] h-[70px] rounded-lg bg-white shadow-2xl'>
                                <Image src={item.icon} width={62} height={62}  alt='Icon para marcar um serviço'/>
                            </span>
                        </div>

                        <div>
                            {item.title && (
                                <h3 className='text-heading font-bold text-md md-3'>
                                    {item.title}
                                </h3>
                            )}

                            {item.description && (
                                <p className='leading-relaxed'>
                                    {item.description}
                                </p>
                            )}

                            
                        </div>
                    </div>

                 ))}
            </div>
        </div>

    </section>
  )
}

export default Services