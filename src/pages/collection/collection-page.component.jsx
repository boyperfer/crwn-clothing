import React from 'react'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'
import './collection-page.styles.scss'

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    console.log(collection)
    return(
    <div className='collection-page'>
        <div className='title'>{title}</div>
        <div className='items'>
            {
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
        </div>
    </div>
    )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)