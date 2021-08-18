/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect,useState} from 'react';
// import HeroeTarjeta from '../heroe_tarjeta/HeroeTarjeta';
import {useParams} from 'react-router-dom';
import {buscarHereos} from '../../services/index';
import HeroeTarjeta from '../heroe_tarjeta/HeroeTarjeta';

export default function ResultSearch() {

    const {nombre}= useParams();
    const [heroes, setHeroes] = useState([]);

    async function resultado(){
        const listHeroes =  await buscarHereos(nombre);
        
        setHeroes(listHeroes);
    }


    useEffect(() => {
        resultado();
    }, []);

    return (
    <div className="row">
        {
        heroes.map((heroe)=>(
            <HeroeTarjeta heroe={heroe} key={heroe._id}/>
        ))
        }
    </div>
    )
}

