import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Parc d'animaux MyZoo - Contact";
  }, []);

  return (
    <div>
      <h1>Page de contact</h1>
    </div>
  );
};

export default Contact;
