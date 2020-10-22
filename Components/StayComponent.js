import React from 'react'

export default function StayComponent({beds,photo,rating,title,type,superHost}) {
  return (
    <div className="description card--city">
      <img src={photo} alt={type} />
      <div className="details">
        {superHost ? <span className="span">SUPER HOST</span> : ""}
        <span>{type}</span>
        {beds ? <span>{beds} beds</span> : ""}
        <span className="ratings">{rating}</span>
      </div>
      <p className="description-pargraph">{title}</p>
    </div>
  )
}