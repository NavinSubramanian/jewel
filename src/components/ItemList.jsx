import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = () => {
return (
    <Link className='itemBox' to='/single/12'>
        <div>
            <img src='https://assets.ajio.com/medias/sys_master/root/20201120/RThx/5fb7dcaff997dd8c83a37fd7/-1117Wx1400H-6005345270-multi-MODEL3.jpg' />
            <img src='https://www.orra.co.in/media/catalog/product/cache/a062e776095ada03f265202079309f18/o/p/ops13003_1.jpg' />
        </div>
        <h3>Initial Pendant</h3>
        <h5>1000.00</h5>
    </Link>
  )
}

export default ItemList