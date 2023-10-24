
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import img1 from '../../../assets/home/1.jpg'
import img2 from '../../../assets/home/2.png'
import img3 from '../../../assets/home/3.png'
import img4 from '../../../assets/home/4.jpg'
import img5 from '../../../assets/home/5.png'

import './SwiperImg.css'

const SwiperImg = () => {
    return (
  
            <div className="container">
                <h1 className="heading">ABCD</h1>
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
                        <img src={img1} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="slide_image" />
                    </SwiperSlide>

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>

    );
};

export default SwiperImg;