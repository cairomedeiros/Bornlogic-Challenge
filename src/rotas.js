import React from "react";
import { Route, Routes } from "react-router-dom";

import People from './Pages/People/People';
import Planets from './Pages/Planets/Planets';
import Species from './Pages/Species/Species';
import Person from './Pages/Person/Person';

export default function Rotas(){
    return(
        <Routes>
            <Route path="/" exact element={<People/>}/>
            <Route path="/people/:name" exact element={<Person/>}/>
            <Route path="/planets" exact element={<Planets/>}/>
            <Route path="/species" exact element={<Species/>}/>
        </Routes>
    )
}