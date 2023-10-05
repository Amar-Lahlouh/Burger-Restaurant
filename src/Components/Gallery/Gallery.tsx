// Import Swiper React components
import "./Gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/photo1.jpg";
import img2 from "../../assets/photo2.jpg";
import img3 from "../../assets/photo3.jpg";
import img4 from "../../assets/photo4.jpg";
import img5 from "../../assets/photo5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

function Gallery() {
  return (
    <div id="Gallery">
      <div>
        <p className="text-center  text-3xl md:text-4xl  lg:text-5xl p-3 font-bold font-serif my-3">
          Our <span className="text-red-600">Photos</span>
        </p>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-[400px] h-[300px]">
              <img
                src={img1}
                className="rounded-lg object-cover w-full h-full"
                alt="Photo 1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px] h-[300px]">
              <img
                src={img2}
                className="rounded-lg object-cover w-full h-full"
                alt="Photo 1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px] h-[300px]">
              <img
                src={img3}
                className="rounded-lg object-cover w-full h-full"
                alt="Photo 1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px] h-[300px]">
              <img
                src={img4}
                className="rounded-lg object-cover w-full h-full"
                alt="Photo 1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px] h-[300px]">
              <img
                src={img5}
                className="rounded-lg object-cover w-full h-full"
                alt="Photo 1"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Gallery;
