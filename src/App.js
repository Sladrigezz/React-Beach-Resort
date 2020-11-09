import React from 'react'
import "./App.css"

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'

import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/rooms/" component={Rooms}></Route>
        <Route exact path="/rooms/:single-room" component={SingleRoom}></Route>
        <Route component={Error}></Route>
      </Switch>

    </>
  )
}

export default App
