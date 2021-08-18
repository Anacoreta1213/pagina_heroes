import React,{useState} from 'react';
import ModalForm from '../Modalform/ModalForm';
import Form from '../Form/Form';
export default function Home() {
    const [active, setActive] = useState(false);

    const toggle = ()=>{
        setActive(!active);
    }
    return (
        <>
        <div className="d-flex justify-content-around">
            <div className="bg-light p-5 rounded-lg m-4 animated fadeIn fast">
            <h1 className="display-4">Comic App!</h1>
            <p className="lead">It is a one comic application!</p></div>
        <div className="align-self-end">
            <button onClick={toggle} className="btn btn-primary">Add Heroe</button>
        </div>
        </div>
        <ModalForm toggle={toggle} active={active}>
            <Form id={null}/>
        </ModalForm>
        </>
    )
}

