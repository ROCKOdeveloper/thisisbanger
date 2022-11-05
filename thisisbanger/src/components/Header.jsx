import React, {useEffect}  from "react";
import logo from "../assets/img/Logo.png";
import {gsap} from 'gsap'

function Header() {

  useEffect(() => {
    gsap.to("div > .menu" ,{
      duration: 3,
      scale: 1,
      opacity: 1,
      stagger: 1,
    });
  }, [])

  return (
    <nav className="absolute flex bg-transparent justify-items-center items-center justify-between w-full z-10 lg:h-1/5">
      <img
        className="w-3/5 m-auto lg:w-1/6 lg:m-0 lg:justify-start"
        src={logo}
        alt="logo this is banger"
      />
      <div className="hidden lg:flex space-x-4 space-x-reverse mr-10">
        <div className="flex items-center">
          <a className="mx-2 text-4xl underline decoration-transparent hover:decoration-inherit transition duration-1000 ease-in-out opacity-0 menu" href="#aboutUs">
            QUIENES SOMOS
          </a>
          <a className="mx-2 text-4xl underline decoration-transparent hover:decoration-inherit transition duration-1000 ease-in-out opacity-0 menu" href="#NuestrosShows">
            NUESTROS SHOWS
          </a>
          <a className="mx-2 text-4xl underline decoration-transparent hover:decoration-inherit transition duration-1000 ease-in-out opacity-0 menu" href="#team">
            EQUIPO BANGER
          </a>
          <a className="mx-2 text-4xl underline decoration-transparent hover:decoration-inherit transition duration-1000 ease-in-out opacity-0 menu" href="#footer">
            CONTACTANOS
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
