import Hero from "./components/Hero";
import Stats from "./components/Stats"
import Services from "./components/Services"
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import PostsBlogs from "./components/PostsBlogs";


export default async function IndexPage(){

  return (
    <>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Testimonials />
        <PostsBlogs />
    </>

  )
}

export const revalidate = 60;