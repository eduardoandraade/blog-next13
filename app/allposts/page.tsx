import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '../lib/interface';
import { client } from '../lib/sanity';


async function getData() {
  const query = `*[_type == "post"] {
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
      headingSubTitle: "Urologia & Saúde",
      headingTitle: "Todas as Postagens",
      description: "Acompanhe nosso blog para obter informações valiosas sobre urologia e saúde."
  }
}

export default async function Page(){

  const data = await getData() as Post[];

  return (
    <section className='pb-20 overflow-x-hidden'>
      <div className='container px-4 py-1 mx-auto text-center divide-gray-200 mt-20'>

                    {blogContent.heading.headingTitle && (
                        <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5 mt-20"> 
                            {blogContent.heading.headingTitle}
                        </h2>
                    )}

                    {blogContent.heading.description && (
                        <p className="text-body leading-relaxed mb-10"> 
                            {blogContent.heading.description}
                        </p>
                    )}
      </div>

      <div className="grid w-10/12 m-auto gap-y-8 sm: sm:grid-cols-4 md:gap-6 lg:grid-col-2 lg:gap-10 pt-8">
          {data.map((post) => (
            <article 
              key={post._id} 
              className='overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg  show-teal-100'
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
                      <h3 className="text-lg font-medium leading-8 text-gray-900">
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
        

    </section>
  )
}

export const revalidate = 60;
