import Header from "../Header/Header"
import { useEffect } from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Favorites from '../Favorites/Favorites';
import { useSelector } from "react-redux";

export default function Main(){
    return(
        <div className="mainContainer">
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/favorites" element={<Favorites/>} />
            </Routes>
        </div>
    )
}