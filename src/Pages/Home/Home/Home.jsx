import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import HomeDetails from "../HomeDetails/HomeDetails";
import MarqueeText from "../MarqueeText/MarqueeText";
import ParallaxCover from "../ParallaxCover/ParallaxCover";



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
            
        </div>
    );
};

export default Home;