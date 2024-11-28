import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../CSS/rolam.css"

import AboutProfile from "../image/hero-banner-gabi2.png"


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
      <section class="section w-100 bg hero item-center">
          <div class="container flex py-16 m-0 ">
          
            <div class="grid grid-lg gap-12">
                      
              <div class="hero-content">
                <h2 class="headline-1 hero-t pre-wrap-text">Tóth Gabriella</h2>
                <h3 class="title-2 hero-d pre-wrap-text">Pár- és családkonzulens</h3>
                <h3 class="title-2 hero-d pre-wrap-text has-after">Képzésben lévő családterapeuta</h3>  
                <p class="body-4 hero-text pre-wrap-text">Tóth Gabriella, szociális munkás, családkonzulens és képzésben lévő családterapeuta vagyok. Tapasztalataimat elsősorban a családsegítő szolgálatban, családok átmeneti otthonában és magánrendelésemen szereztem, ahol sokféle kihívással találkozva fejleszthettem és finomíthattam szakmai készségeimet. Az emberi kapcsolatok, a családi dinamika és a pszichológia iránti érdeklődésem vezetett el a családterapeuta képzés felé, hogy még hatékonyabban és mélyebben segíthessek azoknak, akik hozzám fordulnak.</p>
                <p class="body-4 hero-text pre-wrap-text">Munkám során arra törekszem, hogy segítsek az embereknek a kapcsolataikban rejlő erőforrások felfedezésében és azok megerősítésében, hogy közösen dolgozzanak ki hatékony megoldásokat a nehézségeikre. Támogatom a párokat és a családokat, hogy sikeresen oldják meg konfliktusaikat, kapcsolódjanak egymáshoz, megfelelő módon vezessék le az elakadást okozó feszültséget. Segítem őket abban, hogy felfedezzék saját történetüket, feltárják a visszatérő viselkedési mintázatokat és újra élvezhessék párkapcsolatukat, szülő-gyermek kapcsolatukat.</p>
                <p class="body-4 hero-text pre-wrap-text">Rendszerszemléletben gondolkodom, dolgozom, ahol a családot és a párkapcsolatot egy egységként kezelem, figyelembe véve mindenkinek az egyéni szerepét és hozzájárulását. Hiszek abban, hogy a családtagok közötti kapcsolatok hatással vannak egymásra, és ezen kapcsolatok erősítése segíthet a nehézségek leküzdésében.</p>
                <p class="body-4 hero-text pre-wrap-text">Az a pillanat, amikor a családok és párok kijutnak a mélypontról, és újra megtalálják az összhangot és a szeretetet, ami összeköti őket – ezek azok a pillanatok, amelyek a legnagyobb örömet jelentik számomra. A fejlődés és a pozitív változás tanújaként lenni kiváltság, amely nap mint nap motivál és inspirál.</p>
                <p class="body-4 hero-text pre-wrap-text">Szenvedéllyel és elkötelezettséggel végzem mindennapi munkámat a családok segítéséért és támogatásáért. Fontosnak tartom a folyamatos szakmai fejlődést, ennek érdekében 2023 őszén pszichológiai tanulmányaimat is elkezdtem. Célom, hogy szakértelmemet és empátiámat összehangolva támogassam azokat, akik életük különböző szakaszaiban találják magukat.</p>       
                {/* Gomb animáció */}
      <div ref={btnWrapperRef} className="btn-wrapper">
        <a href="#" className="btnlink" target="_blank" rel="noopener noreferrer">
          <div className="orange"></div>
          <span>Kérjen időpontot</span>
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div> 
              </div>
          
              <figure class="hero-banner">
                <img src={AboutProfile} alt="tóth gabriella"/>
              </figure>
                       
            </div>  
          </div>
        </section> 

        <section class="section w-100 edu-exp item-center">
          <div class="container py-16 m-0">

            <div class="edu-exp-content">
              <h1 class="title-1 edu-exp-t" data-reveal="left">
                TANULMÁNYOK & TOVÁBBKÉPZÉSEK
              </h1>
            </div>

            <div class="edu-left grid grid-lg gap-12">
              <div class="edu-container">
                <h3 class="title-2 edu-title">Tanulmányok</h3>
                
                <div class="edu-box">
                  <span>(2023 -)</span>
                  <h4 class="body-1 edu-text">Babes-Bolyai Tudomanyegyetem</h4>
                  <p class="body-4 e-text">Pszichológia szak</p>
                </div>

                <div class="edu-box">
                  <span>(2022 -)</span>
                  <h4 class="body-1 edu-text">Magyar Családterápiás Egyesület</h4>
                  <p class="body-4 e-text">Képzésben lévő családterapeuta</p>
                </div>

                <div class="edu-box">
                  <span>(2021 - 2022)</span>
                  <h4 class="body-1 edu-text">Wesley János Lelkészképző Főiskola</h4>
                  <p class="body-4 e-text">Családkonzulens</p>
                </div>

                <div class="edu-box">
                  <span>(2009 - 2013)</span>
                  <h4 class="body-1 edu-text">Wesley János Lelkészképző Főiskola</h4>
                  <p class="body-4 e-text">Szociális munkás</p>
                </div>

                <div class="edu-box">
                  <span>(2000 - 2002)</span>
                  <h4 class="body-1 edu-text">Budapesti Gazdasági Főiskola</h4>
                  <p class="body-4 e-text">Kereskedelmi szakmenedzser képzés</p>
                </div>

              </div>

              <div class="edu-container">
                <h3 class="title-2 edu-title">Továbbképzések</h3>
                
                <div class="edu-box">
                  <span>(2024)</span>
                  <h4 class="body-3 edu-text">Ellyn Bader Phd: "What Do You Say When...? " - webinar</h4>
                  <p class="body-4 e-text"></p>
                </div>

                <div class="edu-box">
                  <span>(2024)</span>
                  <h4 class="body-3 edu-text"> Dr. Árkovits Amaryl: "Őrület, őrület, de van benne rendszer." - pszichotikus családok</h4>
                  <p class="body-4 e-text"></p>
                </div>

                <div class="edu-box">
                  <span>(2024)</span>
                  <h4 class="body-3 edu-text">Dr. Pászthy Bea PhD: "Aki eszik az szerelmet vall az életnek." - Az anorexia nervosa gyógyítása a családban - előadás</h4>
                  <p class="body-4 e-text"></p>
                </div>

                <div class="edu-box">
                  <span>(2023)</span>
                  <h4 class="body-3 edu-text">Ellyn Bader Ph.D. : Cracking the code -   Szembenézés a regresszióval és a trauma átalakítása a párterápiában - webinar</h4>
                  <p class="body-4 e-text"></p>
                </div>

                <div class="edu-box">
                  <span>(2023)</span>
                  <h4 class="body-3 edu-text">2023 Otthon Érzelmi Alaprajza - az EMOTH eszköz rendszerszemléletű alakalmazása workshop</h4>
                  <p class="body-4 e-text"></p>
                </div>

                <div class="edu-box">
                  <span>(2023)</span>
                  <h4 class="body-3 edu-text">Martine Nisse: A családon belüli szexuális bántalmazás rendszerszintű megközelítése</h4>
                  <p class="body-4 e-text"></p>
                </div>

                <div class="edu-box">
                  <span>(2023)</span>
                  <h4 class="body-3 edu-text">Terápia a heteronormativitáson túl: affirmatív szemléletű munka párokkal és családokkal</h4>
                  <p class="body-4 e-text"></p>
                </div>

                <div class="edu-box">
                  <span>(2021)</span>
                  <h4 class="body-3 edu-text">Bogár Zsuzsa: "Hogyan dolgozzunk mozaikcsaládokkal?" - workshop</h4>
                  <p class="body-4 e-text"></p>
                </div>

                <div class="edu-box">
                  <span>(2021)</span>
                  <h4 class="body-3 edu-text">Rendszer-tábla alkalmazása-workshop</h4>
                  <p class="body-4 e-text"></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <a href="#top" className="back-top-btn active" aria-label="back to top" data-back-top-btn>
          <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
        </a>
    </div>
  );
};
export default AnimatedSection;