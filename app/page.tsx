import Hero from "./components/Hero";
import Stats from "./components/Stats"
import Services from "./components/Services"
import About from "./components/About";


export default async function IndexPage(){

  return (
    <>

        <Hero />
        <Stats />
        <Services />
        <About />

    </>

  )
}

export const revalidate = 60;