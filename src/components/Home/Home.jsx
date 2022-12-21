import Footer from '../Footer/Footer'
import CategoryCard from './CategoryCard'
import ComboBanner from './ComboBanner'
import AboutUs from '../AboutUs/AboutUs'

//ESTILOS
import './ComboBanner.scss';

const Home = () => {
    return (
        <main className='p-0 d-flex flex-column justify-content-center align-items-center'>
            <ComboBanner />
            <CategoryCard/>
            <AboutUs />
            <Footer/>
        </main>
    )
}

export default Home