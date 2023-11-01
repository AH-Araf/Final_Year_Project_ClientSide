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

            <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <Banner></Banner>

            </div>
            <MarqueeText></MarqueeText>

            <HomeDetails></HomeDetails>

            <ParallaxCover></ParallaxCover>
            <div data-aos="zoom-in-down">
                <SwiperImg></SwiperImg>
            </div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="top-center">
                <YouTubeVideo></YouTubeVideo>
            </div>

        </div>
    );
};

export default Home;