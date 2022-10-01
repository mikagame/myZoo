import React from "react";

import facebook from "../../assets/images/footer/fb.png";
import twitter from "../../assets/images/footer/twitter.png";
import youtube from "../../assets/images/footer/youtube.png";

const Footer = () => {
  return (
    <footer className="bg-primary ">
      <div className="text-white text-center">MyZoo - Tous droits réservés</div>
      <div className="row align-items-center text-center pt-2">
        <div className="col-3">
          <a
            href="https://facebook.com"
            rel="noreferrer "
            className="d-block"
            target="_blank"
          >
            <img src={facebook} alt="facebook" className="imgFB" />
          </a>
        </div>
        <div className="col-3">
          <a
            href="https://twitter.com"
            rel="noreferrer "
            className="d-block"
            target="_blank"
          >
            <img src={twitter} alt="twitter" className="imgTwitter" />
          </a>
        </div>
        <div className="col-3">
          <a
            href="https://youtube.com"
            rel="noreferrer "
            className="d-block"
            target="_blank"
          >
            <img src={youtube} alt="youtube" className="imgYoutube" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
