import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { SpeciesInfoContainer } from './style';



export default function SpeciesInfo(){

    const [info, setInfo] = useState([]);
    

    const { nameSpecies } = useParams();

    useEffect(() => {
       async function loadInfos(){

        const response = await api.get(`species/?search=${nameSpecies}`);
        setInfo(response.data.results[0])
        
        
        
        

       }
        
       loadInfos();

    }, [nameSpecies]);

   

   





    

    return(
        <SpeciesInfoContainer>
            <div className='speciesInfo'>
                <h1>{info.name}</h1>
                <h2>Idioma: {info.language}</h2>
                <h2>Cores de pele: {info.skin_colors}</h2>
                <h2>Classificação: {info.classification}</h2>
                <h2>Designação: {info.designation}</h2>
            </div>

           
        </SpeciesInfoContainer>
    )

}