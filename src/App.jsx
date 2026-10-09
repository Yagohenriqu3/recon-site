import './App.css'
import PortfolioLanding from './PortfolioLanding'
import {Routes, Route, HashRouter} from 'react-router-dom'
import Modelo1 from './pages/Lojadecelular'
import Modelo2 from './pages/Manicure'
import Modelo3 from './pages/Mecanica'
import Modelo4 from './pages/Acaiteria'


function App() {


  return (
    <>

      <HashRouter>
        <Routes>
          <Route path='/' element={<PortfolioLanding/>} exact />
          <Route path='/modelo-1' element={<Modelo1/>} />
          <Route path='/modelo-2' element={<Modelo2/>} />
          <Route path='/modelo-3' element={<Modelo3/>} />
          <Route path='/modelo-4' element={<Modelo4/>} />


          
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
