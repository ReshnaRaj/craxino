import { useState } from 'react'
 // import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login'
import Personalinformation from './Pages/Personalinformation'
import Financialinformation from './Pages/Financialinformation'
import ResultPage from './Pages/ResultPage'
 

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
     <Route exact path='/' element={<Login/>}/>
     <Route  path='/personalinfo' element={<Personalinformation/>}/>
     <Route path='/financial' element={<Financialinformation/>}/>
     <Route path='/result' element={<ResultPage/>}/>
      
      
    
    </Routes>
    </BrowserRouter>
  )
}

export default App
