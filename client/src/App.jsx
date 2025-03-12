import { Routes, Route } from 'react-router'

import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import BookDetails from './components/BookDetails/BookDetails'
import BookCreate from './components/BookCreate/BookCreate'

function App() {

  return (
    <>
      <div className="site-content">
        <Header />
        <section className="site-main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog/>}/>
            <Route path='/book/:id/details' element={<BookDetails/>} />

            <Route path='/book/create' element={<BookCreate/>}/>         
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            
          </Routes>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default App
