import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Text = ({ message }) => {
  
  return (
    
    <span>
        {message}
    </span>
    
  );
};

Text.propTypes = {
  message: PropTypes.string.isRequired,
};
 

