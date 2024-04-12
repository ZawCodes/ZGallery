import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import images from "utils/images.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

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
    <motion.div
      className="overlay"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "100vh" }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={cancel}
        alt="close"
        className="cancel"
        onClick={() => {
          navigate("..");
        }}
      />
      <div className="detail">
        <motion.div
          className="swiper-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
                      <p>{image.tags}</p>
                    </div>
                    <div className="info-item">
                      <h3>Uploaded Date</h3>
                      <p>{image.uploaded_date}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
