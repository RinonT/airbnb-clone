import React from 'react'

export default function Select(props) {
    return (
        <>
            <select onChange={props.handleChange} size="5">
                <option value="helsinki">
                    Helsinki, Finland
            </option>
                <option value="turku">Turku, Finland</option>
                <option value="oulu">Oulu, Finland</option>
                <option value="vaasa">Vaasa, Finland</option>
            </select>
        </>
    )
}