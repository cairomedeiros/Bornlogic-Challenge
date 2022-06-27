import { Headerr } from './style';
import { Link } from 'react-router-dom';


export default function Header(){
    return(
        <Headerr>
            <Link to="/">
            <h1>People</h1>
            </Link>
            
            <Link to="/planets">
            <h1>Planets</h1>
            </Link>
            <Link to="/species">
            <h1>Species</h1>
            </Link>
            
        </Headerr>
    )
};