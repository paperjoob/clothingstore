import React from 'react';

import './custom-button.styles.scss';

// pass props into the button
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    // conditionally render the className of google-sign-in, otherwise render an empty string
    // and we will also always render 'custom-button'
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps} >
        {children}
    </button>
);

export default CustomButton;