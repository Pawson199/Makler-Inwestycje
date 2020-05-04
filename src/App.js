import React, {useState} from 'react';
import { Switch, Link, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Oferta from './pages/Oferta'
import Kontakt from './pages/Kontakt'
import logo from './images/logo-makler.png'

function App() {

  const [permission, setPermission] = useState("display_off")

  const setPermissionOnClick = () => {
    setPermission( 
      prevState => prevState === "display_off" ?  "display_in" : 'display_off'
    )
  }
  
  const burger_menu = () => { return ( 
      <>
        <button onClick={setPermissionOnClick} className="burger" > MENU </button>
        <ul onClick={setPermissionOnClick} className={`${permission} burgerek`}>
          <li><Link to="/home" >HOME</Link></li>
          <li><Link to="/oferta" >OFERTY</Link></li>
          <li><Link to="/about" >O NAS</Link></li>
          <li><Link to="/kontakt" >KONTAKT</Link></li>
        </ul>
      </>
    )
  }

  const classic_menu = () => { return ( 
    <ul>
      <li><Link to="/home" >HOME</Link></li>
      <li><Link to="/oferta" >OFERTY</Link></li>
      <li><Link to="/about" >O NAS</Link></li>
      <li><Link to="/kontakt" >KONTAKT</Link></li>
    </ul>)
  }

  return (
    <>

   <div className='menu' >
    <img alt="logo" src={logo}/>
    {  window.innerWidth > 700 ? classic_menu() : burger_menu() }
   </div>

   <div className='container'>
    <Switch>
        <Route path="/home"> <Home/> </Route>
        <Route path="/oferta"> <Oferta/> </Route>
        <Route path="/about"> <About/> </Route>
        <Route path="/kontakt"> <Kontakt/> </Route>
    </Switch>
   </div>

   </>
  )

}

export default App;
