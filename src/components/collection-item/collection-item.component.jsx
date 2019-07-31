import React from 'react';
import './collection-item.styles.scss'

const CollectionItem = ({imageUrl, price, name}) => (
    <div className='collection-item'>
        <div style={{backgroundImage: `url(${imageUrl})`}}
             className='image'
        />
        <span className='collection-footer'>
            <p>{name}</p>
            <p>{price}</p>
        </span>
    </div>
)

export default CollectionItem;