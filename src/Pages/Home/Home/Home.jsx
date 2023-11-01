import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import HomeDetails from "../HomeDetails/HomeDetails";
import MarqueeText from "../MarqueeText/MarqueeText";
import ParallaxCover from "../ParallaxCover/ParallaxCover";
import './Home.css'
import SwiperImg from "../SwiperImg/SwiperImg";
import YouTubeVideo from "../YouTubeVideo/YouTubeVideo";



const Home = () => {
    return (
        <div className="scroll-smooth">
            <Helmet>
                <title>BAIUST | Home</title>
            </Helmet>


            <Banner></Banner>
            <MarqueeText></MarqueeText>

            <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
                <HomeDetails></HomeDetails>
                <ParallaxCover></ParallaxCover>
                <SwiperImg></SwiperImg>
                <YouTubeVideo></YouTubeVideo>
            </div>



        </div>
    );
};

export default Home;