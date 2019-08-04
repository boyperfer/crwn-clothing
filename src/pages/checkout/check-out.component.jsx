import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItemsTotal, selectCartItems } from '../../redux/cart/cart.selectors'

import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import './check-out.styles.scss'

const CheckOut = ({ total, cartItems }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckOutItem 
                    key={cartItem.id} 
                    cartItem={cartItem}
                />
            )
        }
        <div className='total'>{total}</div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckOut);