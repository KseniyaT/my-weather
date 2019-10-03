import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ className, value, isLoading }) => { // eslint-disable-line arrow-body-style
  return (
    <button
      disabled={!value || isLoading}
      type="submit"
      className={`${className} btn btn--yellow ${(!value || isLoading)
        ? 'btn--disabled btn--yellow--disabled'
        : ''
      }`}
    >
      {'Search'}
    </button>
  );
};

SubmitButton.defaultProps = {
  className: '',
  value: '',
  isLoading: false,
};

SubmitButton.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default SubmitButton;
