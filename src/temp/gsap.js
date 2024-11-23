
/**
 * button
 */

// Az összes btnlink gombot kiválasztjuk
document.querySelectorAll(".btnlink").forEach(btnlink => {
      let orange = btnlink.querySelector(".orange"); // Minden gombhoz a saját .orange elemét választjuk ki
  
      // Külön idővonal minden egyes gombhoz
      let hoverTL = gsap.timeline({paused: true});
      
      // Az animáció hozzáadása az idővonalhoz
      hoverTL.to(orange, {
          width: "calc(100% + 1.3em)",
          ease: "Elastic.easeOut(0.25)",
          duration: 0.5
      });
      hoverTL.to(orange, {
          width: "2em",
          left: "calc(100% - 1.45em)",
          ease: "Elastic.easeOut(0.25)",
          duration: 0.5
      });
  
      // Események hozzáadása az adott gombhoz
      btnlink.addEventListener("mouseenter", () => {
          hoverTL.play();
      });
  
      btnlink.addEventListener("mouseleave", () => {
          hoverTL.reverse();
      });
  });
  

  // GSAP és ScrollTrigger regisztráció
gsap.registerPlugin(ScrollTrigger);

// A tartalom hosszát figyelembe véve meghatározzuk az animáció időtartamát
const contentWrapper = document.querySelector('.content-wrapper');
const contentHeight = contentWrapper.scrollHeight;

ScrollTrigger.create({
  trigger: '.sticky-section',
  start: 'top top', // Animáció kezdése, amikor a szekció teteje eléri a viewport tetejét
  end: `+=${contentHeight}`, // Animáció vége, amikor a teljes tartalom elgördült
  pin: '.sticky-image', // Bal oldali kép fixálása
  scrub: true, // Görgetéshez szinkronizált animáció
});

// Ha szükséges, a következő szekcióhoz külön ScrollTrigger-t is létrehozhatunk
ScrollTrigger.create({
  trigger: '.next-section',
  start: 'top top',
  pinSpacing: false, // Ez kikapcsolja a pin hatását a következő szekcióban
});
