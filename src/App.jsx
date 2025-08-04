import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes  } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Pages/Home/Home'


const App = () => {

  return (
    <div>
     <Navbar/>
     <Home/>
    {/* <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/video/categoryId/:videoId' element={<Video/>}/>
    </Routes> */}
    </div>
  )
}

export default App
