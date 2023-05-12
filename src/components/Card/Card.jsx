import React from 'react';
import styles from "./Card.module.css";
import { Link } from 'react-router-dom';




export default function Card({id, name, status, species, gender, origin, image, onClose  }) {
   return (
      <div className= {styles.card}>
         <button  onClick={()=> {onClose(id)}}>Clouse</button>
         <Link to = {`/detail/${id}`} >
         <h2> {name} </h2>
         </Link>
         <h2> {status} </h2>
         <h2> {species} </h2>
         <h2> {gender} </h2>
         <h2> {origin} </h2>
   <img src={image} alt= {name} /> 
      </div>
   );
}
 