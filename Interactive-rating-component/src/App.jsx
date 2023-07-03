import { useState } from 'react'
import Structures from '../Components/Structures'
import ThanksCard from '../Components/ThanksCard'
import '../src/Styles/styles.scss'
import Rate from '../Components/Rate';


  function App() {
    const [selected, setSelected] =useState(false);
    const [nota, setNota] = useState(0);
    const [showThanks, setShowThanks] =useState(false);
    const handleClick=(value) => {
      setShowThanks(value);
    }
    const cambiaNota = (calificacion) => {
      setNota(calificacion);
      setSelected(!selected);
    };
  
    return (
      <div>
        {showThanks ? 
         <ThanksCard calificacion={nota} />: 
         <Structures 
          calificacion = {nota} 
          rate ={[1, 2, 3, 4, 5].map(item => {
            return (
              <Rate 
                onClick={() => cambiaNota(item)}  
                value={item} 
                isSelected={nota >= item ?? !selected} 
                key={item}
              />
            )
          })}
         onClick={() => handleClick(true)}
        />

      } 
      </div>
    );
  }
 
export default App
