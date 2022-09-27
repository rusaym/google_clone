import './App.css'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<h1>This is the search page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
