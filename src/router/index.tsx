import { Route, Routes } from 'react-router-dom'
import { Search } from '../pages'
import Main from '../pages/main'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/search' element={<Search />} />
    </Routes>
  )
}

export default Routers
