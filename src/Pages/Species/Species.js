import { useEffect, useState } from "react";
import api from '../../services/api';


function App() {

  const [specie, setSpecie] = useState([]);

  useEffect(() => {


    async function loadApiSpecie(){

      const response = await api.get ('species');
      setSpecie(response.data.results);

      
    }
    
    loadApiSpecie();

  }, []);

  console.log(specie)

    return (
      <div className="App">
        <h1>All species like schewbawcca</h1>
      </div>
    );
  }
  
  export default App;