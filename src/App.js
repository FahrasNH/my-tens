import RouteList from './routes/MainRoutes'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {RouteList.map((el, index) => (
            <Route
              path={el.path}
              exact={el.exact}
              element={el.component}
              key={index}
            />
          ))}
        </Routes>
      </div>
    </Router>
  )
}

export default App
