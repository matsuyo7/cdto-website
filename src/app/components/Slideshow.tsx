import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CDTO from "../../assets/CDTO.jpg";
import Peacock from "../../assets/Peacock.jpg";
import TepMonorom from "../../assets/TepMonorom.jpg";

// Export the slideshow component
export default function Slideshow() {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper h-full w-full object-cover object-center overflow-hidden"
    >
      <SwiperSlide>
        <img
          src={CDTO}
          alt="CDTO"
          className="w-full h-full object-cover object-center"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={Peacock}
          alt="Peacock"
          className="w-full h-full object-cover object-center"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={TepMonorom}
          alt="Tep Monorom"
          className="w-full h-full object-cover object-center"
        />
      </SwiperSlide>
    </Swiper>
  );
}
