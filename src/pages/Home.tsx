import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import MediaSection from "../components/MediaSection/MediaSection"
import NewsSection from "../components/NewsSection/NewsSection"
import PlaySection from "../components/PlaySection/PlaySection"
import '../assets/styles/main.scss';
import '../assets/styles/tailwind.css';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <PlaySection />
            <NewsSection />
            <MediaSection />
            <Footer />
        </>
    )
}

export default Home