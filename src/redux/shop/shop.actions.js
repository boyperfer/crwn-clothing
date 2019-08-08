import ShopActionTypes from './shop.types'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const updateCollections = collectionsMap => ({
    type: ShopActionTypes.UPDATE_COLLECTION,
    payload: collectionsMap
})

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = collectionMaps => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMaps
})

export const fetchCollectionFail = errorMassage => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAIL,
    payload: errorMassage
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart())

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(fetchCollectionSuccess(collectionsMap))
        }).catch(error => dispatch(fetchCollectionFail(error.message)))
    }
}

