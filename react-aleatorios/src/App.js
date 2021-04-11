
import React, { Component } from 'react';
import './App.css';

import Comentario from './components/Comentario'

class App extends Component {

  state = {
    comentarios: [
      {
        nome:'João',
        email:'joão@jj',
        date: new Date(2020,3,19),
        mensagem:'Ola, tudo bem?'
      },
      {
        nome:'maria',
        email:'maria@maria@jj',
        date: new Date(2020,3,20),
        mensagem:'Ola, tudo bem sim?'
      }
    ],
    novoCmomentario: {
      nome:'',
      email:'',
      mensagem:''
    }
  }

  adicionarComentario = evento =>{

    evento.preventDefault();
    console.log("Adicionando comentario...")

//const novoCmomentario = {
   //   nome:'jad',
   //   email:'jad@maria@jj',
   //   date: new Date(),
   //   mensagem:'Ola, pessoal!!'
  //  }

    //let lista = this.state.comentarios;
    //lista.push(novoCmomentario)
    //this.setState({comentarios:lista});

    const novoCmomentario = {...this.state.novoCmomentario, date: new Date()}

    this.setState({
      comentarios:[...this.state.comentarios, novoCmomentario],
      novoCmomentario: {nome:'', email:'', mensagem:''}
    })

  }


    removerComentario = comentario =>{
      let lista = this.state.comentarios;
      lista = lista.filter(c => c !== comentario)

      this.setState({comentarios:lista})
    }

    digitacao = evento => {
      const {name, value} = evento.target;
      
      this.setState({novoCmomentario:{...this.state.novoCmomentario, [name]:value}})
    }

   render(){
    return (
      <div className="App">
        <h1>meu projeto</h1>

        {this.state.comentarios.map((comentario, indice) => (
           <Comentario
            Key={indice}
            nome={comentario.nome} 
            email={comentario.email}
             data={comentario.date}
               onRemove={this.removerComentario.bind(this, comentario)}>
             {comentario.mensagem}
        </Comentario>
        ))}

       <form method="post" onSubmit={this.adicionarComentario}>
         <h2>Adicionar comentario</h2>
          <div>
          <input 
           type="texte" 
           name="nome"
           value={this.state.novoCmomentario.nome}
           onChange={this.digitacao}
           placeholder="Digite seu nome"/>
          </div>
          <div>
          <input 
           type="email"
           name="email"
           value={this.state.novoCmomentario.email}
           onChange={this.digitacao}
            placeholder="Digite seu email"/>
          </div>
          <div>
           <textarea
            name="mensagem"
            value={this.state.novoCmomentario.mensagem}
            onChange={this.digitacao}
            rows="4"/>
          </div>
          <button type='submit'>Adicionar Comentario</button>

          
       </form>

      </div>
    );
   }


 
}

export default App;
