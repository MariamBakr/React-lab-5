
import { Route, Routes } from 'react-router-dom';
import './App.css';

import MovieDetails from './Components/Movie-Details';
import WishList from './Components/WishList'
import Movies from './Components/Movies';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import AboutUs from './Components/About-Us';
import {Provider} from 'react-redux';
import {store} from './Redux/Store'

function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/AllMovies' element={<Movies/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<MovieDetails/>}/>
        <Route path='/wishlist' element={<WishList/>} />
        

      </Routes>
    </div>
    </Provider>
  );
}

export default App;
