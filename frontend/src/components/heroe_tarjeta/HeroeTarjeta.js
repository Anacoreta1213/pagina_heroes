import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import ModalForm from '../Modalform/ModalForm';
import Form from '../Form/Form';

function HeroeTarjeta({heroe}) {
    
  const [active, setActive] = useState(false);

  const toggle = ()=>{
      setActive(!active);
  }
 
    return (
      <>
    <div className="col col-md-4 my-2 60vh w-70">
    <div className="card" style={{width: '20rem'}}>
    <div className="card-header d-flex  justify-content-between">
      <button className="btn btn-outline-primary btn-sm" onClick={toggle}>
      Update
      </button>

      <button className="btn btn-outline-danger btn-sm">
      Delete
      </button>
    </div>
    <div className="card-body text-center">
      <div style={{width:'100%'}}>
    <img src={`http://${heroe.imgUrl}`} alt={heroe.nombre} className="card-img-top"  style={{objectFit:"cover"}}/>
      </div>
      <h5 className="card-title">{heroe.nombre}</h5>
      <p className="card-text">{heroe.bio}</p>
      <p className="card-text">{heroe.casa}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">{heroe.date}</small>
    </div>

    <Link to={"/heroe/"+heroe._id} className="btn btn-outline-primary w-100 nav-link"> Ver más...</Link>
  </div>
  </div>
      <ModalForm active={active} toggle={toggle}>
        <Form id={heroe._id}/>
      </ModalForm>

  </>
  )
}

export default HeroeTarjeta
