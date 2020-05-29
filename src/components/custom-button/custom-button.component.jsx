import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...other}) => (
    <button className={
        `${inverted ? 'inverted' : ''} 
         ${isGoogleSignIn ? 'google-sign-in' : ''} 
         custom-button`} {...other}>
        {children}
    </button>
);

export default CustomButton;