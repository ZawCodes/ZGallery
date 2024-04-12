import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import images from "utils/images.js";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import cancel from "./assets/cancel.png";
import "./index.scss";

const index = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  let { id } = useParams();

  return (
    <div className="overlay">
      <img
        src={cancel}
        alt="close"
        className="cancel"
        onClick={() => {
          navigate("..");
        }}
      />
      <div className="detail">
        <div className="swiper-container">
          <Swiper
            ref={swiperRef}
            initialSlide={id - 1}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="image-card">
                  <div className="image-container">
                    <img src={image.src} alt="random" />
                  </div>
                  <div className="info">
                    <div className="info-item">
                      <h3>Tags</h3>
                      <p>#cats #pets #animals #cute</p>
                    </div>
                    <div className="info-item">
                      <h3>Uploaded Date</h3>
                      <p>2021-09-12</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default index;
