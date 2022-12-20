import React from "react";
import { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [comentario, setComentario] = useState("");
  const [email, setEmail] = useState("");
  const [register, setRegister] = useState(false);




  const configuration = {
    method: "post",
    url: "https://trab-2-dwbackend.vercel.app/usuarios",
    data: {
      email,
      comentario,
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sucesso!");
    axios(configuration)
    .then((result) => {
      setRegister(true);
    })
    .catch((error) => {
      error = new Error();
    });
  };
  
  
  return (
    <div>
      <div id="espacoEntrar">
        <div class="titulo">
          {" "}
          <h1> Envie uma sugestão </h1>
        </div>
        <div id="alinharElementos">
          <div>
            <form onSubmit={(e) => {e.preventDefault(); handleSubmit(e)}}>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="block"
                placeholder="Insira o email"
              />
              <input
                type="text"
                id="comentario"
                name="comentario"
                value={comentario}
                placeholder="Faça o comentario aqui aqui"
                onChange={(e) => {
                  setComentario(e.target.value);
                }}
              />
              <button
                class="block"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                {" "}
                Enviar{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
