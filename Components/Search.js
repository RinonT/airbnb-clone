import React from 'react'
import GuestsButtonsComponents from './guestsButtonComponents';
import Select from './Select';

export default function SearchComponent(props) {

  return (
    <form className="search-component">
      <fieldset>
        <div className="form--header">
          <h4>Edit your search</h4>
          <button className="exit-search" type="button">&times;</button>
        </div>
        <label>
          <div className="input--container">
            <div className="input-container">
              <input type="text" className="city--input" placeholder="Helsinki, Finland" />
            </div>
            <details>
              <summary className="summary--open">Add guests
              <p>4 Guests</p>
              </summary>
              <div className="add-guest--search">
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
            <Select handleChange={props.handleChange} />
            <div className="search-button--container">
              <button className="search--button" type="button">Search</button>
            </div>
          </div>
        </label>
        <div>
          <details>
            <summary className="summary--hidden">Add guests
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