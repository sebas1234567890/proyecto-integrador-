import axios from "axios";

import {useState, useEffect} from "react";

import { useParams } from "react-router-dom";


const Deatil = ()=>{
    const {id} = useParams();

    const [characters, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

console.log(characters)

return(  
<div>

<img src={characters.image} alt="" />
<h1>nombre : {characters.name} </h1>
<h1>status: {characters.status}</h1>
<h1>species : {characters.species} </h1>
<h1>gender: {characters.gender}</h1>


</div>
)
}

export default Deatil;