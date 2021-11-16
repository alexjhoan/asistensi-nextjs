import React from 'react'
import Background from '../components/Background'
import Nav from '../components/Nav'
import { SwiperSlide} from 'swiper/react'
import Swiper from 'react-id-swiper'
import Image from 'next/image'




export default function Home() {
  const paramsswiper = {
    spaceBetween: 25,
    freeMode: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  }
  return (
    <React.Fragment>
      <div className="relative overflow-hidden">
        <Background/>
        <Nav/> 
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 md:gap-x-52 md:px-36 "> 
          <div className="sm:mt-20 2xl:mt-32">
            <h1 className="text-3xl md:text-5xl text-white font-extrabold leading-tight mb-6 md:mb-12 mt-0">Special Way <br/>To Realize Your Own <br/>Bussines.</h1>
            <p className="text-xl text-white ">Are you going to make ypur website? Share your idea with us or make it by yourself with our project maker software. Make it happens today!</p>
            <div className="flex flex-col md:flex-row mt-6 md:mt-14 space-y-4 md:space-x-8 md:space-y-0">
              <button className="bg-blue-400 border-2 border-blue-400 border-opacity-100  text-white px-8 py-3 rounded-3xl transition-colors duration-500 ease-in-out hover:bg-transparent">Get it started</button>
              <button className="bg-transparent border-2 border-white border-opacity-100 text-white px-8 py-3 rounded-3xl transition-colors duration-500 ease-in-out hover:bg-white hover:text-purple-700 ">Get it started</button>
            </div>
          </div>
          <div className="">
            <Swiper {...paramsswiper}>
              <SwiperSlide>
                <div><Image
                        src="/images/mobile.png"
                        alt="Picture of the author"
                        width='432'
                        height='720'
                        layout="responsive"
                      />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div><Image
                        src="/images/mobile.png"
                        alt="Picture of the author"
                        width='432'
                        height='720'
                        layout="responsive"
                      />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>        
    </React.Fragment>
  )
}
