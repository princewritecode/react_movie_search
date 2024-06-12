import React, { useState } from "react";
export default function SearchMovies()
{
    // states input query, movies
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState({});
    const searchMovies = async (e) =>
    {
        e.preventDefault();
        const url = `https://www.omdbapi.com/?apikey=63d9006b&t=${query}`;
        try
        {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data);
        } catch (err)
        {
            console.error(err);
            setMovies(data);
        }
    };
    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park" value={query} onChange={(e) =>
                    {
                        setQuery(e.target.value);

                    }} />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card" key={movies.imdbID}>
                <img className="card--image"
                    src={`${movies.Poster}`}
                    alt={movies.Title + ' poster'}
                />
                <div className="card--content">
                    <h3 className="card--title">{movies.Title}</h3>
                    <p><small>RELEASE DATE: {movies.Year}</small></p>
                    <p><small>RATING: {movies.Rated}</small></p>
                    <p className="card--desc">{movies.Plot}</p>
                </div>
            </div>
        </>
    );
}

