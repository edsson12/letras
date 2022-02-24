import { useEffect } from "react";
import { useState } from "react";
import Formulario from "./components/Formulario/Formulario";
import axios from 'axios'
import Bottom from "./components/Bottom/Bottom";


function App() {

  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [lyrics, setLyrics] = useState("");

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
      <Formulario 
      setBusquedaLetra={setBusquedaLetra} />


      <Bottom 
      lyrics={lyrics}
      />

      
      
    </div>
  );
}

export default App;
