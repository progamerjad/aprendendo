import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Comentario from './components/Comentarios'


class App extends Component {

  state = {
    comentarios:[
      {
        
        nome: 'jad',
        email: '@jad',
        data: new Date(2021, 3, 20),
        mensagen: 'ola melo tudo bem ?'
      },
      {
        
        nome: 'domingos',
        email: 'melo',
        data: new Date(2021, 3, 20),
        mensagen: 'ola tudo bem sim.'
      }
    ],
    novoComentario: {
      nome:'',
      email:'',
      mensagen:''
    }
  }

  //função add comentario
  adicionarComentario = evento =>{

    evento.preventDefault();
    console.log("Adicionando comentario...")

   const novoComentario = {...this.state.novoComentario, data: new Date()}

    //let Lista = this.state.comentarios;
   //Lista.push(novoComentario);
    //this.setState({comentarios:Lista});

    //com apenas uma linha faz o mesmo que o de sima!

    this.setState({comentarios: [...this.state.comentarios, novoComentario],
    novoComentario: {nome:'', email:'', mensagen:''}
    })
  }

   //função deletar comentario

   removerComentario = comentario =>{
     let Lista =this.state.comentarios;
     Lista = Lista.filter(c => c !== comentario)

     // atualizando a lista
     this.setState({comentarios: Lista})
   }


  digitacao= evento =>{
    const {name, value} = evento.target;
   
    this.setState({novoComentario:{...this.state.novoComentario, [name]: value}})
  }

  

  render(){
    return (
      <div className="App">
        <h1>
           meu primeiro app
        </h1>

        {this.state.comentarios.map((comentario, indíce) => (

           <Comentario
            key={indíce}
            nome={comentario.nome}
            email={comentario.email}
             date= {comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagen}
           
         </Comentario>
        ))}

        <form method="post" onSubmit={this.adicionarComentario}>
          <h2>
            Adicionar Comentário</h2>
          <div>

          <input 
          type="text" 
          name="nome" 
          value={this.state.novoComentario.nome}
          onChange={this.digitacao}
          placeholder="Digite seu nome"/>
          </div>

          <div>
          <input 
          type="email" 
          name="email" 
          value={this.state.novoComentario.email}
          onChange={this.digitacao}
          placeholder="Digite seu email"/>
          </div>

          <div>
          <textarea 
          name="mensagen"  
          value={this.state.novoComentario.mensagen}
          onChange={this.digitacao}
          rows="4"/>
          </div>

          <button type="submit"> adicionar Comentário</button>
          
        </form>
      </div>
    );

  }

  
}

export default App;
