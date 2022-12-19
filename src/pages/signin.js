import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
  



const SignIn = () => {
  const [comentario, setComentario] = useState("");
  const [email, setEmail] = useState("");
  
  const configuration = {
    method: "post",
    url: "https://trab-2-dwbackend.vercel.app/usuarios",
    data: {
      email,
      comentario,
    },
  
  };
  axios(configuration)
  .then((result) => {
    console.log("Feedback enviado.")
  })
  .catch((error) => {
    error = new Error();
  });
  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    alert("Submited");
  }

return( <div>
<div id="espacoEntrar">
<div class="titulo"> <h1> Envie uma sugestão </h1></div>
  <div id="alinharElementos">
  <div>
    <form
    
    
    >
  <input 
  type="email" 
  name="email"
  value={email}
   class="block"
    placeholder='Insira o email aqui'
    onChange={(e) => {setEmail(e.target.value);}}
    />
  <input
   type="text" 
   id="comentario"
   name="comentario"
   value={comentario}
    placeholder="Faça o comentario aqui aqui"
    onChange={(e) => {setComentario(e.target.value);}}
     />
  <button class="block" type="submit" onClick={(e) => handleSubmit(e)}> Enviar </button>
  </form>
 
  </div>

  </div>
</div>

</div>




);
};
    
export default SignIn;