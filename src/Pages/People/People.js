import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { Card, Container } from './style';

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
      
        <Container className="container">
        {characters.map((character) => {
          return(
            <Card key={character.name}>
              <h4 href="#">{character.name}</h4>
              <Link to={`people/${character.name}`}>Acessar</Link>
            </Card>
          )
        })}
        </Container>
      
    );
  }
  
  export default People;