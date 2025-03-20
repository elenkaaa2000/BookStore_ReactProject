import { Routes, Route } from 'react-router'

import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import BookDetails from './components/BookDetails/BookDetails'
import BookCreate from './components/BookCreate/BookCreate'
import BookEdit from './components/BookEdit/BookEdit'
import { useState } from 'react'
import { UserContext } from './context/UserContext'
import Logout from './components/Logout/Logout'
import Profile from './components/Profile/Profile'
import Contacts from './components/Contacts/Contacts'
import Wishlist from './components/Wishlist/Wishlist'

function App() {
  const [authData, setAuthData] = useState();
  const UserLoginHandler = (result) => {
    setAuthData(result)
  };

  const UserLogoutHandler = () => {
    setAuthData({})
  }
  return (
    <UserContext.Provider value={{ ...authData, UserLoginHandler, UserLogoutHandler }}>
      <div className="site-content">
        <Header />
        <section className="site-main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/book/:bookId/details' element={<BookDetails />} />
            <Route path='/book/:bookId/edit' element={<BookEdit />} />

            <Route path='/book/create' element={<BookCreate />} />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/wishlist' element={<Wishlist />} />

            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </UserContext.Provider>
  )
}

export default App
