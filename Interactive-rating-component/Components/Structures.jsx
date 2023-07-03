import React from "react";
import Star from '../src/assets/icon-star.svg'

const Structure = ({rate, onClick}) => {

  return (
    <div className="container">
      <div className="container__text">
        
        <section>
        <img src={Star} alt="Star" />
        </section>
   
        <h1>How did we do?</h1>
       
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <br />
      <div className="container__note">
        {rate}
      </div>

      <br />

      <div className="container__button">
        <button onClick={onClick}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Structure;