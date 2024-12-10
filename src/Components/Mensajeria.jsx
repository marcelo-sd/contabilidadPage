import React, { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";
import "../index.css";

const Mensajeria = () => {
  const [connection, setConnection] = useState(null);
  const [messageCount, setMessageCount] = useState(0);
  const [connectionId, setConnectionId] = useState("");
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("Connecting...");
  const [apiResponse, setApiResponse] = useState("");

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7151/notificationHub")
      .build();

    setConnection(newConnection);

    newConnection
      .start()
      .then(() => {
        setStatus("CONECTADO! ");
        newConnection.invoke("GetConnectionId").then((id) => {
          setConnectionId(id);
        });
      })
      .catch((err) => {
        setStatus("Error connecting to SignalR hub");
        console.error("Error connecting to SignalR hub:", err.toString());
      });

    newConnection.on("ReceiveMessage", (message) => {
      console.log("Message from server: " + message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessageCount((prevCount) => prevCount + 1);
    });
  }, []);

  const sendMessage = () => {
    fetch(
      `https://localhost:7151/api/Test/enqueue?connectionId=${connectionId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiResponse(` ${JSON.stringify(data.message)}`);
      })
      .catch((error) => {
        console.error("Error:", error);
        setApiResponse(`API Response: Error - ${error}`);
      });
  };

  return (
      <div className="fondo2">
    <div className="container ">
      <section className="row text-center pt-3 ">
        <h1>SignalR Prueba</h1>
      </section>
      <section className="row">
        <p>
          El boton realiza un Post al endopoint "/api/Test/" lo que simula una
          tarea que tarda 5 segundos en relaizarse, esta se encola y se ejecuta
          en segundo plano, busco que el usuario pueda confirmar que su
          solicitud se realizo, ya sea un Alta o un Update a Base de Datos.
        </p>
      </section>

      <section className="row py-2 text-center ">
        <div className="col  text-end">
          <p>
            <small>Estado actual de la coneccion:</small>
          </p>
        </div>
        <div className="col  text-start">
          <p className="text-success-emphasis text-body-secondary">
            <strong> {status}</strong>
          </p>
        </div>
      </section>
      <hr />
      <section className="row">
        <p>
          Este es el id que me proporciona el servidor, con el puedo hacer las
          solicitud POST y la Api me da una respuesta individual.
        </p>
      </section>
      <section className="row text-center">
        <p className="text-success h5">{connectionId}</p>
      </section>
      <hr />

      <section className="row">
        <button className="btn btn-success" onClick={sendMessage}>
          Send Message
        </button>
      </section>

      <section className="row py-2 ">
        <div className="row text-center">
          <p className="h4">Lista de mensajes recibidos desde el servidor</p>
        </div>

        <div id="messages" className="text-center">
          {messages.map((msg, index) => (
            <div key={index} className="text-success">
              <strong> {msg}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="row">
        <div className="col text-end">
          <p>
            <small>Respuesta del Metodo Post:</small>
          </p>
        </div>
        <div className="col text-start">
          <p className="text-success">{apiResponse}</p>
        </div>
      </section>
      <hr />
      <section className="row">
        <div className="col text-end" id="messageCount">
          <p>
            <small>Contador de mensajes recibidos:</small>
          </p>
        </div>
        <div className="col text-start">
          <p className="text-success">{messageCount}</p>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Mensajeria;
