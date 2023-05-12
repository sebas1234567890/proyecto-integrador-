import './App.css';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Deatil from './components/Deatil/Deatil';

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {
const [characters, setCharacters] = useState([]);

function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
};

const onClose = (id) =>{
   setCharacters(
      characters.filter((char) =>{
         return char.id !== Number(id)
      }

      )
   )
}


   return (
      <div className='App'>
         <Nav onSearch = {onSearch} />
         <Routes>
            <Route path= "/home" element={<Cards characters={characters} onClose = {onClose} />}/>
         
            <Route path= "/About" element={<About/>}/>

            <Route path= "/detail/:id" element={<Deatil/>}/>
         
         </Routes>
      </div>
   );
}

export default App;
