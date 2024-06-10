import React from 'react'
import About1 from './assets/onePagesImages/about1.png';
import About2 from './assets/onePagesImages/about2.png';
import About3 from './assets/onePagesImages/about3.png';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

const About = () => {
    return (
        <>
            <NavBar />

            <div className="about_container1">
                <div className="textAbout">
                    <h1 style={{ marginTop: '30px' }}>ABOUT US</h1>
                    <h2>About'yourname' Get to know more about our company</h2>
                    <p>Discover the heart behind our craft. Uncover our அனுபவங்களை,
                        தன்மையுடன் பிரதிநிதிகளை மற்றும் பயன்படுத்தல்களைப் பொதுவாக உள்ளிடுகிறோம்.
                        As we strive to create bespoke jewelry that reflects your unique essence.</p>
                </div>
                <div className="image_container">
                    <img className="about" src={About1} alt="about1" />
                </div>
            </div>

            <div className='about_container2'>
                <div>
                    <img className='about2' src={About2} alt='' />
                </div>
                <div className='about2p'>
                    <h1 style={{ marginTop: '30px' }}>History of our Company</h1>
                    <p style={{ marginTop: '10px', maxWidth: '600px' }}>The Indian rupee is the official currency in the Republic of India.
                        The rupee is The Indian rupee is the official currency in the Republic of India.
                        The rupee is The Indian rupee is the official currency in the Republic of India.
                        The rupee is The Indian rupee is the official currency in the Republic of India.
                        The rupee is The Indian rupee is the official currency in the Republic of India.
                        The rupee is The Indian rupee is the official currency in the Republic of India. </p>
                </div>
            </div>

            <div className='about_container3' style={{ marginTop: '50px' }}>
                <div className='servicesTextLeft'>
                    <h1>
                    We Provide Awesome Services
                    </h1>
                    <p>Experience the extraordinary with our services. We don't just meet expectations—we exceed them. Discover a world where quality, reliability, and innovation come together to create truly awesome solutions for all your needs.</p>
                </div>
                <img src={About3} alt='' draggable="false" />
            </div>

            <div className='about_container4'>
                <div>
                    <h1>Contact Information</h1>

                </div>
                <div>
                    {/* <map name=""></map> */}
                </div>
            </div>

            <Footer />
        </>

    )
}

export default About