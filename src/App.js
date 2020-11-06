import Header from './components/Header';
import React from 'react'
import UserDetails from './components/UserDetails';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import NotFound from './components/NotFound';

function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/user/:id"  component={UserDetails} />
        <Route path="/top" component={Home} />
        <Route path="/job"  component={Home} />
        <Route path="/show"  component={Home} />
        <Route path="/ask"  component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;