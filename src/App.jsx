import style from './App.module.css';
import fotoPerfil from './assets/perfilFoto.png';

import cardJS from "./assets/logos/js.webp";
import cardHTML from "./assets/logos/html.webp";
import cardCSS from "./assets/logos/css.webp";
import cardVITE from "./assets/logos/vite.webp";
import cardREACT from "./assets/logos/react.webp";
import logoWhats from "./assets/logos/whats-logo.png"

import { useState } from 'react';
import { Card } from './components/card';


function App() {
  const defaultPhoneNumber = "5541988246907"

  const [formData,setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


const handleChange = (e) => {
  const {name,value} = e.target;
  setFormData({...formData, [name]:value})
}


const handleWhats = () => {
  const {name, email, message} = formData;

  const url = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
  
  Nome:%20${name}%0D%0A
  Email:%20${email}%0D%0A
  Mensagem:%20${message}%0D%0A`;

  window.open(url, "_blank")
}

  return (
    <>
      <nav className={style.menu}>
        <p>
          <a className='apr' href="#s1">Apresentação</a>
        </p>
        <p>
          <a href="#s2">Tecnologias</a>
        </p>
        <p>
          <a href="#s3">Projetos</a>
        </p>
        <p>
          <a href="#s4">Contato</a>
        </p>
      </nav>

      <main>
        <section className={style.s1} id='s1'>
          <div className={style.leftS1}>
            <img
             className={style.imgRound}
             src={fotoPerfil} 
             alt="Foto de perfil"
            />
          </div>
          <div className={style.rightS1}>
            <h2>Apresentação</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit assumenda nemo in aspernatur,
              sapiente quis quibusdam possimus, deserunt nostrum id,
              modi magnam eveniet doloribus quas ullam dicta obcaecati? Consequatur, corrupti.</p>
          </div>
        </section>

        <section className={style.s2} id='s2'>
          <h2>Tecnologias</h2>

        <div className={style.wrapContainer}>
          <Card
            image = {cardJS}
            title = "Javascript"
            description = "JavaScript (JS) é uma linguagem de programação de script, principalmente usada para criar interatividade em páginas web"
          />
          <Card
            image = {cardHTML}
            title = "HTML"
            description = "HTML (HyperText Markup Language) é a linguagem de marcação padrão para criar e estruturar páginas da web"
          />
          <Card
            image = {cardCSS}
            title = "CSS"
            description = "CSS (Cascading Style Sheets) é um linguagem de folhas de estilo utilizada para definir como os elementos de uma página web são apresentados."
          />
          <Card
            image = {cardVITE}
            title = "Vite"
            description = "Vite é um servidor de desenvolvimento local escrito por Evan You, o criador do Vue.js, e usado por padrão pelo Vue e para modelos de projeto React. "
          />
          <Card
            image = {cardREACT}
            title = "React.js"
            description = "O React permite dividir uma página inteira em partes, chamadas de componentes. Assim é possível trabalhar cada um desses componentes de forma individual e independente."
          />
          
        </div>
        </section>

        <section className={style.s3} id='s3'>
          <h2>Projetos</h2>
        </section>

        <section className={style.s4} id="s4">
          <h2>Contato</h2>
          <div className={style.wrapZap}>
            <img  className={style.whatsLogo} src={logoWhats} alt="WhatsApp Logo" />
          <h3>Fale pelo WhatsApp</h3>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
            <textarea cols="30" rows="10" id="message" name='textarea' value={formData.message} onChange={handleChange} required></textarea>
            <button onClick={handleWhats}>Enviar mensagem</button>
          </div>
        </section>
      </main>

      <footer className='ft'>
        <h3>Redes Sociais</h3>
      </footer>
    </>
  );
}

export default App