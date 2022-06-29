import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { PlanetInfoContainer } from './style';



export default function PlanetsInfo(){

    const [info, setInfo] = useState([]);
    

    const { namePlanet } = useParams();

    useEffect(() => {
       async function loadInfos(){

        const response = await api.get(`planets/?search=${namePlanet}`)
        
        setInfo(response.data.results[0])
        
        
        
        

       }
        
       loadInfos();

    }, [namePlanet]);

   

   





    

    return(
        <PlanetInfoContainer className='Container'>

            <div className="planetInfo">
                <h1>{info.name}</h1>
                <h2>Clima: {info.climate}</h2>
                <h2>Gravidade: {info.gravity}</h2>
                <h2>População: {info.population}</h2>
                <h2>Terreno: {info.terrain}</h2>
            </div>

           
        </PlanetInfoContainer>
    )

}