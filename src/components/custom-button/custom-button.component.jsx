import React from 'react';

import './custom-button.styles.scss';

// pass props into the button
const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps} >
        {children}
    </button>
);

export default CustomButton;