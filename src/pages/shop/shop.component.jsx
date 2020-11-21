import React from 'react';
import PreviewCollection from '../../components/preview-collection/PreviewCollection';
import ShopData from './shop.data';

class ShopPage extends React.Component {
    state = {
        collections: ShopData
    };

    render() {
        const {collections} = this.state;
        return (
        <div className='shop-page'>
            {
                collections.map(({ id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </div>);
    }
}

export default ShopPage;
