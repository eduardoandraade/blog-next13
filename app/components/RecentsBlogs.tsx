"use client"

import React, { useRef, useCallback, useState, useEffect} from "react"
import Link from 'next/link'
import Image from 'next/image'
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'


  const blogContent = {
    heading: {
        headingSubTitle: "Postagens Recents",
        headingTitle: "Ultimas Postagens",
        description: "Descrição do Blog"
    },
    RecentsBlogs: [
        {
            permalink: "#_",
            featuredImg: "/images/post-1.jpg",
            title: "Mitossolância: Desvendando os Mitos sobre Solidão",
            excerpt: "Explore os mitos comuns sobre solidão e descubra como lidar com esse sentimento. Este artigo oferece...",
            author: {
                img: "/images/person-1.jpg",
                name: "Ana Silva",
                titleRole: "Psicóloga Clínica"
           }
        },
        {
            permalink: "#_",
            featuredImg: "/images/post-2.jpg",
            title: "Os Benefícios Surpreendentes da Meditação Mindfulness",
            excerpt: "Descubra como a meditação mindfulness pode melhorar sua saúde mental, reduzir o estresse e promover o bem-estar geral. Este artigo inclui dicas...",
            author: {
                img: "/images/person-2.jpg",
                name: "Carlos Santos",
                titleRole: "Instrutor de Meditação"
           }
        },
        {
            permalink: "#_",
            featuredImg: "/images/post-3.jpg",
            title: "Nutrição Inteligente: Como Escolher os Alimentos Certos para sua Saúde",
            excerpt: "Aprenda a tomar decisões alimentares mais inteligentes para melhorar sua saúde. Este artigo oferece orientações nutricionais valiosas e dicas de um especialista...",
            author: {
                img: "/images/person-3.jpg",
                name: "Laura Mendes",
                titleRole: "Nutricionista"
           }
        },
    ],
    cta: {
        href: "#_",
        label: "Veja todos os posts",
        labelSuffix: "clique aqui"
    }
  }



export function RecentsBlogs() {

    const [slideIndex, setSlideIndex] = useState(0);
    const [ isEnd, setIsEnd ] = useState(null);
    const sliderRef = useRef(null);
    const [ isBeginning, setIsBeginning ] = useState(null);

    const prevHandler = useCallback(() => {
        if (!sliderRef.current || !sliderRef.current.swiper) return;
        sliderRef.current.swiper.slidePrev();
      }, []);

  return (
    <section className="py-20 bg-light overflow-x-hidden">
        <div className="container px-4 mx-auto">
            <div className="lg:flex justify-between items-center mb-10">
                <div className="lg:w-5/12 mb-10 lg:mb-0">
                    {blogContent.heading.headingSubTitle && (
                    <span className="inline-block py-0.5 pl-3 z-50 text-heading font-semibold relative 
                        mb-5 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0
                        before:top-0 before:bottom-0 before:-z-10"> 
                    {blogContent.heading.headingSubTitle}
                    </span>
                    )}


                    {blogContent.heading.headingTitle && (
                        <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5"> 
                            {blogContent.heading.headingTitle}
                        </h2>
                    )}

                    {blogContent.heading.description && (
                        <p className="text-body leading-relaxed mb-10"> 
                            {blogContent.heading.description}
                        </p>
                    )}


                </div>
                <div className="lg:w-5/12 text-left lg:text-right">
                    <div className="inline-flex ml-auto space-x-3">
                        <div className={` ${isBeginning == true ? "opacity-30 bg-[#E1E7EA] cursor-auto" : "opacity-100 hover:bg-primary"} group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}>
                            <BiChevronLeft className={`text 3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${isBeginning == true ? "group-hover:!text-primary" : "group-hover:text-white"}`}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>
  )
}

export const revalidate = 60;
