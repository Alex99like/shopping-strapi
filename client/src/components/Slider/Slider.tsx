import { useState } from "react";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai'
import styles from './Slider.module.scss'

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.container} style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className={styles.icons}>
        <div className={styles.icon} onClick={prevSlide}>
          <AiOutlineDoubleLeft />
        </div>
        <div className={styles.icon} onClick={nextSlide}>
          <AiOutlineDoubleRight />
        </div>
      </div>
    </div>
  );
}
