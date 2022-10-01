import React from "react";
import Bouton from "../../../../components/UI/Bouton/Bouton";

const Animal = (props) => {
  return (
    <div className="card mb-3">
      <h3 className="card-header text-center">
        {props.id} - {props.nom}
      </h3>
      <h4 className="card-text text-center" style={{ margin: "20px 0 10px 0" }}>
        {props.description}
      </h4>

      <img
        src={props.image}
        alt={props.nom}
        style={{
          height: "100px",
          width: "100%",
          display: "block",
          objectFit: "contain",
          margin: "10px 0 10px 0",
        }}
        className="img-fluid"
      />

      <div className="card-body">
        <h4 id="ligne">
          <h4 style={{ margin: "0 15px 0 0" }}>Famille :</h4>
          <Bouton typeBtn="btn-primary">
            {props.famille.libelleFamille.toUpperCase()}
          </Bouton>
        </h4>
        <div style={{ marginTop: "20px" }}>
          {props.famille.descriptionFamille}
        </div>
        <h4 id="ligne">
          <h4 style={{ margin: "0 15px 0 0" }}>Famille :</h4>
        </h4>
        <Bouton typeBtn="btn-primary">
          {props.famille.libelleFamille.toUpperCase()}
        </Bouton>
      </div>
    </div>
  );
};

export default Animal;
