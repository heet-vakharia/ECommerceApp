import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({signMethod, children , ...otherProps}) => {
    return (
        <button className={`custom-button ${signMethod}`} {...otherProps}>
          {children}
        </button>
      );
}
 
export default CustomButton;
