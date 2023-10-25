
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import img1 from '../../../assets/home/sir1.png'
import img2 from '../../../assets/home/sir2.png'
import img3 from '../../../assets/home/sir3.png'
import img4 from '../../../assets/home/sir4.png'


import './SwiperImg.css'

const SwiperImg = () => {
    return (
  
            <div className="container">
                <h1 className="text-3xl heading">Messages</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <img className='border-4 border-blue-400' src={img1} alt="slide_image" />
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='border-4 border-blue-400' src={img2} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='border-4 border-blue-400' src={img3} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='border-4 border-blue-400' src={img4} alt="slide_image" />
                    </SwiperSlide>
                    

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline">⬅️</ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline">➡️</ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>

    );
};

export default SwiperImg;