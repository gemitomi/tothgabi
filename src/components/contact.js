import React from "react";

import "../CSS/kapcsolat.css"

export default function contact() {
  return (
    <div>
      <section className="section w-100 contact-section bg text-center" aria-label="">
        <div className="contacts">
          <div className="container py-16 m-0">
            <div className="heading">
            <h2 className="title-1 contact-t has-after">Kapcsolat</h2>

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

              <form action="mail.php" method="POST">
                <div className="contact-input-box">
                  <input type="text" id="name" name="name" placeholder="Név" required="required"/>                   
                </div>
            
                <div className="contact-input-box">
                  <input type="email" id="email" name="email" placeholder="E-mail" required="required"/>
                </div>

                <div className="contact-input-box">
                  <input type="text" id="mobil" name="mobil" placeholder="Mobil" required="required"/>
                </div>

                <div className="contact-input-box">
                  <textarea name="message" rows="4" cols="80" placeholder="Írjon üzenetet!" required="required"></textarea>
                </div>
                <div className="contact-input-box">
                  <input type="submit" className="send-btn" id="send" name="send" value="Küldés"/>
                </div>
              </form>

            </div>

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
