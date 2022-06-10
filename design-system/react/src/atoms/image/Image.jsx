import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Image = ({ src }) => {
  return (
    <img
      src={src}
    >
    </img>
  );
};

Input.propTypes = {
  src: PropTypes.string.isRequired,
};
   
Input.defaultProps = {
  scr: undefined,
};
