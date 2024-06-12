import React from 'react';
import ReactDom from 'react-dom/client';
import SearchMovies from './search';
const root = ReactDom.createRoot(document.getElementById('root'));
const AppLayOut = () =>
{
    return <div className='container'>
        <h1 className='title'>React Movie Search</h1>
        <SearchMovies></SearchMovies>
    </div>;
};
root.render(<AppLayOut></AppLayOut>);


