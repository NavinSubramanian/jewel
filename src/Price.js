import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


const Price = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    const [goldPrice, setGoldPrice] = useState();
    const [silverPrice, setSilverPrice] = useState();
    //these can be used to store the new prices and update them

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='price-tab'>
            <h2 style={{ marginBottom: '40px' }}>Update up today jewel price...</h2>
            <p>Date: {currentDateTime.toLocaleDateString()} Time: {currentDateTime.toLocaleTimeString()}</p>

            <div className="form-container">
                <div className="form-item">
                    <label htmlFor="gold-price">Gold Price:</label>
                    <div className="input-group">
                        <input id="gold-price" className="form-field" type="number"/>
                        <span>/gram</span>
                    </div>
                </div>

                <div className="form-item">
                    <label htmlFor="silver-price">Silver Price:</label>
                    <div className="input-group">
                        <input id="silver-price" className="form-field" type="number"/>
                        <span>/gram</span>
                    </div>
                </div>
            </div>
            <button>
                <Link to='/admin'>Update Price</Link>
            </button>
        </div>
    )
}

export default Price