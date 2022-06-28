import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';

function People() {

  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState([])

  


  useEffect(() => {


    async function loadApiCharacters(){

      const response = await api.get(`people`);

      setCharacters(response.data.results)
      
console.log(response)
      
    }
    
    loadApiCharacters();

  }, []);

  
  

  

    return (
      <div className="App">
        <ul>
        {characters.map((character) => {
          return(
            <li key={character.name}>
              <div href="#">{character.name}</div>
              <Link to={`/people/?search=${character.name}`}>Acessar</Link>
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
  
  export default People;