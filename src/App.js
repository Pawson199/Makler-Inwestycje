import React,{useEffect,useState} from 'react';
import { Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Oferty from './pages/Oferty'
import Oferta from './pages/Oferta'
import Kontakt from './pages/Kontakt'
import Admin from './pages/Admin'
import logo from './images/logo-makler.png'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Adminlog from './components/Adminlog'
import { AnimatePresence } from "framer-motion"
import {useHistory} from "react-router-dom";

function App() {

  let history = useHistory();

  function first_amount_of_slides(){
    if(window.innerWidth < 600 ){ return 1 }
    else if(window.innerWidth > 600 & window.innerWidth < 900 ){ return 2 }
    else if(window.innerWidth > 900  ){ return 3 }

}
const [slides, setslides] = useState(first_amount_of_slides())
const change_quentity_of_slides = () => {

  if(window.innerWidth < 600 ){ setslides(1) }
  else if(window.innerWidth > 600 & window.innerWidth < 900 ){setslides(2)}
  else if(window.innerWidth > 900  ){setslides(3)}
   }
 useEffect(() => {
   window.addEventListener('resize', change_quentity_of_slides )
   return () => {
    window.removeEventListener('resize', change_quentity_of_slides )
   }
}, [])

  return (
    <>

   <div className='menu' >
    <img onClick={ () =>  history.replace('/')} alt="logo" src={logo}/>
    <Menu/>
   </div>

   <div className='container'>
     <AnimatePresence>
      <Switch>
        <Route exact path="/"> <Home slides={slides}/> </Route>
        <Route exact path="/oferta"> <Oferty/> </Route>
        <Route path="/about"> <About/> </Route>
        <Route path="/kontakt"> <Kontakt/> </Route>
        <Route path="/admin_logged"> <Admin/> </Route>
        <Route path="/admin"> <Adminlog/> </Route>
        <Route path="/oferta/:oferta"> <Oferta/> </Route>
    </Switch> 
     </AnimatePresence>
   </div>

   <Footer/>
   </>
  )

}

export default App;
