import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';

const contentContact = {
    heading: {
        headingSubtitle: "Agende sua Consulta Médica",
        headingTitle: "Compromisso com a sua Saúde",
        description: "Utilize o Doctoralia para marcar sua consulta e aproveite a conveniência de agendar online."
    }
}

const Contact = () => {
  return (
    <section id='contact' className='pb-20 bg-light'>
        <div className='container px-4 mx-auto'>
            <div className='max-w-4xl mx-auto text-center mb-20'>

                {contentContact.heading.headingSubtitle && (
                    <span className="inline-block py-0.5 z-50 text-heading font-semibold relative 
                            mb-5 before:content-[''] before:absolute before:w-2/3 before:left-0
                            before:top-0 before:bottom-0 before:-z-10"> 
                        {contentContact.heading.headingSubtitle}
                    </span>
                )}

                {contentContact.heading.headingTitle && (
                    <h2 className='text-heading text-2xl lg:text-2xl font-bold mb-5'>{contentContact.heading.headingTitle}</h2>
                )}

                {contentContact.heading.description && (
                    <span className='text-body leading-relaxed'>{contentContact.heading.description}</span>
                )}
                
            </div>
            
            <div className='grid bg-light sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 text-center'>
                {/* Card da Esquerda */}
                <div className="p-6 flex justify-center items-center">
                    <Image src="/images/doctoralia.png" width={150} height={150} alt="Logo da Doctoralia" className='object-cover rounded-lg'/>
                </div>

                {/* Card do Meio (Destaque) */}
                <div className="pt-6 bg-white rounded-lg shadow-lg">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="flex justify-center items-start">
                        <Image
                            src="/images/perfil-doctoralia.svg"
                            alt="Foto Perfil Doctoralia Dr Bruno Ferreira"
                            width={120}
                            height={120}
                            className="object-cover mb-2 rounded-sm shadow-sm max-w-full max-h-full sm:w-24 md:w-32 lg:w-40"
                        />
                        </div>

                        <div className="flex flex-col justify-center lg:items-start md:items-center sm:items-center">
                            <h3 className="text-2xl leading-tight font-semi mb-1 flex justify-center">Dr. Bruno Ferreira
                                <span className="mr-1 ml-1">
                                    <MdCheckCircle className="text-secondary" />
                                </span>
                            </h3>
                            <p className="text-xs mb-2">
                                Urulogista e Cirurgião Geral
                            </p>

                            <div className="flex items-center justify-center mb-2">
                                <div className="flex text-secondary">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                </div>
                                <span className="ml-1 text-xs">63 opiniões</span>
                            </div>
                            <Link 
                                href='https://www.doctoralia.com.br/bruno-ferreira-4/urologista-cirurgiao-geral/fortaleza#&tab=profile-reviews'
                                className='hover:underline text-xs text-secondary'
                                target='blank'
                            >
                                
                                <span>ver todas as opniões &#40;63&#41;</span>
                            
                            </Link>
                        </div>

                    </div>

                    <div>
                        <Link target="_blank" className='mt-4 block mb-4' href="https://www.doctoralia.com.br/bruno-ferreira-4/urologista-cirurgiao-geral/fortaleza#">
                            <button className="py-4 px-12 w-9/12 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-secondary font-semibold hover:shadow-lg inline-block relative top-0 hover:-top-1">
                                Agende sua consulta no Doctoralia
                            </button>
                        </Link>
                    </div>

                    <div className='mb-6 w-10/12 flex justify-center items-center flex-col m-auto'>

                            <p className='text-xs font-light mb-1'>Marque a sua consulta agora mesmo, sem ligar, é só escolher uma data disponível no meu calendário. Após a reserva, você receberá mensagens de confirmação e lembrete.</p>

                            
                    </div>

                </div>
                </div>
            </div>
            
     </section>
  )
}

export default Contact
