import a from '../../../assets/home/a.jpg'
import b from '../../../assets/home/b.jpg'
import './HomeDetails.css'

const HomeDetails = () => {
    return (
        <div className='home-details-main'>
            <div className='home-details-body'>
                <h2 className='bg-green-200'>Why BAIUST?</h2>
                <div className='home-details-sec1 border-green-200 border-4'>
                    <img src={b} alt="" />
                    <div className="overflow-y-auto overflow-box ...">
                        <p>Bangladesh Army International University of Science and Technology (BAIUST), a pioneer university of Bangladesh Army, started its journey since 14 February 2015 with the motto of “Knowledge, Wisdom and Technology”. It was established temporarily at the serene and secured environment of Cumilla Cantonment with the mission to provide State of the Art education and research in science, engineering, Business Administration and other relevant programs. Since January 2023 BAIUST started functioning from it’s permanent campus at Syedpur, Cumilla. The University aims to provide innovative, multi-disciplinary courses and endeavors to make a hub of knowledge.</p>
                    </div>
                </div>
            </div>

            {/*  */}

            <div className='home-details-body'>
                <h2 className='bg-green-200'>Life @ BAIUST</h2>
                <div className='home-details-sec1 border-green-200 border-4'>
                    <img src={a} alt="" />
                    <div className="overflow-y-auto overflow-box ...">
                        <p>Find out what you can expect from student life in BAIUST and discover why BAIUST is one of the world’s most exciting universities to study. Our flexible programmes, world-class facilities and award-winning support services combine to ensure your university experience is exceptional and unique. We believe our flexible four-year degree will give you the best chance of success in your future career. BAIUST degree programmes are designed to include four years of study to give you a broader and more flexible education. They allow you to try a range of subjects before specialising.Even if you know exactly what you want to do, you can study additional subjects and add depth to your education. By the time you graduate your breadth of knowledge will be highly prized by employers, giving you the best chance of success in your chosen field. Study support: We provide help and guidance on how to study most effectively. We’ve invested efforts to enhance your student experience and provide support and guidance that are second to none.
                            We’ll work closely with you to help you:
                            become a confident, independent learner and play an active part in the University community; and
                            develop the graduate attributes required for success at the University and beyond.
                            Peer support: We run a system of peer support in the form of student-run helpdesks, information points, academic families, buddying and mentoring. This allows newer students to call on the help and advice of more experienced students as they progress through university life.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HomeDetails;