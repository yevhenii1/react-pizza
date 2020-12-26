import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios'
import { connect } from "react-redux"

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/bd.json').then(({ data }) => {
        this.props.setPizzas(data.pizzas)
      })
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home pizzas={this.props.items} />} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  }
}

const mapDispatchToProps = (disspatch) => {
  return {
    setPizzas: (items) => disspatch(setPizzasAction(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
