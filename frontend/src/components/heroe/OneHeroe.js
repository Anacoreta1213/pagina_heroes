/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {getOneHereo} from '../../services/index';
import HeroeTarjeta from '../heroe_tarjeta/HeroeTarjeta';
function OneHeroe(){

    const {id}= useParams();

    const [heroe, setHeroe] = useState({});

   
    async function obtenerHeroe(){
        const response = await getOneHereo(id);

       if(response.status === 200){
        setHeroe(response.data)
       } 
    };

    useEffect(() => {
        obtenerHeroe();
    },[])

    return (
        <div className="row">
            <div className="col-md-10 offset-4">
        <HeroeTarjeta heroe={heroe}/>
        </div>
        </div>
    )
};

export default OneHeroe;