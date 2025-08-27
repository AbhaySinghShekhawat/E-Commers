import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import img from '../assets/images/img1.avif';
import img1 from '../assets/images/img2.avif';
import img2 from '../assets/images/img3.avif';
import img3 from '../assets/images/img4.avif';
import img4 from '../assets/images/im5.avif';
import img5 from '../assets/images/img5.avif';

// tablet images
import img6 from '../assets/images/rimg1.webp';
import img7 from '../assets/images/rimg2.webp';
import img8 from '../assets/images/rimag3.webp';
import img9 from '../assets/images/rimg3.avif';
import img10 from '../assets/images/rimg4.avif';
import img11 from '../assets/images/rimg5.avif';

// mobile images
import img12 from '../assets/images/mimg1.webp';
import img13 from '../assets/images/mimg2.webp';
import img14 from '../assets/images/ming3.webp';
import img15 from '../assets/images/mimg4.webp';
import img16 from '../assets/images/mimg5.webp';
import img17 from '../assets/images/mimg6.webp';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slides, setSlides] = useState([]);

  const getSlidesForScreen = () => {
    if (window.innerWidth >= 1024) {
      return [
        { id: 1, image: img },
        { id: 2, image: img1 },
        { id: 3, image: img2 },
        { id: 4, image: img3 },
        { id: 5, image: img4 },
        { id: 6, image: img5 },
      ];
    } else if (window.innerWidth >= 768) {
      return [
        { id: 7, image: img6 },
        { id: 8, image: img7 },
        { id: 9, image: img8 },
        { id: 10, image: img9 },
        { id: 11, image: img10 },
        { id: 12, image: img11 },
      ];
    } else {
      return [
        { id: 13, image: img12 },
        { id: 14, image: img13 },
        { id: 15, image: img14 },
        { id: 16, image: img15 },
        { id: 17, image: img16 },
        { id: 18, image: img17 },
      ];
    }
  };

  useEffect(() => {
    setSlides(getSlidesForScreen());
    const handleResize = () => {
      setSlides(getSlidesForScreen());
      setCurrentSlide(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Carousel */}
      <div className="relative w-full h-full">
        <div
          className="flex w-full h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative w-full h-full flex-shrink-0"
            >
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-full "
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 text-white rounded-full hover:bg-white/30 z-10"
      >
        <HiChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 text-white rounded-full hover:bg-white/30 z-10"
      >
        <HiChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="p-2 bg-white/20 text-white rounded-full hover:bg-white/30"
        >
          {isAutoPlaying ? "⏸️" : "▶️"}
        </button>
      </div>
    </div>
  );
};
export default Hero;
