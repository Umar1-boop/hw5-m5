import './banner.scss'
import banner from '../../../../img/banner.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

export default function Banner() {
  return (
    <section className="container home-banner">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}

      >
          <SwiperSlide>
              <img src={banner} alt="Spicy delicious chicken wings" />
          </SwiperSlide>

          <SwiperSlide>
              <img src={banner} alt="Spicy delicious chicken wings" />
          </SwiperSlide>
          
          <SwiperSlide>
              <img src={banner} alt="Spicy delicious chicken wings" />
          </SwiperSlide>
      </Swiper>
      {/* <img src={banner} alt="Spicy delicious chicken wings" /> */}

    </section>
  )
}
