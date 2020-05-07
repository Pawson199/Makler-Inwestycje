import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Oferta from './pages/Oferta'
import Kontakt from './pages/Kontakt'
import logo from './images/logo-makler.png'
import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {

  return (
    <>

   <div className='menu' >
    <img alt="logo" src={logo}/>
    <Menu/>
   </div>

   <div className='container'>
    <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route path="/oferta"> <Oferta/> </Route>
        <Route path="/about"> <About/> </Route>
        <Route path="/kontakt"> <Kontakt/> </Route>
    </Switch>
   </div>

   <Footer/>

   </>
  )

}

export default App;
