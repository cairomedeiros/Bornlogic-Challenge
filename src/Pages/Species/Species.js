import { useEffect, useState } from "react";
import api from '../../services/api';
import { Container, Card } from '../People/style';
import { Link } from 'react-router-dom';


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

    return (
      <div className="App">
        <Container>
        {specie.map((species) => {
          return(
            <Card key={species.url}>
              <h4 style={{color: "#fff"}}>{species.name}</h4>
              <Link to={`${species.name}`}>Acessar</Link>
            </Card>
          )
        })}
        </Container>
      </div>
    );
  }
  
  export default App;