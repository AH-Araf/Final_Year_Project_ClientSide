import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import HomeDetails from "../HomeDetails/HomeDetails";
import MarqueeText from "../MarqueeText/MarqueeText";
import ParallaxCover from "../ParallaxCover/ParallaxCover";
import './Home.css'
import SwiperImg from "../SwiperImg/SwiperImg";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BAIUST | Home</title>
            </Helmet>
            <Banner></Banner>
            <MarqueeText></MarqueeText>
            <HomeDetails></HomeDetails>
            <ParallaxCover></ParallaxCover>
            <SwiperImg></SwiperImg>

        </div>
    );
};

export default Home;