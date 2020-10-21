import React from 'react' 

export default function CardComponent ({
  beds,
  city,
  maxGuests,
  photo,
  rating,
  title,
  type,
  country,
  superHost,
}) {
  return (
      <div className="card--city">
        <img src={photo}/>
        <div className="room-desc">  
          <div>
            {superHost && <p>superhost</p>}
            <small>{type}.{beds} {beds}beds</small>
          </div> 
          <div><small>{rating}</small></div>
        </div>
          <div className="card-title">{title}</div>
      </div>
  )
}