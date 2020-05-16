import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...other}) => (
    <div className="group">
        <input className='form-input' onChange={handleChange} {...other}></input>
        {
            label ?
           (<label 
                className={`${
                    other.value.length ? 'shrink' : ''
                } form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>
);

export default FormInput;