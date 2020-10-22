import React from 'react'  

export default function SearchComponent (props) { 
  return (
    <form className="search-component">
      <fieldset>
        <label> 
          <select onChange={props.handleChange} size="5">
            <option value="">Select a city</option>
            <option value="helsinki">Helsinki, Finland</option>
            <option value="turku">Turku, Finland</option>
            <option value="oulu">Oulu, Finland</option>
            <option value="vaasa">Vaasa, Finland</option>
          </select>
        </label>
        <div>
          <details>
            <summary>Add guests
              <p>4 Guests</p>
            </summary>
            <div>
              <div className="adultsNumbers">
                <p>adults</p>
                <span>Age 13 or above</span>
                <button type="button" onClick={props.decrementAdults}>-</button>
                <span>{props.adults}</span>
                <button type="button" onClick={props.incrementAdults}>+</button>
              </div>
              <div className="childrenNumbers">
                <p>Children</p>
                <span>Age 2 - 12</span>
                <button type="button" onClick={props.decrementChildren}>-</button>
                <span>{props.children}</span>
                <button type="button" onClick={props.incrementChildren}>+</button>
              </div>
            </div>
          </details>
        </div>
        <div> 
        </div>
      </fieldset>
    </form>
  )
}