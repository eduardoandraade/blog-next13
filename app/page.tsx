import Hero from "./components/Hero";
import Stats from "./components/Stats"
import Services from "./components/Services"
import About from "./components/About";
import Testimonials from "./components/Testimonials";


export default async function IndexPage(){

  return (
    <>

        <Hero />
        <Stats />
        <Services />
        <About />
        <Testimonials />

    </>

  )
}

export const revalidate = 60;