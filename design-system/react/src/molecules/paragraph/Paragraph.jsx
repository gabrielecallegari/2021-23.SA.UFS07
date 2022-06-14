import React from 'react';
import PropTypes from 'prop-types';

export const Paragraph = ({ message }) => {
  
    return (
      <p>
          {message}
      </p>
      
    );
  };

  Paragraph.propTypes = {
    message: PropTypes.string.isRequired,
  };