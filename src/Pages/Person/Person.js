import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import avatar from '../../img/avatar.png';
import { Forms, ContainerPerson } from './style';


export default function Person(){

    const [info, setInfo] = useState([]);
    const [image, setImage] = useState('');

    const { name } = useParams();

    useEffect(() => {
       async function loadInfos(){

        const response = await api.get(`people/?search=${name}`)
        setInfo(response.data.results[0])
        
        
        

       }
        
       loadInfos();

    }, [name]);

   

    const uploadImage = async e => {
        e.preventDefault();
        
        localStorage.setItem('avatar', image);
    }





    

    return(
        <ContainerPerson className='Container'>
            <div>
                <h1>{info.name}</h1>
                <h2>Altura: {info.height} cm</h2>
                <h2>Gender: {info.gender}</h2>
                <h2>Peso: {info.mass} kg</h2>
                <h2>Ano de nascimento: {info.birth_year}</h2>
            </div>

            <Forms onSubmit={uploadImage}>

                <label>Imagem: </label>
                <input type="file" accept='image' name="image" onChange={e => setImage(e.target.files[0])}/>
                {image ? <img src={URL.createObjectURL(image)} alt="imagem" width="150" height="150" /> : <img src={avatar} alt="imagem" width="150" height="150" />}
                <button>Enviar</button>
            </Forms>
        </ContainerPerson>
    )

}