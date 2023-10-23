import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import img1 from '../../../assets/home/1.jpg'
import img2 from '../../../assets/home/2.png'
import img3 from '../../../assets/home/3.png'
import img4 from '../../../assets/home/4.jpg'
import img5 from '../../../assets/home/5.png'
import './Banner.css'

import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div className="banner-body">
            <Carousel>
                <div>
                    <img src={img1} />
                    <Link className="legend" target="_blank" to=''>Menu 1</Link>
                </div>
                <div>
                    <img src={img2} />
                    <Link className="legend" target="_blank" to=''>Menu 2</Link>
                </div>
                <div>
                    <img src={img3} />
                    <Link className="legend" target="_blank" to=''>Menu 3</Link>
                </div>
                <div>
                    <img src={img4} />
                    <Link className="legend" target="_blank" to=''>Menu 4</Link>
                </div>
                <div>
                    <img src={img5} />
                    <Link className="legend" target="_blank" to=''>Menu 5</Link>
                </div>
              
            </Carousel>
        </div>
    );
};

export default Banner;