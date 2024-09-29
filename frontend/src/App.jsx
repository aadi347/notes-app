import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import DeleteNote from './pages/DeleteNote'
import EditNote from './pages/EditNote'
import CreateNote from './pages/createNote'
import ShowNote from './pages/ShowNote'

const App = () => {
  return (
    <Routes>
    <Route path='/' element={ < Home /> } />
    <Route path='/delete-note/:id' element={ < DeleteNote /> } />
    <Route path='/edit-note/:id' element={ < EditNote /> } />
    <Route path='/create-note' element={ <CreateNote/> } />
    <Route path='/show-note/:id' element={ < ShowNote/> } />
    </Routes>
  )
}

export default App