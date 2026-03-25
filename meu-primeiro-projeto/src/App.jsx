import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Saudacao() {


return (
<div style={{backgroundColor: '#ffff', padding: '10px', 
  borderRadius: '8px', marginBottom: '10px'}}>
<h1 style={{color: '#007bff'}}>Olá, Alunos!</h1>
<p>Estou alterando meu primeiro componente.</p>
</div>

);
}

function App() {
  return (
    <div>
      <h1>Olá, React!</h1>
      <p>Estou alternando meu primeiro componente.</p>

      <div style={{padding: '20px'}}>
        <h1>Minha Primeira Aula de React</h1>
        <hr />

        {/* AQUI NÓS CHAMAMOS O COMPONENTE QUE CRIAMOS ACIMA */}

        <Saudacao />
        <Saudacao />
        <Saudacao />
        <Saudacao/>

        <Alarme/>

        <Intervalo horario = "10:40" funcao = "Comer"/>
        
        <p>Note que eu posso repetir o componente quantas vezes eu quiser!</p>
      </div>
    </div>
  )
}

export default App


function Intervalo({horario, funcao}) {


  return (
    <div style={{backgroundColor: '#f474', padding:'5px', borderRadius: '8px', marginBottom:'10px'}}>
      <h1 style={{color: '#fff447'}}>Intervalo</h1>
      <h2 style={{color: '#0d39c9'}}>Horário: {horario}</h2>
      <h2 style={{color: '#0d39c9'}}>Função: {funcao}</h2>
      
      <p>Estou Criando Meu First Component</p>
     
    </div>
  )
}

function Alarme() {


  return(
    <div style={{backgroundColor: 'rgb(0, 255, 85)', padding: '5px', borderRadius: '8px', marginBottom: '10px',}}>
      <h1 style={{color: '#ff0000'}}>Alarme</h1>
      <p>EVACUE</p>
    </div>
  )
}



