import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL
export const newHereo = async (product)=>{

    try {
        
        const formData = new FormData();
        formData.append('nombre',product.nombre);
        formData.append('bio',product.bio);
        formData.append('casa',product.casa);
        formData.append('image',product.image);

       await axios.post(`${baseUrl}/heroes`,formData);

        console.log("¡Guardado exitosamente!")

    } catch (error) {
        console.log("Tenemos un error de mierda");
    }
}

// Función para obtener hereos:
export const getHereos = async (product)=>{

    try {  
    const heroes =  await axios.get(`${baseUrl}/heroes`);
        
        return heroes;

    } catch (error) {
        console.log("Tenemos un error de mierda");
    }
}


// Función para obtener un solo hereo:
export const getOneHereo = async (id)=>{

    try {  
    const oneHeroe =  await axios.get(`${baseUrl}/heroes/${id}`);
        
        return oneHeroe;

    } catch (error) {
        console.log("Tenemos un error de mierda");
    }
}

// Función para obtener hereos:
export const buscarHereos = async (nombre)=>{

    try {  
    const heroes =  await axios.get(`${baseUrl}/heroes`);
        
        let listHeroes = [];
        for (let i = 0; i < heroes.data.length; i++) {
            let element = heroes.data[i].nombre;
            element = element.toLowerCase();
            let nombr = nombre.toLowerCase();
            
            if(element.indexOf(nombr)>=0){
                listHeroes.push(heroes.data[i]);
            }
        }
    
        return listHeroes;

    } catch (error) {
        console.log("Tenemos un error de mierda");
    }
}

export const updateHereos = async (id,heroe)=>{

    try {  
    const Updateheroe =  await axios.put(`${baseUrl}/heroes/${id}`,heroe);
        
    console.log(Updateheroe);


    } catch (error) {
        console.log("Tenemos un error de mierda");
    }
}

export const deleteHereos = async (id,heroe)=>{

    try {  
        
        await axios.delete(`${baseUrl}/heroes/${id}`);
        console.log('BullShit Deleted');

    } catch (error) {
        console.log("Tenemos un error de mierda");
    }
}