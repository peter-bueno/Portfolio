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
        <h2>Apresentação</h2>
    </section>
    
    <section className ={style.s2}>
        <h2>Tecnologias</h2>
    </section>

    <section className ={style.s3}>
        <h2>Projetos</h2>
    </section>

    <section className ={style.s4}>
        <h2>Contato</h2>
    </section>

  </main>


  <footer>
        <h3>Redes Sociais</h3>
    </footer> 
  </>
  )
}

export default App