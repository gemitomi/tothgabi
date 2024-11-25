import React, { useEffect, useRef } from "react";
import "../CSS/csaladterapia.css"

import Check01 from "../image/check-1.png"
import Check02 from "../image/check-2.png"
import Check03 from "../image/check-3.png"
import Check04 from "../image/check-4.png"
import Therapy01 from "../image/family-therapy.png"
import AskHelp from "../image/segitseg-keres.jpg"


  
  export default function Csaladterapia() {
  return (
  <div>
    <section className="section w-100 section-faco bg text-center">
          <div className="container py-16 m-0">
            <div className="faco-content-wrapper m-0">
           
              <div className="family-content grid grid-lg gap-12">
               
                <div className="faco-left flex flex-col">
                  <div className="faco-block-content">
                    <h2 className="title-3 pre-wrap-text">A család az első helyen áll minden körülmények között</h2>
                  </div>
                </div>
                
                <div className="faco-right flex flex-col">
                  <div className="faco-block-content">
                    <h2 className="title-1 faco-title pretitle">Családterápia</h2>
                  </div>
                  <div className="faco-text">
                    <p className="body-4 pre-wrap-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupt molestiae assumenda? Veritatis volup cum totam incidunt nesciunt doloribus perspici velit explicabo odit distinctio commodi odio.</p>    
                    <p className="body-4 pre-wrap-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, inventore!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section w-100 bg text-center">
          <div className="container py-16 m-0">
            <div className="faco-content-wrapper m-0">
              <div className="faco-content grid grid-lg gap-12">
             
                <div className="faco-left flex flex-col">
                  <div className="famco-text">
                    <p className="title-1 famco-title pretitle">Milyen esetekben ajánlott a családterápia?</p>
                  </div>

                  <div className="c-text-inner">

                    <div className="c-content-m">
                      <div className="check-img-content">
                        <img className="check-img" src={Check01} alt="check"/>
                      </div>
                      <div className="text-wrapper">
                        <p className="body-4 c-how-text">
                          <strong>Lorem ipsum dolor</strong>
                          Sit amet consectetur adipisicing elit.</p> 
                                            
                      </div>
                    </div>

                    <div className="c-content-m">
                      <div className="check-img-content">
                        <img className="check-img" src={Check01} alt="check"/>
                      </div>
                      <div className="text-wrapper">
                        <p className="body-4 c-how-text">
                          <strong>Lorem ipsum</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aliasgades lop percept fat hors.</p>                                     
                      </div>
                    </div>

                    <div className="c-content-m">
                      <div className="check-img-content">
                        <img className="check-img" src={Check01} alt="check"/>
                      </div>
                      <div className="text-wrapper">
                        <p className="body-4 c-how-text">
                          <strong>Lorem ipsum dolor sit amet.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aliasgades lop percept fat hors.</p>                                     
                      </div>
                    </div>

                    <div className="c-content-m">
                      <div className="check-img-content">
                        <img className="check-img" src={Check01} alt="check"/>
                      </div>
                      <div className="text-wrapper">
                        <p className="body-4 c-how-text">
                          <strong>Lorem ipsum dolor sit amet.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aliasgades lop percept fat hors.</p>                                     
                      </div>
                    </div> 
                  </div>
                </div>

                <div className="famco-right flex flex-col">
                  <div className="famco-img">
                    <img src={Therapy01} className="img-cover object-contain" loading="lazy" alt="családterápia"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-q w-100 text-center">
          <div className="container py-16 m-0">
            <div className="content-q-wrapper flex flex-col">
              <h3 className="body-2 title-q pre-wrap-text">"Nem tehetek érted semmit, csak dolgozhatok magamon. Te sem tehetsz értem semmit, csak dolgozhatsz magadon."</h3>
              <p className="body-4 text-q"><strong>/Ram Dass/</strong></p>
            </div>
          </div>
        </section>
    
        <section className="section w-100 call-section text-center">
          <div className="container flex py-16 m-0">

            <div className="grid grid-xl gap-12">
              <div className="call-block">
                <img  src={AskHelp} className="call-img-box" alt=""/>
              </div>

              <div className="call-block-content">
                <h3 className="title-2 call-d"> Hívjon még ma, és foglaljon időpontot!</h3>
                <a href="tel:+36705764224" className="call-button">
                  Hívjon fel!
                </a>
                
              </div>
            </div>
          </div>

        </section>

        <section className="section w-100 price-bg  text-center" id="price">
          <svg id="waves-3" style={{ transform: "rotate(180deg)", transition: "0.3s" }} viewBox="0 0 1440 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path style={{opacity:1}} fill="#fdfdf6" d="M0,60L60,50C120,40,240,20,360,28C480,36,600,72,720,82C840,92,960,76,1080,70C1200,64,1320,68,1440,72C1560,
            76,1680,80,1800,78C1920,76,2040,68,2160,64C2280,60,2400,60,2520,66C2640,72,2760,84,2880,78C3000,72,3120,48,3240,32C3360,16,3480,8,3600,12C3720,16,3840,
            32,3960,48C4080,64,4200,80,4320,88C4440,96,4560,96,4680,98C4800,100,4920,104,5040,92C5160,80,5280,52,5400,34C5520,16,5640,8,5760,4C5880,0,6000,0,6120,
            10C6240,20,6360,40,6480,42C6600,44,6720,28,6840,26C6960,24,7080,36,7200,36C7320,36,7440,24,7560,26C7680,28,7800,44,7920,46C8040,48,8160,36,8280,42C8400,
            48,8520,72,8580,84L8640,96L8640,120L8580,120C8520,120,8400,120,8280,120C8160,120,8040,120,7920,120C7800,120,7680,120,7560,120C7440,120,7320,120,7200,120C7080,
            120,6960,120,6840,120C6720,120,6600,120,6480,120C6360,120,6240,120,6120,120C6000,120,5880,120,5760,120C5640,120,5520,120,5400,120C5280,120,5160,120,5040,
            120C4920,120,4800,120,4680,120C4560,120,4440,120,4320,120C4200,120,4080,120,3960,120C3840,120,3720,120,3600,120C3480,120,3360,120,3240,120C3120,120,3000,
            120,2880,120C2760,120,2640,120,2520,120C2400,120,2280,120,2160,120C2040,120,1920,120,1800,120C1680,120,1560,120,1440,120C1320,120,1200,120,1080,120C960,
            120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path></svg>
          <div className="container flex py-16 m-0 prices">
      
            <div className="grid grid-xl gap-12 prices-pad m-0">
              
              <div className="prices-wrap flex flex-col">
                <div className="time-text">
                  <h2 className="title-1 time pre-wrap-text">Időpontfoglalás menete</h2>
                </div>
                <div className="c-text-inner">
                  
                  <div className="c-content-m">
                    <div className="check-img-content">
                      <img className="check-img" src={Check02} alt="check"/>
                    </div>
                    <div className="text-wrapper">
                      <p className="body-4 c-how-text pre-wrap-text">Telefonon vagy e-mailben vegye fel velem a kapcsolatot, melynek során megbeszéljük, hogyan tudok segíteni.</p> 
                                          
                    </div>
                  </div>

                  <div className="c-content-m">
                    <div className="check-img-content">
                      <img className="check-img" src={Check03} alt="check"/>
                    </div>
                    <div className="text-wrapper">
                      <p className="body-4 c-how-text pre-wrap-text">Megbeszéljük a részleteket, és kölcsönösen megegyezünk az első alkalom időpontjában és helyszínében.</p> 
                                          
                    </div>
                  </div>
                  <div className="c-content-m">
                    <div className="check-img-content">
                      <img className="check-img" src={Check04} alt="check"/>
                    </div>
                    <div className="text-wrapper">
                      <p className="body-4 c-how-text pre-wrap-text">A megbeszélt időpontokat legkésőbb 24 órával a kezdés előtt lehet lemondani, ellenkező esetben az alkalom megtartottnak minősül.</p> 
                                          
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="plan">
                <div className="plan-wrap gap-12">
                  <div id="price-couple" className="price-card">
                        <div className="plan-details">
                              <div className="plan-name">
                              <h2>
                              <strong>CSALÁDTERÁPIA</strong>
                              </h2>
                              </div>
                              <p className="plan-save">EGYÉNI VEZETÉSSEL</p>
                        </div>
                        <div className="the-price">
                              <h1 className="price-1 flex">
                              <span className="body-1 green">23.000 Ft </span>
                              <span className="body-3 grau">/alkalom </span>
                              </h1>
                        </div>
                        <hr/>
                        <div className="the-details">
                              
                              <p className="flex items-center body-4 mb-2">
                              <span className="online">
                              <svg fill="none" stroke="#708d7d" stroke-linejoin="round" stroke-linecap="round" xmlns="http://www.w3.org/2000svg" viewBox="0 0 32 24">
                                    <path d="m4 12 8 8L28 4"></path>
                              </svg>
                              </span>
                              Személyesen (&nbsp;
                              <a className="underline text-underline" href="#">helyszínek</a>
                              &nbsp;)
                              </p>
                              <p className="flex items-center body-4 mb-2">
                              <span className="online">
                              <svg fill="none" stroke="#708d7d" stroke-linejoin="round" stroke-linecap="round" xmlns="http://www.w3.org/2000svg" viewBox="0 0 32 24">
                                    <path d="m4 12 8 8L28 4"></path>
                              </svg>
                              </span>
                              90 perc
                              /alkalom
                              </p>
      
                        </div>
                  </div>
      
                  <div id="price-co" className="price-card">
                    <div className="plan-details">
                              <div className="plan-name">
                              <h2>
                              <strong>CSALÁDTERÁPIA</strong>
                              </h2>
                              </div>
                              <p className="plan-save">CO-TERAPEUTÁVAL</p>
                    </div>
                    <div className="the-price">
                      <h1 className="price-1 flex">
                        <span className="body-1 green">32.000 Ft </span>
                        <span className="body-3 grau">/alkalom</span>
                      </h1>
                    </div>
                    <hr/>
                    <div className="the-details">
                      
                      <p className="flex items-center body-4 mb-2">
                        <span className="online">
                          <svg fill="none" stroke="#708d7d" stroke-linejoin="round" stroke-linecap="round" xmlns="http://www.w3.org/2000svg" viewBox="0 0 32 24">
                            <path d="m4 12 8 8L28 4"></path>
                          </svg>
                        </span>
                          Személyesen (&nbsp;
                          <a className="underline text-underline" href="#">helyszínek</a>
                            &nbsp;)
                      </p>
                      <p className="flex items-center body-4 mb-2">
                        <span className="online">
                          <svg fill="none" stroke="#708d7d" stroke-linejoin="round" stroke-linecap="round" xmlns="http://www.w3.org/2000svg" viewBox="0 0 32 24">
                            <path d="m4 12 8 8L28 4"></path>
                          </svg>
                        </span>
                          90 perc
                          /alkalom
                      </p>
                    </div>
                  </div>

                  <div id="price-online" className="price-card">
                    <div className="plan-details">
                          <div className="plan-name">
                          <h2>
                          <strong>CSALÁDTERÁPIA</strong>
                          </h2>
                          </div>
                          <p className="plan-save">ONLINE</p>
                    </div>
                    <div className="the-price">
                          <h1 className="price-1 flex">
                          <span className="body-1 green">20.000 Ft </span>
                          <span className="body-3 grau">/alkalom </span>
                          <span className="body-3 grau">/ 90 perc </span>
                          </h1>
                    </div>
                    <hr/>
                    <div className="the-details">
                          <p className="flex items-center body-4 mb-2">
                          <span className="online">
                          <svg fill="none" stroke="#708d7d" stroke-linejoin="round" stroke-linecap="round" xmlns="http://www.w3.org/2000svg" viewBox="0 0 32 24">
                                <path d="m4 12 8 8L28 4"></path>
                          </svg>
                          </span>
                          Online (Google Meet, Zoom)
                          </p>
                          <p className="flex items-center body-4 mb-2">
                          <span className="online">
                          <svg fill="none" stroke="#708d7d" stroke-linejoin="round" stroke-linecap="round" xmlns="http://www.w3.org/2000svg" viewBox="0 0 32 24">
                                <path d="m4 12 8 8L28 4"></path>
                          </svg>
                          </span>
                          Egyéni vezetéssel
                          </p>
                          <p className="flex items-center body-4 mb-2">
                          <span className="online">
                          <svg fill="none" stroke="#708d7d" stroke-linejoin="round" stroke-linecap="round" xmlns="http://www.w3.org/2000svg" viewBox="0 0 32 24">
                                <path d="m4 12 8 8L28 4"></path>
                          </svg>
                          </span>
                          90 perc
                          /alkalom
                          </p>
  
                    </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
  )
  
}
/*export default AnimatedSection;*/