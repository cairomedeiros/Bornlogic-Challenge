import { useEffect, useState } from "react";
import api from '../../services/api';


function Planets() {

  const [planet, setPlanet] = useState([]);

  useEffect(() => {


    async function loadApiPlanet(){

      const response = await api.get ('planets');
      setPlanet(response.data.results);

      
    }
    
    loadApiPlanet();

  }, []);

  console.log(planet)

    return (
      <div className="App">
        <ul>
        {planet.map((planets) => {
          return(
            <li key={planets.url}>
              <h1>{planets.name}</h1>
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
  
  export default Planets;