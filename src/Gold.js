import React, { useState } from 'react';

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemList from './components/ItemList';

const Gold = () => {
    const [showCategoryPopup, setShowCategoryPopup] = useState(false);

    const toggleCategoryPopup = () => {
        setShowCategoryPopup(!showCategoryPopup);
    };
    return (
        <>
            <NavBar />

            <div className='jewelHeader'>
                <h1 style={{ textAlign: 'center', color: '#C18843' }}>GOLD</h1>
                <img src='https://t4.ftcdn.net/jpg/05/27/71/81/360_F_527718147_x7XDK929xZnZqjgh0oPYz7xK0EvtnlIF.jpg' />
                <p style={{ textAlign: 'center', maxWidth: '1200px', marginTop: '20px' }}>
                    Discover the epitome of elegance with our Gold Jewelry Collection.
                    Each piece in this collection is meticulously crafted from the finest gold, offering a timeless appeal and unmatched quality.
                    From delicate necklaces and chic earrings to stunning rings and sophisticated bracelets, our collection embodies luxury
                    and refinement. Perfect for those who appreciate classic beauty and contemporary esign,
                    these pieces are sure to become treasured staples in your jewelry wardrobe.
                </p>

                <div className='prod_filter'>
                    <p style={{ color: 'grey' }}>SORT BY:</p>
                    <div style={{ position: 'relative' }}>
                        <p onClick={toggleCategoryPopup} style={{ cursor: 'pointer' }}>Category</p>
                        {showCategoryPopup && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                marginTop: '5px',
                                border: '1px solid grey',
                                padding: '10px',
                                borderRadius: '5px',
                                backgroundColor: 'white',
                                zIndex: 1,
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(4, 1fr)',
                                gap: '30px'
                            }}>
                                <div>
                                    <p><strong>Men</strong></p>
                                    <p>Chains</p>
                                    <p>Bracelets</p>
                                    <p>Rings</p>
                                    <p>Kappu</p>
                                    <p>Watch</p>
                                    <p>Pendant</p>
                                </div>
                                <div>
                                    <p><strong>Women</strong></p>
                                    <p>Chains</p>
                                    <p>Bracelets</p>
                                    <p>Rings</p>
                                    <p>Necklace</p>
                                    <p>Mangalsutra</p>
                                    <p>Pendant</p>
                                    <p>Mattal</p>
                                    <p>Nosepin</p>
                                    <p>Neethichutti</p>
                                    <p>Earings</p>
                                </div>
                                <div>
                                    <p><strong>Kids</strong></p>
                                    <p>Mattal</p>
                                    <p>Nosepin</p>
                                    <p>Nethichutti</p>
                                    <p>Earings</p>
                                    <p>Chains</p>
                                    <p>Bracelets</p>
                                </div>
                                <div>
                                    <p><strong>Others</strong></p>
                                    <p>Collections</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <p>Weight Range</p>
                    <p>Price</p>
                </div>
            </div>
            <hr style={{ maxWidth: 1000, marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }} />
            
            <div className='prod_display'>
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
            </div>

            <Footer />
        </>
    )
}

export default Gold