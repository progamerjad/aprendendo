import React from 'react'
import './App.css';



function App(props) {
  
 const modificarNome = evento => {
   console.log(evento.target.value)
 }

  const criaComboBox = () => {
    const opcoes= ["cigarro","bebidas"]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)

    return(
         <select>
           {comboBoxOpcoes}
         </select>
    )
  }
  
  
    
    const MeuComboBox = ()=> criaComboBox()


    return(
      <>
      <input type="texte" value={props.nome} onChange={modificarNome}/>
      <h1>hello {props.nome} sua idade é {props.idade}</h1>
     
      <MeuComboBox/>
      </>
    )
  
}

export default App;
