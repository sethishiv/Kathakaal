import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay,Keyboard, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './TestimonialsSection.css';
import { FaStar,FaStarHalfAlt, FaRegStar} from 'react-icons/fa';
import { FiChevronLeft, FiChevronDown, FiChevronRight } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Priya S.',
    photo: '/avatars/woman.jpg',
    rating: 3.5,
    feedback: 'Getting approved was super fast and stress-free. Highly recommended!',
  },
  {
    name: 'Amit R.',
    photo: '/avatars/man.jpg',
    rating: 4,
    feedback: 'Easy-to-use interface and helpful support. I felt guided throughout.',
  },
  {
    name: 'Sayan S.',
    photo: '/avatars/man2.jpg',
    rating: 5,
    feedback: 'As a lender, the transparency and returns were exactly what I hoped for.',
  },
  {
    name: 'Ayan D.',
    photo: '/avatars/woman2.jpg',
    rating: 4,
    feedback: 'I never thought getting a loan could be this simple. No hidden steps—just clarity and quick support',
  },
  {
    name: 'Brojesh M.',
    photo: '/avatars/man3.jpg',
    rating: 4.5,
    feedback: 'Kathakaal understood my needs when others didn’t. I got help exactly when I needed it most.',
  },
];

const TestimonialsSection = () => {
  
  return (
    <section id="testimonials" className='testimonials-section'>
      <h2>What Our User Says</h2>
      <div className="testimonial-subtitle">
        <p>Because every story matters</p>
      </div>
      <div className="testimonials-wrapper">
        <div className="swiper-button-prev custom-nav-btn"><FiChevronLeft/></div>
        <div className="swiper-button-next custom-nav-btn"><FiChevronRight/></div>
      <Swiper
        modules={[Pagination, Autoplay,Keyboard, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        keyboard={{ enabled: true }}
        tabIndex={0}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img
                src={testimonial.photo}
                alt={`${testimonial.name}'s photo`}
                className="testimonial-avatar"
              />
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => {
                  const full = i + 1 <= Math.floor(testimonial.rating);
                  const half = i + 0.5 === testimonial.rating;

                  return full ? (
                    <FaStar key={i} className="star-icon filled" />
                  ) : half ? (
                    <FaStarHalfAlt key={i} className="star-icon half" />
                  ) : (
                    <FaRegStar key={i} className="star-icon empty" />
                  );
                })}
              </div>
              <p className="testimonial-feedback">{testimonial.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
