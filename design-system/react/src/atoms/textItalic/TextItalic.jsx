import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const TextItalic = ({ message }) => {
  
  return (
    
    <i>
        {message}
    </i>
    
  );
};

TextItalic.propTypes = {
  message: PropTypes.string.isRequired,
};
 

