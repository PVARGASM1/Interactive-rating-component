import React from "react";
import Star from '../src/assets/icon-star.svg'

const Structure = ({ cambiaNota, calificacion }) => {
  const sayHi = () => {
    alert(` Thanks for your rate ${calificacion}`);
    console.log(calificacion)
  };
  return (
    <div className="container">
      <div className="container__text">
        
        <span>
        <img src={Star} alt="Star" />
        </span>
   
        <h1>How did we do?</h1>
       
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <br />
      <div className="container__note">
        
        
          <div 
          className={cambiaNota >= 1 ? 'hover': ''}
          onClick={() => cambiaNota(1)}>1</div>    
          <div 
          className={cambiaNota >= 2 ? 'hover': ''}
          onClick={() => cambiaNota(2)}>2</div>    
          <div onClick={() => cambiaNota(3)}>3</div>
          <div onClick={() => cambiaNota(4)}>4</div>
          <div onClick={() => cambiaNota(5)}>5</div>
          
      </div>

      <br />

      <div className="container__button">
        <button onClick={sayHi}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Structure;