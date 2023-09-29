import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { Post } from "../lib/interface";
import { client } from "../lib/sanity";
import { BiChevronRight } from 'react-icons/bi';

async function getData() {
    const query = `*[_type == "post"] | order(_createdAt desc) [0..3] {
      title,
        overview,
        _id,
        content,
        _createdAt,
        "imageUrl": image.asset->url,
        slug
    }`;
  
    const data = await client.fetch(query);
  
    return data;
  }

  const blogContent = {
    heading: {
        headingSubTitle: "Postagens Recentes",
        headingTitle: "Últimas Postagens",
        description: "Acompanhe nossas últimas postagens para obter informações valiosas sobre urologia e saúde."
    },
    cta: {
        href: "#_",
        label: "Veja todos os posts",
        labelSuffix: "clique aqui"
    }
  }

  


export default async function PostsBlogs (){

    const data = await getData() as Post[];


    
  return (
    <section id='posts' className='pb-20 bg-light overflow-x-hidden'>
      <div className="container px-4 mx-auto divide-gray-200">
        <div className="lg:w-5/12 mb-10 lg:mb-0">
                    {blogContent.heading.headingSubTitle && (
                    <span className="inline-block py-0.5 z-50 text-heading font-semibold relative 
                        mb-5 before:content-[''] before:absolute before:w-2/3 before:left-0
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

        <div className="grid gap-y-8 sm: sm:grid-cols-4 md:gap-6 lg:grid-col-2 lg:gap-10 pt-8">
          {data.map((post) => (
            <article 
              key={post._id} 
              className='overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg show-teal-100'
              >
              <div className='h-56 w-full relative'>
                <Image 
                  fill 
                  src={post.imageUrl} 
                  alt="Capa Postagem Blog" 
                  className='w-full h-full object-cover'
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 960px"
                />
              </div>

              <div className='p-4 sm:p-6'>
                <Link 
                    href={`/post/${post.slug.current}`} 
                    prefetch 
                  >
                      <h3 className="text-lg font-medium leading-8 text-gray-900 ">
                        {post.title}
                      </h3>
                  
                      <p className="mt-1 text-sm leading-relaxed text-gray-500 line-clamp-3">
                        {post.overview}
                      </p>
                  </Link>

                  <Link 
                    href={`/post/${post.slug.current}`}
                    prefetch
                    className='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500'
                  >
                    Ler mais
                    <span className='block transition-all group-hover:ms-0.5'>
                      &rarr;
                    </span>
                  </Link>
              </div>
            </article>
          ))}

        </div>

        <div className='mx-auto mt-20 flex items-center justify-center'>
          <Link href='/allposts' className='duration-300 transition-all ease-in-out py-3 px-6 flex border rounded-full space-x-3 items-center hover:border-gray-400' >
            {blogContent.cta.label}{" "}
            <strong className='text-primary pl-1 font-semibold'>
              {blogContent.cta.labelSuffix}
            </strong>
            <span className='text-gray-300'>|</span>
            <span className='bg-primary rounded-full w-8 h-8 flex items-center justify-center'>
              <BiChevronRight className='w-6 h-6 text-white' />
            </span>
          </Link>

        </div>

        

    </div>
    </section>
  )
}

export const revalidate = 60;