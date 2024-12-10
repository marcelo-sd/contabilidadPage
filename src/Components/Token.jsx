import { useState } from "react";
import axios from "axios";
import "../index.css";


function Token() {
  const [token, settoken] = useState(null);
  const [apiResponse, setApiResponse] = useState("");
  

  async function handleClick() {
    const sendData = {
      nombre: "juana", // Replace with desired username
    };

    try {
      const response = await axios.post(
        "http://contabilidadmatketapi.somee.com/auth/ObtenerToken",
        sendData
      );
      const Token = response.data.response; // Extracts the token
      settoken(Token);
      console.log("se hizo el post");
      console.log(Token);
      // Handle the token, e.g., store it in local storage
      localStorage.setItem("token", token);
      setIsLoading(false); // Oculta el icono de carga
    } catch (error) {
      console.error("http://contabilidadmatketapi.somee.com/auth/ObtenerToken", error);
      // Handle errors (e.g., display a user-friendly message)
    }
  }
  const copiarToken = (event) => {
    event.preventDefault();
    navigator.clipboard
      .writeText(token)
      .then(() => {
        setApiResponse("Token copiado al portapapeles");
        setTimeout(() => {
          setApiResponse(""); // Elimina la notificación después de 3 segundos
        }, 3000);
      })
      .catch((err) => {
        console.error("Error al copiar el Token: ", err);
      });
  };

  return (
    <div className=" fondo3">
    <div className="container ">
      <section className="row text-center pt-3">
        <h1>Probar Enpoints</h1>
      </section>
      <section className="row text-center">
        <p className="h3"> Pimero debes optener tu token!</p>
      </section>
      <section className="row text-center">
        <p className="h5">
          {" "}
          <small>selecciona el boton para obtener el token</small>
        </p>
      </section>
      <section className="row text-center">
      <section className="row text-center">
        {token ? (
          <button className="btn btn-success" onClick={copiarToken}>
            Copiar Token!
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleClick} >
           Obtener Token!
          </button>
        )}
      </section>
      </section>
      <section className="row">
        <div className="col text-center">
          {apiResponse && (
            <div className="alert alert-success mt-3">{apiResponse}</div>
          )}
        </div>
      </section>
      <hr />
      <section className="row text-center">
        <p>
          Si ya copiaste el Token selecciona el siguiente boton y luego pega tu
          token en la casilla de Autorize, y prueba los endpoints!{" "}
        </p>
      </section>
      <section className="row  text-center">
        <p>
          {" "}
          <small>Ten en cuenta que no podras modificar ninguna tabl</small>a
        </p>
      </section>
      <section className="row mb-3
      ">
      
          <a href="http://contabilidadmatketapi.somee.com/swagger/index.html" className="btn btn-primary">
          Probar Endpoints!
          </a>
       
      </section>
    </div>
    </div>
  );
}

export default Token;
