import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';


export default function Person(){

    const [info, setInfo] = useState([]);

    const { name } = useParams();

    useEffect(() => {
       async function loadInfos(){

        const response = await api.get(`people/?search=${name}`)
        setInfo(response.data.results[0])
        
        

       }
        
       loadInfos();

    }, [])

    return(
        <>
        <h1>name: {info.name}</h1>
        <h1>altura: {info.height} cm</h1>
        <h1>specie: {info.gender}</h1>
        <h1>peso: {info.mass}</h1>
        </>
    )

}