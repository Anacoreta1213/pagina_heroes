import React,{useEffect,useState} from 'react';
import {getHereos} from '../../services/index';
import HeroeTarjeta from '../heroe_tarjeta/HeroeTarjeta';

function AllHeroes() {

    const [listHeroes, setListHeroes] = useState([]);
    
    async function loadHeroes(){
        const response = await getHereos();

       if(response.status === 200){
         setListHeroes(response.data)
       } 
    }

    useEffect(() => {
        loadHeroes();
    },[])

    return (
    <div className="row">
    {
        listHeroes.map(heroe =>(
            <HeroeTarjeta heroe={heroe} key={heroe._id}/>
        ))

    }    
    </div>   
    )
};

export default AllHeroes;
