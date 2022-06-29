import React from "react";
import { Route, Routes } from "react-router-dom";

import People from './Pages/People/People';
import Person from './Pages/Person/Person';

import Planets from './Pages/Planets/Planets';
import PlanetsInfo from "./Pages/PlanetsInfo/PlanetsInfo";

import Species from './Pages/Species/Species';
import SpeciesInfo from './Pages/SpeciesInfo/SpeciesInfo';


export default function Rotas(){
    return(
        <Routes>
            <Route path="/" exact element={<People/>}/>
            <Route path="/people/:name" exact element={<Person/>}/>

            <Route path="/planets" exact element={<Planets/>}/>
            <Route path="/planets/:namePlanet" exact element={<PlanetsInfo/>}/>

            <Route path="/species" exact element={<Species/>}/>
            <Route path="/species/:nameSpecies" exact element={<SpeciesInfo/>}/>

        </Routes>
    )
}