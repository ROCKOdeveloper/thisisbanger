import React from "react";
import demo from "../assets/img/JAVIERBANG.jpeg";

function Shows() {
  return (
    <div className="container mx-auto px-auto rounded-xl lg:my-24" id="NuestrosShows">
      <section className="text-white text-center">
        <h2 className="text-5xl font-bold py-10 text-center">
          NUESTROS SHOWS
        </h2>
        <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
          <div className="mb-6 lg:mb-0">
            <div className="relative block bg-white m-4 rounded-lg" id="TransparentBox">
              <div className="flex">
                <div
                  className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg mx-4 -mt-4"
                >
                  <img
                    src={demo}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="p-6 text-white">
                <p className="mb-4">
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim
                  elementum. Donec a ullamcorper diam.
                </p>
                <a
                  href="#!"
                  className="inline-block px-4 py-1 bg-white text-black rounded-lg shadow-2xl hover:scale-110 transition duration-300 ease-in-out"
                >
                  Ver más 
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shows;
