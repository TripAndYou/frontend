import GlobalStyles from './GlobalStyles'
import { MainStyle } from './AppStyles'
import Routers from './router'

function App() {
  return (
    <MainStyle>
      <GlobalStyles />
      <Routers />
    </MainStyle>
  )
}

export default App
