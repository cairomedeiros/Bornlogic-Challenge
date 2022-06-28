import { useEffect, useState } from "react";
import api from '../../services/api';


function App() {

  const [specie, setSpecie] = useState([]);

  useEffect(() => {


    async function loadApiSpecie(){

      const response = await api.get ('species');
      console.log(response)
      setSpecie(response.data.results);

      
    }
    
    loadApiSpecie();

  }, []);

  console.log(specie)

    return (
      <div className="App">
        <ul>
        {specie.map((species) => {
          return(
            <li key={species.url}>
              <h1>{species.name}</h1>
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
  
  export default App;