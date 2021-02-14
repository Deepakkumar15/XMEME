import React from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom' ;
import Header from './components/Header/Header';
import Update from './Update';
import Home from './Home' ;

const App = () => {
  return (
    <Router>
      <Header />
      <main>
      <Route path="/" exact={true}>
        <Home />
      </Route>  
      <Route path="/memes/:id" exact={true}>
        <Update />
      </Route>
      </main>  
    </Router>  
  );
};

export default App;
