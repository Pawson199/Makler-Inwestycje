import React, {useState} from 'react'

export default function Admin() {
    
    const [ image, setImage ] = useState([])
    const [ rzuty, setRzuty ] = useState([])
    const [desc, setdesc] = useState('')
    const [sizes, setsizes] = useState('')
    const [prices, setprices] = useState('')
    const [shortdesc, setshortdesc] = useState('')
    const [offer_name, setoffer_name] = useState('')
    const [offer_name_delete, setoffer_name_delete] = useState('')

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

    return (
        <>
        <div className="admin_oferty" >
        <label>Dodaj nową ofertę:</label>
            <form   >
                Zdjęcia ofert
                <input type="file" name="avatar" multiple="multiple" onChange={changeImage} />
                Rzuty(jeżeli są)
                <input type="file" name="avatar" multiple="multiple" onChange={changeRzuty} />
                Nazwa oferty
                <input type="text" name="nazwa" onChange={changeName}  />
                Krótki opis do miniaturki
                <input type="text" name="shortdesc"   onChange={changeshortdesc}  />
                Ceny:
                <input type="text" name="prices"   onChange={changeprices}  />
                Rozmiary:
                <input type="text" name="sizes"   onChange={changesizes}  />
                Opis oferty
                <input type="text" name="desc"   onChange={changeDesc}  />
                <button onClick={addOffer} ></button>
            </form>
       
        </div>
        <br/>
        <div onSubmit={deleteOffer} >
            <form>
                <label>Usun ofertę o nazwie:</label>
                <input type="text" name="nazwa" value={offer_name_delete} onChange={delete_offer_name}  />
                <button></button>
            </form>
       
        </div>

        </>
    )
}
