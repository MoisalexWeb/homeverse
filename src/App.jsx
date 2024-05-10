import './App.scss'
import Header from './assets/components/containers/Header/Header'
import Hero from './assets/components/containers/Hero/Hero'
import About from './assets/components/containers/About/About'
import Services from './assets/components/containers/Services/Services'
import Properties from './assets/components/containers/Properties/Properties'
import Animities from './assets/components/containers/Animities/Animities'
import Blog from './assets/components/containers/Blog/Blog'
import Contact from './assets/components/containers/Contact/Contact'
import Footer from './assets/components/containers/Footer/Footer'

function App() {

    return (
        <>
            <Header />
            
            <main>
                <Hero />
                <About />
                <Services />
                <Properties />
                <Animities />
                <Blog />
                <Contact />
            </main>

            <Footer />
        </>
    )
}

export default App
