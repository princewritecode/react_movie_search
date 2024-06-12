import React from "react";

export default function MovieCard(props)
{
    console.log(props);

    return <>
        <div className="card" key={props.movie.imdbID}>
            <img className="card--image"
                src={`${props.movie.Poster}`}
                alt={props.movie.Title + ' poster'}
            />
            <div className="card--content">
                <h3 className="card--title">{props.movie.Title}</h3>
                <p><small>RELEASE DATE: {props.movie.Year}</small></p>
                <p><small>RATING: {props.movie.Rated}</small></p>
            </div>
        </div>
    </>;
}