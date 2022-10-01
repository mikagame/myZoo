import axios from "axios";
import React, { useEffect, useState } from "react";
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import Animal from "./Animal/Animal";

const Application = () => {
  const [animaux, setAnimaux] = useState("");

  useEffect(() => {
    axios
      .get("https://localhost/siteMika/SERVEURANIMAUX/front/animaux")
      .then((res) => {
        setAnimaux(Object.values(res.data));
      });
  }, []);

  return (
    <div>
      <TitreH1 bgColor="bg-success">Les animaux du parc</TitreH1>
      <div className="container">
        <div className="row no-gutters">
          {animaux &&
            animaux.map((animal) => {
              return (
                <div className="col-12 col-md-6 col-xl-4" key={animal.id}>
                  <Animal {...animal} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Application;
