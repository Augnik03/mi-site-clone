import './App.css';
import data from './data/data.json';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PreNavbar from './components/PreNavbar/PreNavbar';
import Navbar from './components/Navbar/Navbar';
import NavOptions from './components/NavOptions/NavOptions'
import Slider from './components/Slider/Slider';
import Offers from './components/Offers/Offers';
import Heading from './components/Heading/Heading';
import StarProduct from './components/StarProduct/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories/HotAccessories';
import ProductReviews from './components/ProductReviews/ProductReviews';
import Videos from './components/Videos/Videos';
import Banner from './components/Banner/Banner';
import PreFooter from './components/PreFooter/PreFooter';
import Footer from './components/Footer/Footer';


function App() {
    return (
        <Router>
            <PreNavbar />
            <Navbar />
            <NavOptions 
                miPhones={data.miPhones}
                redmiPhones={data.redmiPhones}
                tv={data.tv}
                laptop={data.laptop}
                fitnessAndLifeStyle={data.fitnessAndLifeStyle}
                home={data.home}
                audio={data.audio}
                accessories={data.accessories}
            />
            <Slider start={data.banner.start} />
            <Offers offer={data.offer} />
            <Heading text='STAR PRODUCTS' />
            <StarProduct starProduct={data.starProduct} />
            <Heading text='HOT ACCESSORIES' />
            <HotAccessoriesMenu />
            <Routes>
                <Route path='/' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
                <Route path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
                <Route path='/smartDevice' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
                <Route path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
                <Route path='/lifestyle' element={ <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
                <Route path='/mobileAccessories' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
            </Routes>
            <Heading text='PRODUCT REVIEWS' />
            <ProductReviews productReviews={data.productReviews} />
            <Heading text='VIDEOS' />
            <Videos videos={data.videos} />
            <Heading text="IN THE PRESS" />
            <Banner banner={data.banner} />
            <PreFooter />
            <Footer footer={data.footer} />
        </Router>
    );
}

export default App;