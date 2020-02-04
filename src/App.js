import React from 'react';
import { Route,Switch } from "react-router-dom"; 
import Header from './components/header/header';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Home from './components/home/home';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/home" exact component={Home}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;