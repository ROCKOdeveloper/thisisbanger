import React from "react";
import "../index.css";

function Footer() {
  return (
    <footer
      className="text-center lg:text-left bg-black text-white"
      id="footer"
    >
      <div className="flex justify-center items-center lg:justify-between p-6 border-y border-white">
        <div className="mr-12 hidden lg:block">
          <span>Tambien estamos en: </span>
        </div>
        <div className="flex justify-center">
          <a
            href="https://twitter.com/this_is_banger?s=11&t=qjymPi6Wo2EgBic9_b3VEg"
            target="_blank"
            className="mr-6 text-white hover:scale-150 transition duration-300 ease-in-out"
            id="twitter"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              className="w-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/this_isbanger/"
            target="_blank"
            className="mr-6 text-white hover:scale-150 transition duration-300 ease-in-out"
            id="instagram"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              className="w-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=573007597945&text=Hola"
            target="_blank"
            className="text-white hover:scale-150 transition duration-300 ease-in-out"
            id="whatsapp"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="whatsapp"
              className="w-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="mx-6 py-10 text-center md:text-left border-white">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="">
            <h1
              className=" text-4xl
                uppercase
                font-semibold
                mb-4
                flex
                items-center  
                justify-center
                md:justify-start
              "
            >
              THIS IS BANGER
            </h1>
            <p>
              Es una visión ambiciosa dedicada a unir multitudes y posicionar
              nuestra ciudad natal en la industria de la musica electronica 
              internacional a nivel nacional-continental por medio de
              nuestras entregas de excelsa calidad. <br /> Siempre buscamos la mejor
              excusa posible para que nuestras entregas tengan una razón
              perfecta de ser e influir profundamente en nuestras multitudes.
            </p>
          </div>
          <div className="">
            <p className="mb-4 text-center">
              <a href="#" className="text-white">
                ESTRATEGIA
              </a>
            </p>
            <p className="mb-4 text-center">
              <a href="#" className="text-white">
                DISEÑO
              </a>
            </p>
            <p className="mb-4 text-center">
              <a href="#" className="text-white">
                SELECCION DE TALENTO
              </a>
            </p>
          </div>
          <div className="">
            <p className="mb-4 text-center">
              <a href="#" className="text-white">
                PRODUCCION
              </a>
            </p>
            <p className="mb-4 text-center">
              <a href="#" className="text-white">
                GESTION DE ARTISTA
              </a>
            </p>
            <p className="mb-4 text-center">
              <a href="#" className="text-white">
                MARKETING
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-black hover:scale-150 transition duration-300 ease-in-out">
        <a className="text-white" href="">
          &#169; Copyright: BANGER &#8482;
        </a>
      </div>
    </footer>
  );
}

export default Footer;
