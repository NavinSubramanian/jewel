import React from 'react'

const Product = () => {

    //need to create various hook state
    //also need to add new inputs for the tags of the items 

    return (
        <div className='prod-cont'>
            <h2 style={{ textAlign: 'center' }}>Add up new products into the list</h2>

            <div className="form-container">
                <div className="form-item">
                    <label htmlFor='prod_name'>Product name:</label>
                    <div className="input-group">
                        <input className="form-field" type='text' />
                    </div>
                </div>
            </div>

            <div className="form-container">
                <div className="form-item">
                    <label htmlFor='prod_desc'>Product desc:</label>
                    <div className="input-group">
                        <input className="form-field" type='text' />
                    </div>
                </div>
            </div>

            <div className="form-container">
                <div className="form-item">
                    <label htmlFor='prod_price'>Product price:</label>
                    <div className="input-group">
                        <input className="form-field" type='number' />
                    </div>
                </div>
            </div>

            <div className="form-container">
                <div className="form-item">
                    <label htmlFor='prod_weight'>Product Weight:</label>
                    <div className="input-group">
                        <input className="form-field" type='text' />
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <label htmlFor='metal'>Metal</label>
                <select>
                    <option>Gold</option>
                    <option>Silver</option>
                    <option>Diamond</option>
                    <option>Coins</option>
                </select>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ marginTop: '30px' }}>
                    <label>Primary Image: </label>
                    <input type='file' />
                </div>

                <div style={{ marginTop: '30px' }}>
                    <label>Additional Images: </label>
                    <input type='file' multiple />
                </div>
            </div>
        <button>Save</button>
        <button>Save and Add another</button>
        </div>
    )
}

export default Product