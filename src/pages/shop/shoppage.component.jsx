import React from 'react';
import { Route } from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection-page.component'

const ShopPage = ({ match }) => (
    <div>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)



export default ShopPage;