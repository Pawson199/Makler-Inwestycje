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

function App() {

  function first_amount_of_slides(){
    if(window.innerWidth < 900 ){ return 1 }
    else if(window.innerWidth > 900 & window.innerWidth < 1800 ){ return 2 }
    else if(window.innerWidth > 1800 ){return 3}
}
const [slides, setslides] = useState(first_amount_of_slides())
const change_quentity_of_slides = () => {

    if(window.innerWidth < 900  ){ setslides(1) }
    else if(window.innerWidth > 900 & window.innerWidth < 1800 ){setslides(2)}
    else if(window.innerWidth > 1800 ){setslides(3)}
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
    <img alt="logo" src={logo}/>
    <Menu/>
   </div>

   <div className='container'>
    <Switch>
        <Route exact path="/"> <Home slides={slides}/> </Route>
        <Route exact path="/oferta"> <Oferty/> </Route>
        <Route path="/about"> <About/> </Route>
        <Route path="/kontakt"> <Kontakt/> </Route>
        <Route path="/admin"> <Admin/> </Route>
        <Route path="/oferta/:oferta"> <Oferta/> </Route>
    </Switch>
   </div>

   <Footer/>

   </>
  )

}

export default App;
