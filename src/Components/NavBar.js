import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function NavBar  () {
  const wishlist =useSelector(state=>state.wishListReducer.wishlist)
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <ul className="navbar-nav">
        <li className="nav-item"><NavLink className="nav-link" to="AllMovies" >Movies</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="Login" >Login</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="AboutUs" >About us</NavLink></li>

        <li className="nav-item"><NavLink className="nav-link" to="WishList" >WishList</NavLink><span>{wishlist.length}</span></li>
 
    </ul>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    )}

export default NavBar;
