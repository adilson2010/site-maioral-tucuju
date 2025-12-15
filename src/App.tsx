import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || '/'}>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App