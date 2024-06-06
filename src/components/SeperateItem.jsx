import React from 'react'
import '../logic/imageSwitch'

import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const SeperateItem = () => {
  return (
    <>
      <NavBar />

      <div className='pageNavigation'>
        <Link to='/'>HOME</Link>
        <span>/</span>
        <Link to='/gold'>GOLD</Link>
        <span>/</span>
        <Link to='/'>CHAINS</Link>
        <span>/</span>
        <Link to='/'>Sample Item</Link>
      </div>
      
      <div className="gallery-container">
          {/* <div className="product-images">
              <img className="active" src="" id='slide_image_1' alt="Image 1" />
              <img src="" id='slide_image_2' alt="Image 2" />
              <img src="" id='slide_image_3' alt="Image 3" />
          </div> */}
          <ul className='productImages'>
            <li><img src='' /></li>
            <li><img src='' /></li>
            <li><img src='' /></li>
          </ul>
          <div className="product-info">
              <h3>Sample Item</h3>
              <span className="price">₹70000.00</span>
              <p>chain tho...</p>
              <div className="actions">
                  <button>Enquire</button>
                  <button>Add to cart</button>
              </div>
              <div className="details">
                  <h4>DETAILS</h4>
                  <p>Gram rate:</p>
                  <p>Sizes:</p>
                  <p>Weight:</p>
              </div>
          </div>
      </div>
    </>
  )
}

export default SeperateItem