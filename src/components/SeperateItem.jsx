import React from 'react'
import '../logic/imageSwitch'

const SeperateItem = () => {
  return (
    <>
      <div class="gallery-container">
          <div class="product-images">
              <img class="active" src="" id='slide_image_1' alt="Image 1" />
              <img src="" id='slide_image_2' alt="Image 2" />
              <img src="" id='slide_image_3' alt="Image 3" />
          </div>
          <div class="product-info">
              <h3>Sample Item</h3>
              <span class="price">₹70000.00</span>
              <p>chain tho...</p>
              <div class="actions">
                  <button>Enquire</button>
                  <button>Add to cart</button>
              </div>
              <div class="details">
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