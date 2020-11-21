import React from 'react';

import CollectionItem from '../collection-item/collection.item.component.jsx';
import './preview-collection.scss';

const PreviewCollection =({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {/* {items
                .filter((item, idx) => idx < 4)
                .map( item => (
                    <div key={item.id}>{item.name}</div>
            ))} */}
                        {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherProps}) => (
                    <CollectionItem key={id} {...otherProps} />
            ))}
        </div>
    </div>
);

export default PreviewCollection;