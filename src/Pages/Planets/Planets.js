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
        <h1>All planets like totoine</h1>
      </div>
    );
  }
  
  export default Planets;