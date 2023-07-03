import React from "react";
import Thanks from '../src/assets/illustration-thank-you.svg'

const ThanksCard = ({ calificacion }) => {
  return (
    <div className="container-thanks">
    <div className="container__text">
      
      <section className="container__img">
        <img src={Thanks} alt="Thanks" />
       <p> You selected {calificacion} out of 5</p> 

      </section>

      <section className="text">
        <h2>Thank you!</h2>
        <p>
          We apprecited you taking the time to give a rating.
          If you ever need more support, don't hesitate to get in touch!!
        </p>
      </section>
    </div>
   
  </div>
  );
};

export default ThanksCard;
