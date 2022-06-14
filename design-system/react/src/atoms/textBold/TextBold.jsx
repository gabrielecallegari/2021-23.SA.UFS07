import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const TextBold = ({ message }) => {
  
  return (
    
    <b>
        {message}
    </b>
    
  );
};

TextBold.propTypes = {
  message: PropTypes.string.isRequired,
};
 

