import { useEffect, useState } from "react";
import api from '../../services/api';
import { Container, Card } from '../People/style';
import { Link } from 'react-router-dom';



function Planets() {

  const [planet, setPlanet] = useState([]);

  useEffect(() => {


    async function loadApiPlanet(){

      const response = await api.get ('planets');
      setPlanet(response.data.results);

      
    }
    
    loadApiPlanet();

  }, []);

    return (
      <>
       
        <Container>
        {planet.map((planets) => {
          return(
            <Card key={planets.url}>
              <h4 style={{color: "#fff"}}>{planets.name}</h4>
              <Link to={`${planets.name}`}>Acessar</Link>
            </Card>
          )
        })}
        </Container>
      </>
    );
  }
  
  export default Planets;