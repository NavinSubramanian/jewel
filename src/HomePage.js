import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link, useParams } from 'react-router-dom';

import Background from './assets/homeImages/bg.png'
import StarGroup from './assets/homeImages/starGroup.png'
import SidePhoto from './assets/homeImages/sidePhoto.jpg'
import SilverPrice from './assets/homeImages/silverPrice.png'
import GoldPrice from './assets/homeImages/goldPrice.png'
import RateBanner from './assets/homeImages/rateBanner.png'
import LandingPageImage from './assets/homeImages/landingPageImage.png'
import ImageHome1 from './assets/homeImages/imageHome1.jpg'
import traditionalCared from './assets/homeImages/traditionallyCared.png'
import CustomJewellery from './assets/homeImages/customJewel.png'
import CeoBackground from './assets/homeImages/ceobackground.png'

import { useEffect, useState } from 'react';


export default function HomePage () {

  const [goldPrice, setGoldPrice] = useState(0)
  const [silverPrice, setSilverPrice] = useState(0)

  return(
    <>
      <NavBar />
      <section className='landSection'>
        <div className='leftLand'>
          <h1>Desire meets new style</h1>
          <h4>Explore the unique world of our jewelry where, sophistication intertwines with perfection.</h4>
          <Link to=''><button>மேலும் பாறஂக <FontAwesomeIcon icon={faArrowRight} /></button></Link>
        </div>
        <div className='rightLand'>
          <img src={LandingPageImage} style={{height:'500px',position:'relative',left:'-50px'}} />
        </div>
        <img src={Background} className='bg_1' alt="" />
        <img src={StarGroup} className='bg_2' alt="" />
      </section>

      <section className='siteInformation'>
        <img src={SidePhoto} />
        <div className='sitemainInfo'>
          <div>
            <h1>5K+</h1>
            <p>Product Available</p>
          </div>
          <div>
            <h1>2K+</h1>
            <p>Product Reviews</p>
          </div>
          <div>
            <h1>4.5</h1>
            <p>Customer Reviews</p>
          </div>
        </div>
      </section>

      <section className='jewelPrices' style={{backgroundImage:`url(${RateBanner})`}}>
        <h1>Todays Price</h1>
        <div>
          <div>
            <img src={GoldPrice} style={{width:'370px'}}/>
            <div style={{left:'20%',top:'35%'}}>
              <h2>{goldPrice}</h2>
              <h6>gm</h6>
            </div>
          </div>
          <div>
            <img src={SilverPrice} />
            <div style={{left:'60%',top:'35%'}}>
              <h2>{silverPrice}</h2>
              <h6>gm</h6>
            </div>
          </div>
        </div>
      </section>

      <section className='dicoverSection'>
        <h1>Discover Jewellery Collection</h1>
        <div className='discoverBottom'>
          <div>
            <img src={ImageHome1} />
            <h2>Look for your style</h2>
            <p>Explore the unique world of our jewelry collection.</p>
            <Link to=''><button>மேலும் பாறஂக <FontAwesomeIcon icon={faArrowRight} /></button></Link>
          </div>
          <div>
            <img src={ImageHome1} />
            <h2>Look for your style</h2>
            <p>Explore the unique world of our jewelry collection.</p>
            <Link to=''><button>மேலும் பாறஂக <FontAwesomeIcon icon={faArrowRight} /></button></Link>
          </div>
          <div>
            <img src={ImageHome1} />
            <h2>Look for your style</h2>
            <p>Explore the unique world of our jewelry collection.</p>
            <Link to=''><button>மேலும் பாறஂக <FontAwesomeIcon icon={faArrowRight} /></button></Link>
          </div>
        </div>
      </section>

      <section className='shopCategories'></section>

      <section className='traditionalCared'>
        <div className='traditionalImage'>
          <img src={traditionalCared} />
        </div>
        <div className='traditionalBottom'>
          <h1>Traditionally cared since 1976</h1>
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
          <Link to=''>
            <button>See More <FontAwesomeIcon icon={faArrowRight} /> </button>
          </Link>
        </div>
      </section>

      <section className='ceotalkSection'>
        <h1>We aim to make you find your style </h1>
        <div>
          <img src='' />
          <div>
            <p>Watch our CEO share valuable insights, stories, and inspirations behind our exquisite jewelry collection. Discover the passion and craftsmanship that drives us to create unique pieces for jewelry enthusiasts like you.</p>
            <Link>
              <button>Explore Now</button>
            </Link>
            <img src={CeoBackground} />
          </div>
        </div>
      </section>

      {/* <section className='reviewsSection'>
        <h1>Our valuable customer reviews</h1>
        <div className='bottomReviews'>
          <div>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            <p>The craftsmanship is impeccable, and the diamond sparkles brilliantly. My fiancee was absolutely thrilled when I proposed with this ring .I highly recommend for anyone looking for high-quality jewelry.</p>

          </div>
          <div>
            <img src='' />
          </div>
        </div>
      </section> */}

      <section className='cusomJewellery'>
        <div className='cutomJewelImage'>
          <img src={CustomJewellery} />
        </div>
        <div className='customBottom'>
          <h1>Custom Jewellery Piece</h1>
          <p>Turn your design idea into an actual product in just a few clicks</p>
          <Link to='/custom'>
            <button>Start Now </button>
          </Link>
          <h5><span>*</span>Please do note that we do not take any Copyright claim on your idea.</h5>
        </div>
      </section>

      <Footer />
    </>
  )

}

