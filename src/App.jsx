import { useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from "./components/Footer"
import Header from "./components/Header"
import HeaderInicial from "./components/HeaderInicial"
import Home from "./components/Home"
import LoginForm from "./components/LoginForm"
import Perfis from "./components/Perfis"
import Movie from './components/Movie.jsx'
import Search from './components/Search.jsx'
import ProtectedRoute from './components/ProtectRoutes'
import UserContext from './context/UserContext.jsx'
import img from '../src/assets/img-perfil-1.png'


function App() {

  const [isLogged, setIsLogged] = useState(false)
  const [imgperfil, setImgPerfil] = useState(0)

  return (
    <>
      <UserContext.Provider value={{ isLogged, setIsLogged, setImgPerfil, imgperfil }}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route
                path='/'
                element={
                  <ProtectedRoute isLoggedIn={isLogged}>
                    <HeaderInicial />
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/perfil'
                element={
                  <ProtectedRoute isLoggedIn={isLogged}>
                    <Perfis />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/movie/:id'
                element={
                  <ProtectedRoute isLoggedIn={isLogged}>
                    <Movie />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/search'
                element={
                  <ProtectedRoute isLoggedIn={isLogged}>
                    <Search />
                  </ProtectedRoute>
                }
              />
              <Route path='/login' element={<><Header /> <LoginForm /> <Footer /></>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
