import React from 'react';
import SearchComponent from './Search';

export default function FormComponent(props) {
  return (
    <div className="search--container">
      <div className="openSearchContainer">
        <label htmlFor="select" className="open--select">Helenski, Finland</label>
        <input className="add-country-input" type="text" name="country" />
        <input className="add-guest-input" type="text" name="guests" placeholder="Add guests" />
        <button className="open-search-button" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#EB5757" /></svg>
        </button>
      </div>
      <div className="search-component--container">
        <input className="open" type="checkbox" id="select" />
        <SearchComponent
          handleChange={props.handleChange}
          incrementAdults={props.incrementAdults}
          decrementAdults={props.decrementAdults}
          incrementChildren={props.incrementChildren}
          decrementChildren={props.decrementChildren}
          adults={props.adults}
          children={props.children}
        />
      </div>
    </div>
  )
}