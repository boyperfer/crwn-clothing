import React from 'react'
import { connect } from 'react-redux'

import { clearCartItem, removeItem, addItem } from '../../redux/cart/cart.action'

import './checkout-item.styles.scss'

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <div onClick={() => removeItem(cartItem)} className='arrow'>&#10094;</div>
                <span className='number'>{quantity}</span>
                <div onClick={() => addItem(cartItem)} className='arrow'>&#10095;</div>
            </div>
            <span className='price'>{price}</span>
            <div onClick={() => clearItem(cartItem)} className='remove-button'>&#10005;</div>
        </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearCartItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);