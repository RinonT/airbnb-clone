import React  from 'react';  

export default function CityText(props) {
    return(
        <div>
            <p>{props.city}{props.country}</p>
        </div>
    )
}