import React from 'react';
import { useNavigate } from 'react-router-dom';

function AllMovieCards ({results}) {
    const nav=useNavigate()
    function go(id){
        console.log(id)
        nav('/movies/'+id)
    }

    return (
        <div className="card" style={{width: "18rem",height:'50rem'}}>
    <img className="card-img-top" src={"https://image.tmdb.org/t/p/w500/"+ results.poster_path} alt="Card  cap"/>
    <div className="card-body">
        <p className='card-title'>'{results.original_title}'</p>
        {/* <p className='card-title'>'{results.overview}'</p> */}
        <p className='card-title'>'{results.release_date}'</p>
      <button className='btn btn-danger' onClick={()=>go(results.id)}> View Details</button>
    </div>
  </div>
    );
}

export default AllMovieCards;
