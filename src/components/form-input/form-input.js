import React from 'react';
import './form-input.scss';
const FormInput =({label,handleChange,...otherProps})=>(
    <div className="group">
        <input className="form-input" type={otherProps.type} onChange={handleChange} {...otherProps}  />
        {
            label?(<label className={`${otherProps.value.length ? 'shrink':''} from-input-label`}>{label}</label>
            ):null
        }
    </div>
);
export default FormInput;