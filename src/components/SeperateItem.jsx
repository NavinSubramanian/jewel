import React from 'react'
import '../logic/imageSwitch'

import ImageGallery from './ImageGallery'

import { Link, useNavigate, useParams } from 'react-router-dom'

import NavBar from './NavBar'
import Footer from './Footer'
import Enquire from './Enquire'

const SeperateItem = () => {

  let {id} = useParams()  // used to fetch item details

  let nav = useNavigate() 

  const images = [
    'https://picsum.photos/id/237/250',
    'https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0',
    'https://s.yimg.com/ny/api/res/1.2/5kukfuJeSo9OrB46m0qw6g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNg--/https://media.zenfs.com/en/pethelpful_915/9a2772c00bed83974d5529d44effaaa8'
  ];

  const enquireForm = () => {
    nav(`/single/${id}/enquire`)
  } 

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
      
      <div className="gallery-container" style={{marginBottom:'50px'}}>
          <ImageGallery images={images} />
          <div className="product-info">
              <div>
                <h3>Sample Item</h3>
              </div>
              <h4 className="price"><span style={{fontSize:'25px'}}>₹</span>70000.00</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum corporis illum accusamus, enim praesentium facere iste necessitatibus vero repudiandae voluptate recusandae vitae ex dolore? Doloremque, nihil eos. Cupiditate, placeat omnis?</p>
              <div className="actions">
                  <button onClick={enquireForm}>Enquire</button>
                  <button>Add to Favourites</button>
              </div>
              <div className="details">
                  <h4>DETAILS</h4>
                  <p>Gram rate:</p>
                  <p>Sizes:</p>
                  <p>Weight:</p>
              </div>
          </div>
      </div>

      <Footer />
    </>
  )
}

export default SeperateItem