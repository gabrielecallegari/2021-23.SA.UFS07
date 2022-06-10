import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ onData, placeholder, type,isValid,label, id }) => {
  function onInput(InputEvent){
      console.log("input.onData ", InputEvent);
      if(typeof onData==='function'){
        onData(InputEvent.target.value);
      }
      
  }
  const message=isValid? "Valore giusto" : "Valore errato"
  return (
    <React.Fragment>
      <input
        onInput={onInput}
        placeholder={placeholder}
        type={type} 
        id={id}
      >
      </input>
      {label===undefined ? null : <label htmlFor={id}>{label}</label>}
      {isValid===undefined ? null : message}
    </React.Fragment>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onData: PropTypes.func,
  isValid: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
};
 
Input.defaultProps = {
  onData: undefined,
  type: "text",
  isValid: undefined,
  label: undefined,
};
