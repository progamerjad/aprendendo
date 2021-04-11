import React from 'react'; 
import './comentario.css';

const Comentario = props => {
     

   return <div className="Comentario">
       <h2>{props.nome}</h2>
       <p>{props.email}</p>
       <p>{props.children}</p>
       <p>{props.data.toString()}</p>
       <button onClick={props.onRemove}>X</button>
    
    </div>
      
    
};

  

export default Comentario;
