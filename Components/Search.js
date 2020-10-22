import React from 'react'  
import GuestsButtonsComponents from './guestsButtonComponents';

export default function SearchComponent(props) { 
  return (
    <form className="search-component">
      <fieldset>
        <label> 
        <div className="input--container">
          <input type="text" className="city--input" placeholder="Helsinki, Finland"/>
          <details>
            <summary>Add guests
              <p>4 Guests</p>
            </summary>
            <div>
              <div className="adultsNumbers">
                <p>adults</p>
                <span>Age 13 or above</span>
                <GuestsButtonsComponents incrementGuests={props.incrementAdults} decrementGuests={props.decrementAdults} person={props.adults} />
               </div>
              <div className="childrenNumbers">
                <p>Children</p>
                <span>Age 2 - 12</span>
                <GuestsButtonsComponents decrementGuests={props.decrementChildren} incrementGuests={props.incrementChildren} person={props.children} />
                </div>
            </div>
          </details>
          <select onChange={props.handleChange} size="5">
            <option value="helsinki"> 
              Helsinki, Finland
            </option>
            <option value="turku">Turku, Finland</option>
            <option value="oulu">Oulu, Finland</option>
            <option value="vaasa">Vaasa, Finland</option>
          </select>
          </div>
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
                <GuestsButtonsComponents incrementGuests={props.incrementAdults} decrementGuests={props.decrementAdults} person={props.adults} />
               </div>
              <div className="childrenNumbers">
                <p>Children</p>
                <span>Age 2 - 12</span>
                <GuestsButtonsComponents decrementGuests={props.decrementChildren} incrementGuests={props.incrementChildren} person={props.children} />
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