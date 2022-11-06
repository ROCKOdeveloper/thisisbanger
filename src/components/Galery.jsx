import React, {useEffect} from "react"
import jb1 from "../assets/img/JAVIERBANG1.jpg"
import jb2 from "../assets/img/JAVIERBANG2.jpg"
import jb3 from "../assets/img/JAVIERBANG3.jpg"
import jb4 from "../assets/img/JAVIERBANG4.jpg"
import jb5 from "../assets/img/JAVIERBANG5.jpg"
import jb6 from "../assets/img/JAVIERBANG6.jpg"
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Galery() {

  useEffect(() => {
    gsap.from("div > .arriba", {
      scrollTrigger: {
        trigger: '.arriba',
        start: "top center",
        end: "bottom 10%",
      },
      y: -300,
      duration: 5,
    })
  },[])

  useEffect(() => {
  gsap.from("div > .abajo", {
    scrollTrigger: {
      trigger: '.abajo',
      start: "top center",
      end: "bottom 10%",
    },
    y: 300,
    duration: 5,
  })
  },[])

  return (
    <section className="overflow-hidden" id="galery">
      <div className="container px-5 py-5 mx-auto lg:py-10 lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out rounded-lg arriba"
                src={jb1}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out rounded-lg arriba"
                src={jb2}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out rounded-lg abajo"
                src={jb3}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out rounded-lg arriba"
                src={jb4}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out rounded-lg abajo"
                src={jb5}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out rounded-lg abajo"
                src={jb6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Galery;
