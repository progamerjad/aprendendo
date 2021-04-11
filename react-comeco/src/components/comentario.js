import React from 'react';


import './comentarios.css';
import imagenUsuario from './eu.jpg';

//jsx quando usamos o HTML no JS


const Comentario = props => {
     
   return <div className="Comentarios">
    <img className="avatar" src={imagenUsuario} alt={props.nome}/>
    <div className="conteudo">
    <h2 className= "nome">{props.nome }</h2>
    <p  className= "email">{props.email}</p>
    <p  className= "mensagen">{props.children}</p>
    <p  className= "data">{props.date.toString()}</p>
    <button onClick={props.onRemove}>&times;</button>
    </div>
    </div>
};






export default Comentario;


