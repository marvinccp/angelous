// import { useState } from 'react'
import './App.css'
import { Footer } from './components/footer/Footer'

import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <section className='app_container'>
      <Header/>
      <Main />
      <Footer />
    </section>
  )
}

export default App
