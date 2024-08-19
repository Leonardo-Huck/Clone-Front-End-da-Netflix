import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from "./components/Footer"
import Header from "./components/Header"
import HeaderInicial from "./components/HeaderInicial"
import Home from "./components/Home"
import LoginForm from "./components/LoginForm"
import Perfis from "./components/Perfis"
import Movie from './components/Movie.jsx'
import Search from './components/Search.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<LoginForm />} />
            <Route path='movie/:id' element={<Movie />} />
            <Route path='search' element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <HeaderInicial />
      <Home />
    </>
  )
}

export default App
