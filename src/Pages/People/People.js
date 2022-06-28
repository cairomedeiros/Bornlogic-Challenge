import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';

function People() {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true)

  


  useEffect(() => {


    async function loadApiCharacters(){

      const response = await api.get(`people`);

      setCharacters(response.data.results);
      
    }
    
    loadApiCharacters();

    setLoading(false);

  }, [loading]);

  
  

  if(loading){
    return(
      <div>
        <h2>Loading characters...</h2>
      </div>
    )
  }

    return (
      <div className="App">
        <ul>
        {characters.map((character) => {
          return(
            <li key={character.name}>
              <div href="#">{character.name}</div>
              <Link to={`people/${character.name}`}>Acessar</Link>
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
  
  export default People;