import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import Parallax from './components/Parallax';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/ShoppingList.css';
import './styles/Parallax.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
              <AppNavBar />
              <Parallax />
              <Container>
                <ItemModal />
                <ShoppingList />
              </Container>
          </div>
      </Provider>
    );
  }
}

export default App;
