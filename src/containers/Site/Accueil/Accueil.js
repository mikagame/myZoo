import React, { useEffect } from "react";
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import banderole from "../../../assets/images/banderole.png";
import logo from "../../../assets/images/logo.png";

const Accueil = () => {
  useEffect(() => {
    document.title = "Parc d'animaux MyZoo - Accueil";
  }, []);

  return (
    <div>
      <img src={banderole} alt="banderole" className="img-fluid" />
      <TitreH1 bgColor="bg-success">
        Venez visiter le parc d'animaux MyZoo !!!
      </TitreH1>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          inventore id voluptas? Iste, tempore nostrum, soluta saepe doloribus
          tenetur sit natus veritatis eveniet hic veniam quaerat placeat
          eligendi recusandae consectetur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          inventore id voluptas? Iste, tempore nostrum, soluta saepe doloribus
          tenetur sit natus veritatis eveniet hic veniam quaerat placeat
          eligendi recusandae consectetur!
        </p>
        <div className="row no-gutters align-items-center">
          <div className="col-12 col-md-6">
            <img src={logo} alt="logo" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            inventore id voluptas? Iste, tempore nostrum, soluta saepe doloribus
            tenetur sit natus veritatis eveniet hic veniam quaerat placeat
            eligendi recusandae consectetur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quidem inventore id voluptas? Iste,
            tempore nostrum, soluta saepe doloribus tenetur sit natus veritatis
            eveniet hic veniam quaerat placeat eligendi recusandae consectetur!
          </div>
          <div className="col-12 col-md-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            inventore id voluptas? Iste, tempore nostrum, soluta saepe doloribus
            tenetur sit natus veritatis eveniet hic veniam quaerat placeat
            eligendi recusandae consectetur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quidem inventore id voluptas? Iste,
            tempore nostrum, soluta saepe doloribus tenetur sit natus veritatis
            eveniet hic veniam quaerat placeat eligendi recusandae consectetur!
          </div>
          <div className="col-12 col-md-6">
            <img src={logo} alt="logo" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
