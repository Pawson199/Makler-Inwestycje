import React, {useState, useContext, useEffect} from 'react'
import {ThemeContext} from '../api_context'
import {useHistory} from "react-router-dom";

export default function Admin() {
    
    const [ image, setImage ] = useState([])
    const [ rzuty, setRzuty ] = useState([])
    const [desc, setdesc] = useState('')
    const [sizes, setsizes] = useState('')
    const [prices, setprices] = useState('')
    const [shortdesc, setshortdesc] = useState('')
    const [offer_name, setoffer_name] = useState('')
    const [offer_name_delete, setoffer_name_delete] = useState('')
    const [lon, setlon] = useState(0)
    const [lat, setlat] = useState(0)

    const {isLogged, isLogged_inStorage, setisLogged_inStorage} = useContext(ThemeContext)
    const history1 = useHistory();

    const changeImage = (e) => {
       const images = e.target.files
       const images_tab = []
       for( let i = 0; i < images.length; i++){
           images_tab.push(images[i])
       }
        setImage(images_tab)
    }

    const changeRzuty = (e) => {
        const rzuty = e.target.files
        const rzuty_tab = []
        for( let i = 0; i < rzuty.length; i++){
           rzuty_tab.push(rzuty[i])
        }
         setRzuty(rzuty_tab)
     }

    const changeDesc = (e) => {
        setdesc(e.target.value)
    }
    const changeName = (e) => {
        setoffer_name(e.target.value)
    }
    const changeshortdesc = (e) => {
        setshortdesc(e.target.value)
    }
    const changesizes = (e) => {
        setsizes(e.target.value)
    }
    const changeprices = (e) => {
        setprices(e.target.value)
    }
    const changelat = (e) => {
        setlat(e.target.value)
    }
    const changelon = (e) => {
        setlon(e.target.value)
    }
    const delete_offer_name = (e) => {
        setoffer_name_delete(e.target.value)
    }

   
    const forma = new FormData()
    image.forEach( el =>  forma.append('avatar', el) )
    rzuty.forEach( el => { forma.append('avatar', el, `rzut-${el.name}`) })
    forma.append('desc', desc)
    forma.append('offer_name', offer_name)
    forma.append('shortdesc', shortdesc)
    forma.append('prices', prices)
    forma.append('sizes', sizes)
    forma.append('lon', lon)
    forma.append('lat', lat)

 const addOffer = (e) => {
        e.preventDefault()
        fetch("/data", {
            method:"POST",
            body:forma
        })
          .then(res => res.json()).then( json => console.log(json) );
    }

const deleteOffer = (e) => {
    e.preventDefault()
    fetch( `data/${offer_name_delete}`, {
        method: "DELETE"
    } )
    .then( response => response.json() )
    .then( json => console.log(json) )
}
    

useEffect(() => {
    const options = {
        method: "POST",
        body: JSON.stringify({ password : localStorage.password, login : localStorage.login}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    
    fetch('http://localhots:5000/islogged', options)
    .then( response => response.text() )
    .then( 
        res => {
            if( res === "true" ){
                setisLogged_inStorage(true)
                history1.replace('/admin_logged');
            }
            else{ setisLogged_inStorage(false) }
        }
     )
    }, [setisLogged_inStorage, history1])

    return (
        isLogged || isLogged_inStorage ? 
        <div className="adminowa">
        <div className="admin_oferty" >
        <h1>Dodaj nową ofertę:</h1>
            <form >
                <div className="photo_inputs">
                    <label>
                        <p> Zdjęcia ofert</p>
                        <input type="file" name="avatar" multiple="multiple" onChange={changeImage} />  
                    </label>
                    <label>
                        <p> Rzuty(jeżeli są)</p>
                        <input type="file" name="avatar" multiple="multiple" onChange={changeRzuty} />  
                    </label>
                </div>
                <label>
                <p> Nazwa oferty</p>
                    <input type="text" name="nazwa" onChange={changeName}  />
                </label>
               <label>
                   <p> Krótki opis do miniaturki</p>
                    <textarea type="text" name="shortdesc"   onChange={changeshortdesc}  />  
               </label>
                <label>
                   <p> Ceny:</p>
                    <input type="text" name="prices"   onChange={changeprices}  /> 
                </label>
                <label>
                   <p> Rozmiary:</p>
                    <input type="text" name="sizes"   onChange={changesizes}  />  
                </label>
                <label>
                   <p> Opis oferty</p>
                    <textarea type="text" name="desc"   onChange={changeDesc}  />
                </label>
                <label>
                    <p>Długość geograficzna oferty</p>
                    <input type="text" name="lon"   onChange={changelon}  />  
                </label>
                <label>
                   <p> Szerokość gograficzna oferty</p>
                    <input type="text" name="lat"   onChange={changelat}  />  
                </label>
                <button className="admin_button" onClick={addOffer} > Zapisz ofertę </button>
            </form>
       
        </div>
        <br/>
        <div className="deleting_offer" onSubmit={deleteOffer} >
            <h1> Usuwanie ofert </h1>
            <form>
                <p>Usun ofertę o nazwie:</p>
                <input type="text" name="nazwa" value={offer_name_delete} onChange={delete_offer_name}  />
                <button> Usuń ofertę </button>
            </form>
        </div>

        </div>
        : 
        <>
        <p> Musisz być zalogowany. </p>
            <button onClick={ () =>  history1.replace('/admin') } > Zaloguj się </button>
        </>
    )
}
