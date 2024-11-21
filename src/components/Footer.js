import React from "react";

export default function Footer() {
  return (
      <footer className="footer section w-100 text-center">
        <div className="container py-16 m-0">
          <div className="footer-top grid-list">
            <div className="footer-bottom">
              <p className="copyright">
              &copy; 2024 gabriellatoth| All Rights Reserved | by <a href="#" target="_blank" className="link">Webrabbit | Adatkezelési tájékoztató</a> 
              </p>
            </div>
          </div>
        </div>
        <a href="#top" className="back-top-btn active" aria-label="back to top" data-back-top-btn>
          <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
        </a>
      </footer>
      
  )
}
