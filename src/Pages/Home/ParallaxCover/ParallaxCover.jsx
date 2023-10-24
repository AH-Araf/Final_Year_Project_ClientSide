import { Parallax } from 'react-parallax';
import b from '../../../assets/home/b.jpg'
import { Link } from 'react-router-dom';

const ParallaxCover = () => {
    return (
        <div className='mt-10'>
            <Parallax
                blur={{ min: -50, max: 40 }}
                bgImage={b}
                bgImageAlt="the menu"
                strength={200}
            >
                <div className="hero h-[650px] " >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-4 text-3xl font-bold uppercase">Why BAIUST?</h1>
                            <p className="mb-2"><b><u>Army Administered & UGC Approved:</u></b> Bangladesh Army International University of Science and Technology (BAIUST) runs under the direct supervision of the Bangladesh Army. Its programs are approved by UGC. The Vice-Chancellor (VC) is selected from the teachers of the Military Institute of Science & Technology (MIST) and approved by the Chancellor— the Honorable President of Bangladesh.
                                <br /><b><u>Access to the VC:</u></b> The University gives top priority to its students and provides utmost care to students’ needs. All the students have access to the VC for their educational, administrative, and personal requirements when necessary. In addition, the VC interacts with all students regularly. The VC and faculties also interact with parents/guardians when required. </p>
                                <button className="btn btn-outline btn-info"><Link to='/readMore'>Read More</Link></button>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default ParallaxCover;