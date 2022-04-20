import RouteList from './routes/MainRoutes'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Fragment } from 'react'
import { View } from './components/atoms'
import { Navbar } from './components/organisms'

function App() {
  return (
    <Router>
      <View>
        <Routes>
          {RouteList.map((el, index) => (
            <Route
              path={el.path}
              exact={el.exact}
              element={
                <Fragment>
                  {el.permission && <Navbar />}
                  {el.component}
                </Fragment>
              }
              key={index}
            />
          ))}
        </Routes>
      </View>
    </Router>
  )
}

export default App
