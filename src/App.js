import React from 'react';
import { Switch, Link, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Oferta from './pages/Oferta'
import Kontakt from './pages/Kontakt'

function App() {
  return (
    <navbar>
   <ul>
    <Link to="/home" ><li>HOME</li></Link>
    <Link to="/oferta" ><li>OFERTY</li></Link>
    <Link to="/about" ><li>O NAS</li></Link>
    <Link to="/kontakt" ><li>KONTAKT</li></Link>
   </ul>

    <Switch>
      <Route path="/home"> <Home/> </Route>
      <Route path="/oferta"> <Oferta/> </Route>
      <Route path="/about"> <About/> </Route>
      <Route path="/kontakt"> <Kontakt/> </Route>
    </Switch>
    </navbar>
  )

}

export default App;
