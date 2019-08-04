import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon} from './shopping-bag.svg'
import './cart-icon.styles.scss'

const CardIcon = ({ toggleCartHidden, cartItems }) => (
<div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>
        {cartItems}
    </span>
</div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);