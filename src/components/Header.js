import React from "react";

export default function Header() {
  return (
  <div>
    

    <div className="topbar">
    <div className="container">

      <address className="topbar-item">
        <div className="icon">
          <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
        </div>

        <span className="span">
          1223 Budapest, Platina utca 1/1
        </span>
      </address>

      <div className="separator"></div>

      <address className="topbar-item">
        <div className="icon">
          <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
        </div>

        <span className="span">
          1142 Budapest, Dorozsmai utca 110.
        </span>
      </address>

      <div className="topbar-item item-2">


        <span className="span"></span>
      </div>

      <a href="tel:+36705764224" className="topbar-item link">
        <div className="icon">
          <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
        </div>

        <span className="span">+36 70 576 4224</span>
      </a>

      <div className="separator"></div>

      <a href="mailto:info@tothgabriella.hu" className="topbar-item link">
        <div className="icon">
          <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
        </div>

        <span className="span">info@tothgabriella.hu</span>
      </a>

    </div>
  </div>

  <header className="header" data-header>
    <div className="container">

      <a href="#" className="logo">
        <img src="../image/Toth Gabriella_2.svg" width="300" height="50" alt="TothGabriella - Home"/>
      </a>

      <nav className="navbar" data-navbar>

        <button className="close-btn" aria-label="close menu" data-nav-toggler>
          <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
        </button>

        <a href="#" className="logo">
          <img src="../image/Toth Gabriella_2.svg" width="300" height="50" alt="Grilli - Home"/>
        </a>

        <ul className="navbar-list">

          <li className="navbar-item">
            <a href="#home" className="navbar-link hover-underline active">
              <div className="separator"></div>

              <span className="span">Főoldal</span>
            </a>
          </li>

          <li className="navbar-item">
            <a href="#menu" className="navbar-link hover-underline">
              <div className="separator"></div>

              <span className="span">Rólam</span>
            </a>
          </li>

          <li className="navbar-item">
            <a href="#about" className="navbar-link hover-underline">
              <div className="separator"></div>

              <span className="span">Családterápia</span>
            </a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link hover-underline">
              <div className="separator"></div>

              <span className="span">Párterápia</span>
            </a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link hover-underline">
              <div className="separator"></div>

              <span className="span">Blog</span>
            </a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link hover-underline">
              <div className="separator"></div>

              <span className="span">Helyszínek</span>
            </a>
          </li>

        </ul>


        <div className="text-center">
          <a href="#" className="headline-2 navbar-title">Kapcsolat</a>

          <address className="body-4">
            1223 Budapest <br/>
            Platina utca 1/1
          </address>

          <div className="separator"></div>

          <a href="mailto:info@tothgabriella.hu.com" className="body-4 sidebar-link">info@tothgabriella.hu</a>

          <div className="separator"></div>

          <p className="contact-label">Mobil</p>

          <a href="tel:+36705764224" className="body-4 contact-number hover-underline">
            +36 70 576 4224
          </a>
        </div>

      </nav>

      <a href="#" className="btn btn-secondary">
        <span className="text text-1">Kapcsolat</span>

        <span className="text text-2" aria-hidden="true">Kapcsolat</span>
      </a>

      <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
      </button>

      <div className="overlay" data-nav-toggler data-overlay></div>

    </div>
  </header>

  </div>
  )
}
