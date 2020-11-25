import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps}) => (
    <div className='group'>
        {/* otherProps such as Name, Email, Value */}
        {/* bind handleChange onto onChange */}
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {/* render a label or render "null/nothing" */}
        {label ?
            <label className={`${
                otherProps.value.length ? 'shrink' : ''
                } form-input-label` }
            >
                {label}
            </label>
            : null
        }
    </div>
);

export default FormInput;