import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, ...other}) => (
    <button className="custom-button" {...other}>
        {children}
    </button>
);

export default CustomButton;