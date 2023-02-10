import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import { addToWishList } from '../Redux/WishListSlice';
import { useDispatch } from 'react-redux';

 
function MovieDetails ()  {
    let [movie,setMovie]=useState({})
    const {id}=useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=839ed5284ab57d55bbeb326431903f9b&language=en-US").then(res=>
        {
            setMovie(res.data);
        })
    },[])
    function add(){
 
      dispatch(addToWishList({...movie,qt:1}))

    }

    return (
        <div className="container mt-5 mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="row">
            
                <div className="col-md-6">
                  <div className="product p-4">
                  <div className="text-center p-4"> <img alt='' id="main-image" src={"https://image.tmdb.org/t/p/w500/"+ movie.poster_path} width={250} /> </div>
                    <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{movie.category}</span>
                      <h5 className="text-uppercase">{movie.title}</h5>
                      <div className="price d-flex flex-row align-items-center"> <span className="act-price">{movie.release_date}</span>
                      </div>
                </div>
                <p className="about">{movie.overview}</p>
               
                <div className="cart mt-4 align-items-center"> <button onClick={add(movie)} className="btn btn-danger text-uppercase mr-2 px-4">Add to wishlist</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}

export default MovieDetails;
