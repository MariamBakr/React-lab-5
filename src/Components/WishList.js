import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, removeFromWishList } from '../Redux/WishListSlice';
import '../wishList.css'
function WishList () {
    const dispatch=useDispatch()
    let wishlist=useSelector((state)=> state.wishListReducer.wishlist)
    console.log(wishlist)
    function remove(id){
        dispatch(removeFromWishList(id))
    }
    function plus(index){
        console.log(index)
        dispatch(increment(index))
    }
    function minus(index){
        dispatch(decrement(index))
    }
    return (
        <div>
            {wishlist.map((item,index)=><section key={index} id="cart">    
          <article className="product">
            <header>
              <a className="remove">
                <img src={"https://image.tmdb.org/t/p/w500/"+ item.poster_path} alt="" />
                <h3 onClick={()=>remove(item.id)}>Remove product</h3>
              </a>
            </header>
            <div className="content">
              <h1>{item.title}</h1>
             {item.description}
              <div title="You have selected this product to be shipped in the color red." style={{top: 0}} className="color red" />
              <div title="You have selected this product to be shipped sized Small." style={{top: '43px'}} className="type small">Small</div>
            </div>
            <footer className="content">
              <span className="qt-minus">-</span>
              <span className="qt">{item.qt}</span>
              <span className="qt-plus" onClick={()=>plus(index)}>+</span>
              <span className="qt">Rating  {item.release_date}</span>
          
              <span className="qt-minus"></span>
              <h2 className="full-price">
                {item.rating}$
              </h2>
            </footer>
          </article>
        </section>)}
        </div>
      )}


export default WishList;
