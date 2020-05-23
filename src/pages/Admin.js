import React, {useState} from 'react'

export default function Admin() {
    
    const [ image, setImage ] = useState([])
    const [desc, setdesc] = useState('')
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
    const changeDesc = (e) => {
        setdesc(e.target.value)
    }
    const changeName = (e) => {
        setoffer_name(e.target.value)
    }
    const delete_offer_name = (e) => {
        setoffer_name_delete(e.target.value)
    }

   
    const forma = new FormData()
    image.forEach( el =>  forma.append('avatar', el) )
    forma.append('desc', desc)
    forma.append('offer_name', offer_name)

 const addOffer = (e) => {
        e.preventDefault()
        fetch("http://localhost:4000/data", {
            method:"POST",
            body:forma
        })
          .then(res => res.json()).then( json => console.log(json) );
    }

const deleteOffer = (e) => {
    e.preventDefault()
    fetch( `http://localhost:4000/data/${offer_name_delete}`, {
        method: "DELETE"
    } )
    .then( response => response.json() )
    .then( json => console.log(json) )
}

    return (
        <>
        <div onSubmit={addOffer} >
        <label>Dodaj nową ofertę:</label>
            <form action="http://localhost:4000/data" method="post" encType="multipart/form-data">
                <input type="file" name="avatar" multiple="multiple" onChange={changeImage} />
                <input type="text" name="nazwa" value={offer_name} onChange={changeName}  />
                <input type="text" name="desc" value={desc}  onChange={changeDesc}  />
                <button ></button>
            </form>
       
        </div>
        <br/>
        <div onSubmit={deleteOffer} >
            <form>
                <label>Usun ofertę o nazwie:</label>
                <input type="text" name="nazwa" value={offer_name_delete} onChange={delete_offer_name}  />
                <button ></button>
            </form>
       
        </div>

        </>
    )
}
