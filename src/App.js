import React from 'react';
import './App.scss';
import axios from 'axios'

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { fetchPizzas } from './redux/actions/pizzas';

const App = () => {
  // const dispatch = useDispatch()

  // window.test = () => {
  //   axios.get('http://localhost:3001/pizzas').then(({ data }) => {
  //     dispatch(setPizzas(data))
  //   })
  // }

  React.useEffect(() => {
    
  }, [])

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