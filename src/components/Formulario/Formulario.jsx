import React from "react";
import { useState } from "react";
import './Formulario.scss'

const Formulario = ({setBusquedaLetra,error,setError}) => {
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  

  const { artista, cancion } = busqueda;
  

  const actualizarState = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const buscarInfo = (e) => {
    e.preventDefault();

    if (artista.trim()===''|| cancion.trim()==='') {
        setError(true)

        setTimeout(() => {
          setError(false)
        }, 4000);
        return;
    }
    
    

    setBusquedaLetra(busqueda);
  };

  return (
    <div className="o-container-form">
      <form onSubmit={buscarInfo}>
        <input
          type="text"
          name="artista"
          placeholder="Artista"
          value={artista}
          onChange={actualizarState}
        />

        <input
          type="text"
          name="cancion"
          placeholder="Nombre cancion"
          value={cancion}
          onChange={actualizarState}
        />

        <button type="submit">Buscar</button>
      </form>

      {error && <p> Papi mete todos los datos</p>}
    </div>
  );
};

export default Formulario;
