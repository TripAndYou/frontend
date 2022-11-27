import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages'
import Main from '../pages/main'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default Routers
