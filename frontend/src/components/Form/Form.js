/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useRef,useEffect} from 'react';
import {newHereo,updateHereos,getOneHereo} from '../../services/index';

export default function Form({id}) {

    console.log(id)

    const [formValue,setFormValue]=useState({
        nombre:'',
        bio:'',
        casa:''
    })

    const inputRef = useRef();
    const cargarUpdate= async()=>{

      if(id !== null && id.length>0){
      const esto = await  getOneHereo(id);
      const { data }=esto;  
    
      //sendHeroe({...formValue,image:inputRef.current.files[0]}) 
      setFormValue({
        nombre:data.nombre,
        bio:data.bio,
        casa:data.casa
      })
    
    }
}

useEffect(() => {
  cargarUpdate();
}, [])


    const handleSubmit = async (e)=>{
      e.preventDefault();
      if(id !== null && id.length>0){
        updateHereos(id,formValue);
        window.location.href='/heroes';
      }else{
        newHereo({...formValue,image:inputRef.current.files[0]})
        window.location.href='/heroes';
      }
    }

    const handleInput = (e)=>{
      const {name,value}= e.target;
      setFormValue(
          {...formValue,[name]:value}
          )
    }
  
    return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="mb-1">
    <label htmlFor="nombre" className="form-label">Name</label>
    <input
    type="text"
    className="form-control" 
    name="nombre"
    onChange={handleInput}
    value={formValue.nombre}
    aria-describedby="emailHelp"/>
  </div>
  <div className="mb-1">
    <label htmlFor="image" className="form-label">Hereo image</label>
    <input 
    type="file" 
    ref={inputRef}
    className="form-control"
    id="image"
    name="image"
    />
  </div>

  <div className="mb-1">
    <label htmlFor="bio" className="form-label">Bio</label>
    <textarea
    type="text"
    className="form-control"
    name="bio"
    id="bio"
    value={formValue.bio}
    onChange={handleInput}
    ></textarea>
  </div>

  <div className="mb-1">
    <label htmlFor="casa" className="form-label">Casa</label>
    <input
    type="text"
    name="casa"
    className="form-control"
    id="casa"
    placeholder="DC or Marvel"
    value={formValue.casa}
    onChange={handleInput}
    />  
  </div>

  <button type="submit" className="btn btn-primary mt-1">Submit</button>
</form> 
</>
    )
}
