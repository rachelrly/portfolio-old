import React, {Fragment} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './css/main.css';
import './css/globals.css'
import Footer from './components/Footer'
import Projects from './components/Projects'
import About from './components/About'
import Main from './components/Main'
import Nav from './components/Nav'
function App() {


  return (
    <Fragment>
    <main className="App">
     
   
    <Switch>
      <Route path='/projects' component={Projects}/>
      <Route path='/about'  component={About}/>
      <Route path='/contact' />
      <Route path='/' exact component={Main}/>
    </Switch>
    </main>
  
    <Footer />
    </Fragment>
  );
}

export default App;
