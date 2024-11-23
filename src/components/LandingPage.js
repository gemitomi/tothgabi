import React, { useEffect, useState } from "react";

import "../CSS/style.css"
import HeroBannerGabi02 from "../image/hero-banner-gabi2.png"
import CsalTerapia from "../image/csaladterapia.png"
import ParTerapia from "../image/parterapia.png"
import HelpSection from "../image/help-section.png"
import Testimonal from "../image/testimonal-img.png"
import TestimonalBG from "../image/testimonal-bg-6.png"
import Citates01 from "../image/citates-1.png"
import ArrowUp from "../image/arrow-up.png"
import ArrowDown from "../image/arrow-down.png"

export default function LandingPage() {
  
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <div>
      <section className="section w-100 bg hero item-center" aria-label="home">
        <div className="container flex py-16 m-0 ">

          <div className="grid grid-lg gap-12">
            
            <div className="hero-content">
              <h2 className="headline-1 hero-t" data-reveal="left">
                Tóth Gabriella
              </h2>
              <h3 className="title-2 hero-d has-after">Pár- és családkonzulens,<br/> Képzésben lévő családterapeuta</h3>
                
              <p className="body-4 hero-text">Amikor  kapcsolatok nehézzé válnak, fontos tudni, hogy nem vagyunk egyedül. 
                Azért vagyok itt, hogy segítsek megérteni a nehézségeket, megtalálni a megoldásokat és helyreállítani a belső harmóniát. 
              </p>
                
              <div className="btn-wrapper">
                <a href="#" className="btnlink" target="_blank">
                  <div className="orange"></div>
                    <span>BŐVEBBEN</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>  
            </div>

            <figure className="hero-banner" data-reveal="right">
              <img src={HeroBannerGabi02} width="590" height="517" loading="eager" alt="tóth gabriella"/>
            </figure>
             
          </div>  
        </div>
      </section>

      <section className="section w-100 section-width-full bg text-center" aria-label="">
        
        <svg id="waves-1"
          style={{ transform: "rotate(180deg)", transition: "0.3s" }}
          viewBox="0 0 1440 120"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg">
            <path style={{ opacity: 1 }} fill="#fdfdf6" d="M0,60L60,50C120,40,240,20,360,28C480,36,600,72,720,82C840,92,960,76,1080,70C1200,64,1320,68,1440,72C1560,
            76,1680,80,1800,78C1920,76,2040,68,2160,64C2280,60,2400,60,2520,66C2640,72,2760,84,2880,78C3000,72,3120,48,3240,32C3360,16,3480,8,3600,12C3720,16,3840,
            32,3960,48C4080,64,4200,80,4320,88C4440,96,4560,96,4680,98C4800,100,4920,104,5040,92C5160,80,5280,52,5400,34C5520,16,5640,8,5760,4C5880,0,6000,0,6120,
            10C6240,20,6360,40,6480,42C6600,44,6720,28,6840,26C6960,24,7080,36,7200,36C7320,36,7440,24,7560,26C7680,28,7800,44,7920,46C8040,48,8160,36,8280,42C8400,
            48,8520,72,8580,84L8640,96L8640,120L8580,120C8520,120,8400,120,8280,120C8160,120,8040,120,7920,120C7800,120,7680,120,7560,120C7440,120,7320,120,7200,120C7080,
            120,6960,120,6840,120C6720,120,6600,120,6480,120C6360,120,6240,120,6120,120C6000,120,5880,120,5760,120C5640,120,5520,120,5400,120C5280,120,5160,120,5040,
            120C4920,120,4800,120,4680,120C4560,120,4440,120,4320,120C4200,120,4080,120,3960,120C3840,120,3720,120,3600,120C3480,120,3360,120,3240,120C3120,120,3000,
            120,2880,120C2760,120,2640,120,2520,120C2400,120,2280,120,2160,120C2040,120,1920,120,1800,120C1680,120,1560,120,1440,120C1320,120,1200,120,1080,120C960,
            120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z">
            </path>
        </svg>
        <div className="new-home-case-study">
          <div className="container py-16 m-0">
            <div className="o-row p-2">
              <div className="o-container gap-12">
                <div className="widget-wrap o-info p-15">
                  <div className="c-heading-block">
                    <h1 className="title-1 o-text pretitle">Családterápia</h1>
                  </div>
                  <div className="c-vc-column-text">
                    <p className="body-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ipsa minima rerum ea amet quae quaerat minus est, 
                      corporis, aspernatur fugit architecto aperiam blanditiis numquam laborum sapiente dolore soluta voluptate repudiandae velit vel eveniet nisi sint rem! Cumque excepturi voluptatum facilis doloremque, enim similique, veritatis velit laudantium quis, omnis reprehenderit!</p>
                  </div>
                  <div className="btn-wrapper">
                    <a href="#" className="btnlink" target="_blank">
                      <div className="orange"></div>
                      <span>BŐVEBBEN</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>  
                </div>
                  
                <div className="o-img p-15">
                  <img src={CsalTerapia} className="img-cover object-contain" alt="családterápia"/>
                </div>

              </div>
            </div>
          </div>
        
        
          <div className="container py-16 m-0">
            <div className="o-row p-2">
              <div className="o-container gap-12">
                <div className="o-img p-15">
                  <img src={ParTerapia} className="img-cover object-contain" alt="párterápia"/>
                </div>

                <div className="widget-wrap o-info-2 p-15">
                  <div className="c-heading-block">
                    <h1 className="title-1 o-text pretitle">Párterápia</h1>
                  </div>
                  <div className="c-vc-column-text">
                    <p className="body-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ipsa minima rerum ea amet quae quaerat minus est, corporis,
                       aspernatur fugit architecto aperiam blanditiis numquam laborum sapiente dolore soluta voluptate repudiandae velit vel eveniet nisi sint rem! Cumque excepturi voluptatum facilis doloremque, enim similique, veritatis velit laudantium quis, omnis reprehenderit!</p>
                  </div>
                  <div className="btn-wrapper">
                    <a href="#" className="btnlink" target="_blank">
                      <div className="orange"></div>
                      <span>BŐVEBBEN</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg id="waves" style={{ transform: "rotate(180deg)", transition: "0.3s" }} viewBox="0 0 1440 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path style={{ opacity: 1 }} fill="#f3eee8" d="M0,12L60,22C120,32,240,52,360,62C480,72,600,72,720,62C840,52,960,32,1080,
          30C1200,28,1320,44,1440,58C1560,72,1680,84,1800,78C1920,72,2040,48,2160,38C2280,28,2400,32,2520,40C2640,48,2760,60,
          2880,60C3000,60,3120,48,3240,42C3360,36,3480,36,3600,38C3720,40,3840,44,3960,48C4080,52,4200,56,4320,58C4440,60,4560,
          60,4680,50C4800,40,4920,20,5040,16C5160,12,5280,24,5400,28C5520,32,5640,28,5760,34C5880,40,6000,56,6120,70C6240,84,6360,
          96,6480,86C6600,76,6720,44,6840,36C6960,28,7080,44,7200,58C7320,72,7440,84,7560,76C7680,68,7800,40,7920,30C8040,20,8160,
          28,8280,26C8400,24,8520,12,8580,6L8640,0L8640,120L8580,120C8520,120,8400,120,8280,120C8160,120,8040,120,7920,120C7800,120,
          7680,120,7560,120C7440,120,7320,120,7200,120C7080,120,6960,120,6840,120C6720,120,6600,120,6480,120C6360,120,6240,120,6120,
          120C6000,120,5880,120,5760,120C5640,120,5520,120,5400,120C5280,120,5160,120,5040,120C4920,120,4800,120,4680,120C4560,120,
          4440,120,4320,120C4200,120,4080,120,3960,120C3840,120,3720,120,3600,120C3480,120,3360,120,3240,120C3120,120,3000,120,2880,
          120C2760,120,2640,120,2520,120C2400,120,2280,120,2160,120C2040,120,1920,120,1800,120C1680,120,1560,120,1440,120C1320,120,
          1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path></svg>
        
      </section>
      



      
      <section className="section w-100 sec2 bg-b left-right-sec" aria-label="">
        
        <div className="container py-16 m-0">
          <div className="sec2-inner row p-2 gap-12">

            <div className="help-text">
              <p className="title-1 help pretitle">Milyen helyzetekben tudok segíteni?</p>
              <div className="text-inner">
                
                <div className="body-4">
                  <ul className="help-list">
                    <li className="h-list-has-before">családdá válás (leválás a szülőkről, gyermek születése, szülővé, nagyszülővé válás)</li>
                    <li className="h-list-has-before">gyermeknevelési nehézségek, szülői elakadások</li>
                    <li className="h-list-has-before">család/munka/élet közötti egyensúlyvesztés</li>
                    <li className="h-list-has-before">étkezési zavarok a családban</li>
                    <li className="h-list-has-before">identitáskeresés krízise</li>
                    <li className="h-list-has-before">kommunikációs nehézségek, visszatérő megoldatlan viták</li>
                    <li className="h-list-has-before">válás</li>
                    <li className="h-list-has-before">hűtlenség</li>
                    <li className="h-list-has-before">mozaik családá válás</li>
                    <li className="h-list-has-before">gyász, veszteség feldolgozása a családban</li>
                    <li className="h-list-has-before">szenvedélybetegség a családban</li>
                  </ul>
                  <div className="btn-wrapper">
                    <a href="#" className="btnlink" target="_blank">
                      <div className="orange"></div>
                      <span>KÉRJEN IDŐPONTOT</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>  
                </div>
              </div>
            </div>

            <div className="h-img">
              <div className="img"><img src={HelpSection} alt="segitség"/></div>
            </div>

          </div>
        </div>
      </section>

      

     
      <section className="section w-100 section-width-full bg text-center">
      <svg
        id="waves-1"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 120"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path style={{ opacity: 1 }} fill="#f3eee8"
          d="M0,60L60,50C120,40,240,20,360,28C480,36,600,72,720,82C840,92,960,76,1080,70C1200,64,1320,68,1440,72C1560,
          76,1680,80,1800,78C1920,76,2040,68,2160,64C2280,60,2400,60,2520,66C2640,72,2760,84,2880,78C3000,72,3120,48,3240,32C3360,16,3480,8,3600,12C3720,16,3840,
          32,3960,48C4080,64,4200,80,4320,88C4440,96,4560,96,4680,98C4800,100,4920,104,5040,92C5160,80,5280,52,5400,34C5520,16,5640,8,5760,4C5880,0,6000,0,6120,
          10C6240,20,6360,40,6480,42C6600,44,6720,28,6840,26C6960,24,7080,36,7200,36C7320,36,7440,24,7560,26C7680,28,7800,44,7920,46C8040,48,8160,36,8280,42C8400,
          48,8520,72,8580,84L8640,96L8640,120L8580,120C8520,120,8400,120,8280,120C8160,120,8040,120,7920,120C7800,120,7680,120,7560,120C7440,120,7320,120,7200,120C7080,
          120,6960,120,6840,120C6720,120,6600,120,6480,120C6360,120,6240,120,6120,120C6000,120,5880,120,5760,120C5640,120,5520,120,5400,120C5280,120,5160,120,5040,
          120C4920,120,4800,120,4680,120C4560,120,4440,120,4320,120C4200,120,4080,120,3960,120C3840,120,3720,120,3600,120C3480,120,3360,120,3240,120C3120,120,3000,
          120,2880,120C2760,120,2640,120,2520,120C2400,120,2280,120,2160,120C2040,120,1920,120,1800,120C1680,120,1560,120,1440,120C1320,120,1200,120,1080,120C960,
          120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z">
        </path>
      </svg>
        <div className="testimonal">
          <div className="container py-16 m-0">
            
            <div className="headline-1 testimonials-heading">
              <h2 className="title-1 section-title has-after">Ügyfeleim visszajelzései</h2>
            </div>
          
          
            <div className="grid grid-xl gap-6 m-0">
              <div className=" image-container">
                <img src={Testimonal} className="testimonal-profimg" alt="vélemények"/>
              </div>

              <div className="revive-content-box flex flex-col">
                <div className="revive-box flex flex-col">
                  <div id="slide">
                    <div className="content-card">
                      <div className="testimonal-profile">
                        <img src={TestimonalBG} alt="idézőjel"/>
                        <p className="body-2 first-t">P. Anna.</p>
                      </div>
                      
                      <p className="body-4 pre-wrap-text">2022. Tavaszán, 16 év után felfordulás az életünk és válságba került a házasságunk. Úgy éreztem, hogy meg kell próbálnunk egy párterápiát. Így elkezdtünk járni Gabihoz. Életünk egyik legjobb döntése volt. A párom szkeptikus volt, de a mai napig azt állítja, hogy ez életünk egyik nagyon jó döntése volt. Mindketten úgy gondoljuk, hogy a terápia nélkül nem lett volna biztos az Újra kezdés, nem jött volna rendbe a házasságunk. Nem csak egymást ismertük meg még jobban, de saját magunknak is okoztunk meglepetés. Rögös volt az út, de úgy  hisszük, hogy most már sínen vagyunk!</p>
                      <p className="body-4 pre-wrap-text">Köszönjük Gabi!</p>
                      
                    </div>
                    <div className="content-card">
                      <div className="testimonal-profile">
                        <img src={Citates01} className="" alt="idézőjel"/>
                        <p className="body-2 first-t">L. Dóra.</p>
                      </div>
                        
                      <p className="body-4 pre-wrap-text">Gabriellával akkor találkoztunk, amikor kis családunknak arra a legnagyobb szüksége volt. Személyében olyan szakembert ismerhettünk meg, aki végtelen nyugalommal és empátiával de szoros iránymutatással tud végigvezetni az önismeret és a család működésének, megismerésének útján.  Segítségével könnyebb volt a problémás területekkel való szembenézés, majd az azt követő megoldás közös megtalálása is.</p>
                      <p className="body-4 pre-wrap-text">Köszönettel tartozunk Neki, hogy segített visszatalálni a régebbi, jól működő családunkhoz.</p>
                      
                    </div>
                  </div>
                  <div className="sidebar">
                    <img src={ArrowUp} id="upArrow"/>
                    <img src={ArrowDown} id="downArrow"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      
      <section className="section w-100 contact text-center" aria-label="">
        <div className="contacts">
          <div className="container py-16 m-0">
            <div className="heading">
            <h2 className="title-1 contact-t has-after">Kapcsolat</h2></div>

            <div className="grid grid-xl gap-12 item-center">
              <div className="info-container">
                <h1 className="body-1 contact-d">Lépjen kapcsolatba velem!</h1>
                <p className="body-4 contact-c pre-wrap-text">Ha úgy érzi, hogy segítségre van szüksége, vagy csak szeretne többet megtudni a szolgáltatásaimról, kérem, vegye fel a kapcsolatot velem!</p>
                <div className="box-container">

                  <div className="box flex ">
                    <a href="#"><i className="fas fa-map"></i>Budapest, Budaörs</a>
                  </div>
                  <div className="box flex">
                    <a href="#"><i className="fas fa-envelope"></i>info@gabriellatoth.com</a>
                  </div>
                  <div className="box flex">
                    <a href="#"><i className="fas fa-phone"></i>+36 70 576 4224</a>
                  </div>
                  
                </div>
                <div className="share">
                  <a href="#" className="fab fa-facebook-f"></a>
                  <a href="#" className="fab fa-instagram"></a>
                  <a href="#" className="fab fa-linkedin"></a>
                </div>
              </div>

              <form action="">
                <div className="contact-input-box">
                  <input type="text" name="" value="" placeholder="Név"/> 
                  
                </div>
            
                <div className="contact-input-box">
                  <input type="text" name="" value="" placeholder="E-mail"/>
                </div>

                <div className="contact-input-box">
                  <input type="text" name="" value="" placeholder="Mobil"/>
                </div>

                <div className="contact-input-box">
                  <textarea name="name" rows="4" cols="80" placeholder="Írjon üzenetet!"></textarea>
                </div>
                <div className="contact-input-box">
                  <input type="submit" className="send-btn" name="" value="Küldés"/>
                </div>
              </form>

            </div>

          </div>
        </div>
      </section>
      <a href="#top" className="back-top-btn active" aria-label="back to top" data-back-top-btn>
          <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
        </a>
    </div>
  )
}