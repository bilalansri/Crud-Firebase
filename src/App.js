import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/signup'
import Login from './components/login'
import Home from './components/home'
import Header from './components/header'
import Admin from './components/adminPanel'

function App() {
  return <div className="App">
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/signup' element={<SignUp />}/>
              <Route path='/admin' element={<Admin />}/>
          </Routes>
          </BrowserRouter>
    </div>
}

export default App;