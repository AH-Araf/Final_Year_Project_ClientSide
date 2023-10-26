import Marquee from "react-fast-marquee";
import './MarqueeText.css'
import a from '../../../../public/logo.png'

const MarqueeText = () => {
    return (
        <div>
            <div className="marquee-body "> 
                <p className="marquee-heading me-2 bg-green-100 rounded-lg px-1">Notice:</p>
                <Marquee className="bg-green-100 rounded-lg">
                    Bangladesh Army International University of Science and Technology (BAIUST) <img className="marquee-img" src={a} alt="" /> a pioneer university of Bangladesh Army, started its journey since 14 February 2015 with the motto of “Knowledge, Wisdom and Technology” <img className="marquee-img" src={a} alt="" /> It was established temporarily at the serene and secured environment of Cumilla Cantonment with the mission to provide State of the Art education and research in science, engineering, Business Administration and other relevant programs <img className="marquee-img" src={a} alt="" /> Since January 2023 BAIUST started functioning from it’s permanent campus at Syedpur, Cumilla.The University aims to provide innovative, multi-disciplinary courses and endeavors to make a hub of knowledge <img className="marquee-img" src={a} alt="" />
                </Marquee>
            </div>
        </div>
    );
};

export default MarqueeText;