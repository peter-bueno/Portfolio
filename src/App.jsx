import style from './App.module.css'

function App() {
  return (
    <>
<nav className={style.menu}>
  <p><a href="">Apresentação</a></p>
  <p><a href="">Tecnologias</a></p>
  <p><a href="">Projetos</a></p>
  <p><a href="">Contato</a></p>
  </nav>   

  <main>
    <section className ={style.s1}>
      primeira
    </section>
    
    <section className ={style.s2}>
      segunda
    </section>

    <section className ={style.s3}>
      terceira
    </section>

    <section className ={style.s4}>
      quarto
    </section>

  </main>

  <footer>

    </footer> 
    <h3>Redes Sociais</h3>
  </>
  )
}

export default App