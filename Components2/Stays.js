import React from 'react';

export default function Stays(props) {
    return(
        <article className="container">
                <header className="article-header">
                    <h2 className="heading">Stay in {props.country}</h2>
                </header>
                <div className="description">
                    <img src={props.photo} alt={props.type} />
                    <div className="details">
                        { props.superHost ? <span className="span">SUPER HOST</span> : ""}
                        <span>{props.type}</span>
                        {props.beds ? <span>{props.beds} beds</span>: ""}
                        <span className="ratings">{props.rating}</span>
                    </div>
                    <p className="description-pargraph">{props.title}</p>
                </div>
            </article>
    )
}