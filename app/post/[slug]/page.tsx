import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from 'next/image'


async function getData(slug: string) {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

    const data = await client.fetch(query);

    return data;
}

export default async function SlugPage({
    params,
}: {
    params: { slug:string };
}) {
    const data = await getData(params.slug) as Post;

    const PortableTextComponent = {
        types: {
            image: ({value}: {value: any}) => (
                <Image src={urlFor(value).url()} alt="Image" className="rounded-lg" width={800} height={800} />
            )
        }
    }

    return (
        <div className="xl:divide-y xl:divide-gray-200">
            <header className="pt-6 py-5 xl:pb-6">
                <div className="space-y-1 text-center mt-24">
                    <div>
                        <p className="text-base font-medium leading-6 text-teal-500">
                            {new Date(data._createdAt).toLocaleDateString('pt-BR')}
                        </p>
                        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                            {data.title}
                        </h1>
                    </div>
                </div>
            </header>

            <div className="divide-y divide-gray-200 pb-7 xl:divide-y-0">
                    <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 prose max-w-4xl pb-8 pt-10 dark:prose-invert prose-lg">
                            <PortableText 
                                value={data.content} 
                                components={PortableTextComponent}/>
                        </div>

                    </div>

            </div>

        </div>
    );
}


export const revalidate = 60;