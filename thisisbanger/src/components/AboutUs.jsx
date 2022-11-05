import React, {useEffect} from "react";
import Thisis from "../assets/img/thisisbanger.png";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function AboutUs() {

  useEffect(() => {
    const ThisAboutUs = document.querySelector('.ThisAboutUs');
    gsap.from(ThisAboutUs,{
    scrollTrigger: {
      trigger: ThisAboutUs,
      toggleActions: "restart pause resume none",
      start: "top 50%",
      end: "bottom 50%",
    },
    duration: 8,
    ease: 'elastic',
    rotate: 1000,
    })
  }, [])

  return (
    <section className="bg-black text-center lg:text-left" id="aboutUs">
      <div className="container mx-auto xl:px-32 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="mb-12 lg:mb-0">
            <div
              className="z-10 relative block rounded-lg px-6 py-12 lg:-mr-16"
              id="TransparentBox"
            >
              <h2 className="text-white text-5xl font-bold mb-4">
                QUINES SOMOS
              </h2>
              <p className="text-white lowercase">
                Somos una compañía que enfocada al entretenimiento y
                vida nocturna ha creado perfiles multifacéticos con los cuales
                se posiciona como la marca no colectivo más reciente pionera en
                Barranquilla-Colombia y liderados por el visionario empírico
                Javier Bang, superamos los límites de las posibilidades para
                crear y ofrecer experiencias fuera de este mundo. <br /> Javier
                Bang por medio de This Is Banger le da vida a sus ideas
                creativas y sueños para crear algo único y verdaderamente
                espectacular.
              </p>
            </div>
          </div>
          <div>
            <img
              id="thisisbanger"
              src={Thisis}
              className="p-6 lg:w-3/4 h-auto lg:pt-20 ThisAboutUs fixed"
              alt="This Is Banger"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
