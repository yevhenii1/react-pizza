import React from 'react';
import './App.scss';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
// import {  useDispatch } from "react-redux"

const App = () => {
  // const dispatch = useDispatch()

  // window.test = () => {
  //   axios.get('http://localhost:3001/pizzas').then(({ data }) => {
  //     dispatch(setPizzas(data))
  //   })
  // }


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/"component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  )
}

export default App