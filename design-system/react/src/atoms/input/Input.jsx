import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ onData, placeholder, type }) => {
  function onInput(InputEvent){
      console.log("input.onData ", InputEvent);
      if(typeof onData==='function'){
        onData(InputEvent.target.value);
      }
      
  }
  return (
    <input
      onInput={onInput}
      placeholder={placeholder}
      type={type} 
      
    >
    </input>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onData: PropTypes.func,
  isValid: PropTypes.bool,
  type: PropTypes.string,
};
 
Input.defaultProps = {
  onData: undefined,
  type: "text",
  isValid: undefined,
};
