import React,{useState} from 'react'
import {Link} from 'react-router-dom';

export default function NavBar() {

  const [search, setSearch] = useState('');

  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  const enviar = async (e)=>{
    e.preventDefault();
  window.location.href = `/result/${search}`;
}
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              <img src="img/A-64.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
            </Link>
          </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse me-3" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/heroes">Heroes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
          <form onSubmit={enviar} className="d-flex">
            <input className="form-control me-2" type="text"
             placeholder="Search heroe"
             name="search"
             value={search}
             onChange={handleSearch} 
             />
            <button type="submit" className="btn btn-outline-success" 
            >Search</button>
          </form>
      </div>
    </div>
  </nav>
</div>
    )
}

//  (keyup.enter)="buscarHeroe(buscarTexto.value)"
//  #buscarTexto