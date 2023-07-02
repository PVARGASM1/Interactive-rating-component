import { useState } from 'react'
import Structures from '../Components/Structures'
import States from '../Components/States'
import '../src/Styles/styles.scss'


  function App() {
    const [nota, setNota] = useState(0);
    const cambiaNota = (calificacion) => {
      return setNota(calificacion);
    };
  
    return (
      <div>
        <Structures cambiaNota={cambiaNota} calificacion={nota} />
        <States calificacion={nota} />
      </div>
    );
  }
 
export default App
