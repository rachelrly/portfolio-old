import React, {Fragment} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './css/main.css';
import './css/globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Main from './components/Main'

function App() {


  return (
    <Fragment>
    <main className="App">
    <Header />
    
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
