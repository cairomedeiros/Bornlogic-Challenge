import React from "react";
import { Route, Routes } from "react-router-dom";

import People from './Pages/People/People';
import Planets from './Pages/Planets/Planets';
import Species from './Pages/Species/Species';

export default function Rotas(){
    return(
        <Routes>
            <Route path="/" exact element={<People/>}/>
            <Route path="/Planets" exact element={<Planets/>}/>
            <Route path="/Species" exact element={<Species/>}/>
        </Routes>
    )
}