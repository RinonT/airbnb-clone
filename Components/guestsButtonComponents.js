import React from 'react'

export default function guestsButtonComponents(props) {
    return (
        <div>
            <button type="button" onClick={props.decrementGuests}>-</button>
            <span>{props.person}</span>
            <button type="button" onClick={props.incrementGuests}>+</button>
        </div>
    )
}