import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItemsTotal, selectCartItems } from '../../redux/cart/cart.selectors'

import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
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
        <div className='total'>Total ${total}</div>
        <div className='test-warning'>
            *please use the following test credit cart for payments*
            <br/>
            4242-4242-4242-4242 - Exp: 20/01 - CVV:123
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckOut);