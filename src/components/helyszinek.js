import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Platina from "../image/Platina.jpg"
import Place02 from "../image/helyszin-2.png"
import Place03 from "../image/helyszin-3.png"
import "../CSS/helyszinek.css"

gsap.registerPlugin(ScrollTrigger);

  const AnimatedSection = () => {
  const btnWrapperRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const stickyImageRef = useRef(null);

  useEffect(() => {
    // Ellenőrizzük, hogy a DOM elem valóban elérhető
    if (btnWrapperRef.current) {
      const btnLinks = btnWrapperRef.current.querySelectorAll(".btnlink");

      btnLinks.forEach((btnlink) => {
        const orange = btnlink.querySelector(".orange");

        // Egyedi idővonal minden gombhoz
        const hoverTL = gsap.timeline({ paused: true });
        hoverTL.to(orange, {
          width: "calc(100% + 1.3em)",
          ease: "elastic.out(0.25, 0.3)",
          duration: 0.5,
        });
        hoverTL.to(orange, {
          width: "2em",
          left: "calc(100% - 1.45em)",
          ease: "elastic.out(0.25, 0.3)",
          duration: 0.5,
        });

        // Események hozzáadása
        const onMouseEnter = () => hoverTL.play();
        const onMouseLeave = () => hoverTL.reverse();

        btnlink.addEventListener("mouseenter", onMouseEnter);
        btnlink.addEventListener("mouseleave", onMouseLeave);

        // Cleanup: eltávolítjuk az eseményeket, hogy elkerüljük a memória szivárgást
        return () => {
          btnlink.removeEventListener("mouseenter", onMouseEnter);
          btnlink.removeEventListener("mouseleave", onMouseLeave);
        };
      });
    }

    // ScrollTrigger beállítások
    if (contentWrapperRef.current) {
      const contentHeight = contentWrapperRef.current.scrollHeight;

      ScrollTrigger.create({
        trigger: ".sticky-section",
        start: "top top",
        end: `+=${contentHeight}`,
        pin: stickyImageRef.current,
        scrub: true,
      });

      ScrollTrigger.create({
        trigger: ".next-section",
        start: "top top",
        pinSpacing: false,
      });

      // Cleanup: ScrollTrigger eltávolítása
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []); // Az üres tömb biztosítja, hogy a useEffect csak egyszer fusson, a komponens mountolásakor


  return (
    <div>
      <section className="section place w-100 text-center" aria-label="">
                  
        <div className="container py-16 m-0">
          <div className="heading">
                <h2 className="body-3 place-title">HELYSZÍNEK</h2>
                <h1 className="title-1 place-title-1">Személyes és online konzultáció</h1>
          </div>

          <div className="place-box flex">
            <ul className="grid-place">

              <li className="place-item">
                <div className="place-card">

                  <div className="card-img">
                        <img src={Platina}  className="place-img img-cover" loading="lazy" alt="mozaikcsalád központ"/>
                  </div>
                  <h3 className="place-text">személyes konzultáció </h3>
                  <h2 className="body-3 card-title">Mozaikcsalád Központ (Budapest, XXII.)</h2>
                  <p className="body-4 card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Tempora eos eveniet, magni, labore ipsam fugiat earum doloribus, 
                  </p>

                  <div className="place-info">
                    <div className="info-card flex mb-2">

                      <div className="place-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="none" stroke="#8ca99c" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"/><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
                        </svg>
                      </div>

                      <div className="cont-text">
                        <a href="#" className="body-4 underline text-underline">1223 Budapest, Platina u. 1/1</a>
                      </div>
                    </div>


                    <div className="info-card flex mb-2">
                          <div className="place-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="none" stroke="#8ca99c" stroke-linecap="round" stroke-linejoin="round" stroke-width="36" d="M208 352h-64a96 96 0 0 1 0-192h64m96 0h64a96 96 0 0 1 0 192h-64m-140.71-96h187.42"/>
                                </svg>
                          </div>
                          <div className="cont-text">
                                <a href="http://mozaikcsalad.hu" className="body-4">http://mozaikcsalad.hu</a>
                          </div>
                    </div>
                  </div>
                  
                  
                  <div ref={btnWrapperRef} className="btn-wrapper">
                    <a href="#" className="btnlink" target="_blank" rel="noopener noreferrer">
                      <div className="orange"></div>
                      <span>Kérjen időpontot</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div> 
                </div>
              </li>

              <li className="place-item">
                <div className="place-card">

                  <div className="card-img">
                        <img src={Place02}  className="place-img img-cover" loading="lazy" alt="mozaikcsalád központ"/>
                  </div>
                    <h3 className="place-text">személyes konzultáció </h3>
                    <h2 className="body-3 card-title">Pszichológiai Rendelő (Budapest, XIV.)</h2>
                    <p className="body-4 card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                          Tempora eos eveniet, magni, labore ipsam fugiat earum doloribus, 
                    </p>

                    <div className="place-info">
                      <div className="info-card flex mb-2">

                        <div className="place-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="none" stroke="#8ca99c" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"/><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
                          </svg>
                        </div>
                        <div className="cont-text">
                          <a href="#" className="body-4 underline text-underline">1142 Budapest, Dorozsmai utca 110.</a>
                        </div>
                      </div>

                          

                      <div className="info-card flex mb-2">
                        <div className="place-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="none" stroke="#8ca99c" stroke-linecap="round" stroke-linejoin="round" stroke-width="36" d="M208 352h-64a96 96 0 0 1 0-192h64m96 0h64a96 96 0 0 1 0 192h-64m-140.71-96h187.42"/>
                          </svg>
                        </div>
                        <div className="cont-text">
                          <a href="http://almafa.hu" className="body-4">http://almafa.hu</a>
                        </div>
                      </div>
                    </div>

                      
                    <div ref={btnWrapperRef} className="btn-wrapper">
                      <a href="#" className="btnlink" target="_blank" rel="noopener noreferrer">
                        <div className="orange"></div>
                        <span>Kérjen időpontot</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div> 
                </div>
              </li>

              <li className="place-item">
                    <div className="place-card">

                          <div className="card-img">
                                <img src={Place03}  className="place-img img-cover" loading="lazy" alt="mozaikcsalád központ"/>
                          </div>
                          <h3 className="place-text">online konzultáció </h3>
                          <h2 className="body-3 card-title"></h2>
                          <p className="body-4 card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Tempora eos eveniet, magni, labore ipsam fugiat earum doloribus, 
                          </p>

                          <div className="place-info">
                                <div className="info-card flex gap-3 mb-2">
                                      <div className="place-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                  <path fill="none" stroke="#8ca99c" stroke-linecap="round" stroke-linejoin="round" stroke-width="36" d="M208 352h-64a96 96 0 0 1 0-192h64m96 0h64a96 96 0 0 1 0 192h-64m-140.71-96h187.42"/>
                                            </svg>
                                      </div>
                                      <div className="cont-text">
                                            <div className="body-4">Google Meet, Zoom</div>
                                      </div>
                                </div>
                          </div>

                          <div ref={btnWrapperRef} className="btn-wrapper">
                            <a href="#" className="btnlink" target="_blank" rel="noopener noreferrer">
                              <div className="orange"></div>
                              <span>Kérjen időpontot</span>
                              <i className="fa-solid fa-arrow-right"></i>
                            </a>
                          </div> 
                    </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};
export default AnimatedSection;
