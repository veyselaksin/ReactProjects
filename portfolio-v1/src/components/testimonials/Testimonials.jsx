import React from 'react'
import './testimonials.css'
import { TESTIMONIALS_DATA } from './constants'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

function Testimonials() {
    return (
        <section id='testimonials'>
            <h5>Reviews from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials-container' modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{ clickable: true }}>
                {TESTIMONIALS_DATA.map((testimonial, index) => (
                    <SwiperSlide className='testimonials' key={index}>
                        <div className='client-avatar'>
                            <img src={testimonial.avatar} alt='' />
                        </div>
                        <h5 className='client-name'>{testimonial.name}</h5>
                        <small className='client-review'>{testimonial.review}</small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Testimonials
