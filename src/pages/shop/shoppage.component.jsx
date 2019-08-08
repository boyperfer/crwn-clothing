import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection-page.component'
import withSpinner from '../../components/with-spinner/with-spinner.component'

import { updateCollections } from '../../redux/shop/shop.actions'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview)
const CollectionPageWithSpinner = withSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({ loading: false })
        })
    }

    render() {
        const { match } = this.props
        const { loading } = this.state
        return (
            <div>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={props => <CollectionOverviewWithSpinner isLoadind={loading} {...props}/>} />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={props => 
                        <CollectionPageWithSpinner isLoading={loading} {...props}/> 
                    }
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);