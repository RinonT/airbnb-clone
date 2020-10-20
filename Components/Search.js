import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Stays from '../stays.json'
import CityText from './editSearch';

export default function Search() {
    const [cities, setCities] = useState([]);
   const [text, setText] = useState("")
    function handleChange(e) {
        const cityName = e.target.value;
         const filteredStays = Stays.filter(stay => stay.city.toLowerCase().includes(cityName.toLowerCase()))
         setCities(filteredStays)
     }

     
  
    function editSearch(e) { 
        const searchHtml = <div className="searchContainer">
        <h3>Edit your search</h3>
        <input className="add-country-input" type="text" name="country" placeholder="Helenski, Finland" onChange={handleChange}/>
        <input className="add-guest-input" type="text" name="guests" placeholder="Add a guest"/>
        <p>{text}</p>
        <div>
                <button className="search-button" type="button"> Search</button>
        </div>
    </div>;
        ReactDOM.render(searchHtml, document.getElementById("modal")) 
    }

    return(
        <>
        <div className="openSearchContainer">
            <input className="add-country-input" type="text" name="country" placeholder="Helenski, Finland"/>
            <input className="add-guest-input" type="text" name="guests" placeholder="Add a guest"/>
            <button className="open-search-button" type="button" onClick={editSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#EB5757"/></svg>
            </button>
        </div>
        <div id="modal"></div>
        </>
    )
}