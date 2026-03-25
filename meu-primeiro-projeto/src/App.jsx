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
        
        <p>Note que eu posso repetir o componente quantas vezes eu quiser!</p>
      </div>
    </div>
  )
}

export default App
