import { useEffect, useState } from "react";
import api from '../../services/api'

function People() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {


    async function loadApiCharacters(){

      const response = await api.get ('people');
      setCharacters(response.data.results)
      

      
    }
    
    loadApiCharacters();

  }, []);

  console.log(characters)

    return (
      <div className="App">
        <h1>Show people like OBIWAN TCHOLA</h1>
      </div>
    );
  }
  
  export default People;