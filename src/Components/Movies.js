import {useEffect , useState} from 'react';
import React from 'react';
import axios from 'axios';
import AllMovieCards from './All-Movie-cards'

function Movies () {

    let [movies,setMovies]=useState([])
    useEffect(()=> 
    {
        axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=839ed5284ab57d55bbeb326431903f9b').then(res=>
        {
            setMovies(res.data.results);
        })
    },[])
    return (
        <div className='row'>
            {movies.map((item,index)=> <div className='col-3'> <AllMovieCards results={item} key={index} /> </div> )}
        </div>
    );
}

export default Movies;
