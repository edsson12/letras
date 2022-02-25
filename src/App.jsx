import { useEffect } from "react";
import { useState } from "react";
import Formulario from "./components/Formulario/Formulario";
import axios from 'axios'
import Bottom from "./components/Bottom/Bottom";
import NavBar from "./components/NavBar/NavBar";


function App() {

  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [lyrics, setLyrics] = useState("");

  const [error, setError] = useState(false)

  useEffect(() => {
    
    if (Object.keys(busquedaLetra).length===0) return;
  
    const consultarAPI = async ()=>{

      const {artista,cancion}= busquedaLetra;

      const URL = `https://api.lyrics.ovh/v1/${artista}/${cancion}`

      const result = await axios(URL);
      
      
      setLyrics(result.data.lyrics)
    }
    consultarAPI();

  }, [busquedaLetra])
  


  return (
    <div>
      <NavBar/>
      <Formulario 
      setBusquedaLetra={setBusquedaLetra}
      error={error}
      setError={setError} />


      <Bottom 
      lyrics={lyrics}
      cancion={busquedaLetra.cancion}
      />

      
      
    </div>
  );
}

export default App;
