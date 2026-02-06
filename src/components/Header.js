import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { throttle } from "lodash";
import ProfilePic01 from "../image/Toth Gabriella_2.svg";
import "../CSS/style.css";

export default function Header() {
  // Az állapotok megfelelő inicializálása
  const [isNavActive, setIsNavActive] = useState(false); // Navigációs menü állapota
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const location = useLocation();
  const [isHeaderHidden, setIsHeaderHidden] = useState(false); // Fejléc elrejtése
  const [isBackTopVisible, setIsBackTopVisible] = useState(false); // Vissza a tetejére gomb
  const [isTopBarHidden, setIsTopBarHidden] = useState(false); // Topbar elrejtése
  const lastScrollPos = useRef(0); // Utolsó görgetési pozíció
  const headerRef = useRef(null); // Fejléc ref, hogy hivatkozhassunk rá
  const topBarRef = useRef(null); // Topbar ref
  

  // Navigációs menü toggler
  const toggleNavbar = () => {
    setIsNavActive((prev) => !prev); // Ha aktív, állítsuk át inaktívra és fordítva
    document.body.classList.toggle("nav-active", !isNavActive); // A navigációs menü megnyitása/zárása
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem); // Aktuális menüelem kiválasztása
    setIsNavActive(false); // Menü bezárása
    document.body.classList.remove("nav-active"); // A `nav-active` osztály eltávolítása
  };

  // Görgetés eseménykezelése
  useEffect(() => {
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isIOS) return; // Ha iOS, akkor ne indítsuk el a görgetés figyelését

    const handleScroll = throttle(() => {
      const currentScrollPos = -document.body.getBoundingClientRect().top;

      // Fejléc elrejtése, ha lefelé görgetsz
      if (currentScrollPos > lastScrollPos.current) {
        setIsHeaderHidden(true); // Ha lefelé görgetsz, rejtse el a fejlécet
        setIsTopBarHidden(true);
      } else {
        setIsHeaderHidden(false); // Ha felfelé görgetsz, mutassa meg
        setIsTopBarHidden(false);
      }

      // Aktív állapot, ha lejjebb vagyunk
      if (currentScrollPos >= 50) {
        setIsBackTopVisible(true); // Ha 50px-nél többet görgetsz, mutasd a "vissza a tetejére" gombot
      } else {
        setIsBackTopVisible(false); // Ha kevesebb mint 50px, ne mutasd
      }

      lastScrollPos.current = currentScrollPos; // Frissítsd az utolsó pozíciót
    }, 200);

    // Görgetés figyelése
    window.addEventListener("scroll", handleScroll);

    // Eseményfigyelő eltávolítása a komponens törlésénél
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Csak egyszer fut le, amikor a komponens először betöltődik

  return (
    <div>
      {/* Topbar */}
      <div ref={topBarRef}
        className={`topbar ${isTopBarHidden ? "hide" : ""}`}>
        <div className="container">
          <address className="topbar-item">
            <div className="icon">
              <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">1223 Budapest, Platina utca 1/1</span>
          </address>

          <div className="separator"></div>

          

          <div className="topbar-item item-2">
            <span className="span"></span>
          </div>

          <Link to="tel:+36705764224" className="topbar-item link">
            <div className="icon">
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">+36 70 576 4224</span>
          </Link>

          <div className="separator"></div>

          <Link to="mailto:ggabriella.toth@gmail.com" className="topbar-item link">
            <div className="icon">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">ggabriella.toth@gmail.com</span>
          </Link>
        </div>
      </div>

      {/* Header */}
      <header
        ref={headerRef} // Itt használjuk a headerRef-et
        className={`header ${isHeaderHidden ? "hide" : ""}`} // Fejléc elrejtése
        data-header
      >
        <div className="container">
          <Link to="/" className="logo">
            <img
              src={ProfilePic01}
              width="300"
              height="50"
              alt="TothGabriella - Home"
            />
          </Link>

          {/* Navbar */}
          <nav className={`navbar ${isNavActive ? "active" : ""}`} data-navbar>
      <button
        className="close-btn"
        aria-label="close menu"
        onClick={toggleNavbar}
      >
        <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
      </button>

      <Link to="/" className="logo">
        <img
          src={ProfilePic01}
          width="300"
          height="50"
          alt="Grilli - Home"
        />
      </Link>

      <ul className="navbar-list">
  {[
    { path: "/", label: "Főoldal" },
    { path: "/about", label: "Rólam" },
    { path: "/csaladterapia", label: "Családterápia" },
    { path: "/parterapia", label: "Párterápia" },
    { path: "/blog", label: "Blog" },
    { path: "/helyszinek", label: "Helyszínek" },
  ].map((item) => (
    <li key={item.path} className="navbar-item">
      <Link
        to={item.path}
        className={`navbar-link hover-underline ${
          location.pathname === item.path ? "active" : ""
        }`}
        onClick={() => handleMenuItemClick(item.path)} // Hívja meg a handleMenuItemClick-et
      >
        <div className="separator"></div>
        <span className="span">{item.label}</span>
      </Link>
    </li>
  ))}
</ul>



            <div className="text-center">
              <Link to="/contact" className="headline-2 navbar-title">
                Kapcsolat
              </Link>
              <address className="body-4">
                1223 Budapest <br />
                Platina utca 1/1
              </address>
              <div className="separator"></div>
              <a
                href="mailto:ggabriella.toth@gmail.com"
                className="body-4 sidebar-link"
              >
                ggabriella.toth@gmail.com
              </a>
              <div className="separator"></div>
              <p className="contact-label">Mobil</p>
              <a
                href="tel:+36705764224"
                className="body-4 contact-number hover-underline"
              >
                +36 70 576 4224
              </a>
            </div>
          </nav>

          <Link to="/contact" className="btn btn-secondary">
            <span className="text text-1">Kapcsolat</span>
            <span className="text text-2" aria-hidden="true">
              Kapcsolat
            </span>
          </Link>

          <button
            className="nav-open-btn"
            aria-label="open menu"
            onClick={toggleNavbar}
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>

          <div
            className={`overlay ${isNavActive ? "active" : ""}`}
            data-overlay
            onClick={toggleNavbar}
          ></div>
        </div>
      </header>
    </div>
  );
}
