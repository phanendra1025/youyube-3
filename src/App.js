import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import NxtWatchContext from './Context/NxtWatchContext'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here
class App extends Component {
  state = {
    darkTheme: false,
  }

  changeTheTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  render() {
    const {darkTheme} = this.state
    return (
      <NxtWatchContext.Provider
        value={{darkTheme, changeTheTheme: this.changeTheTheme}}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
