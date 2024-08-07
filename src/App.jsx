import { useState, useSyncExternalStore } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';


function App() {

  const [first, setfirst] = useState("--");

  const [ArrayPaises, setArrayPaises] = useState([]);

  const requestPaises = () =>{

    axios.get('https://restcountries.com/v3.1/all')
  .then((response) => {
    // handle success
    //console.log(response);
    //console.log(response.data);

    setArrayPaises(response.data);

    for(let i=0; i< response.data.length; i++){
      const dataActual=response.data[i];
      //console.log(i+" ", dataActual);
      console.log("Nombre: ", dataActual.name.common);
      //console.log("Bandera: ", dataActual.flags.png);
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  }
  return (
    <>
      <div>
      

      </div>
      <h1>Paises</h1>
      <h3>{"Saludo: "+first}</h3>
      <button onClick={requestPaises}> Obtener los paises</button>
      <button 
      onClick={ () => {
        setfirst("hola")
       }
      }> Saludar</button>

      {ArrayPaises.map((item, index) =>{
        return(
          <div key={"k-"+index}>
          <h5>{item.name.common}</h5>
          <img src={item.flags.png}/>
          </div>
        )
      })}
    </>
  )
}

export default App
