import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-up-and-sign-in/sign-up-and-sign-in.component'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact  path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
