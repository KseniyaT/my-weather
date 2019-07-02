import React from 'react';
import PropTypes from 'prop-types';

function SubmitButton(props) {
  return (
    <button
      disabled={!props.value || props.isLoading}
      type="submit"
      className={`${props.className} btn btn--yellow ${(!props.value || props.isLoading)
        ? 'btn--disabled btn--yellow--disabled'
        : ''
      }`}
    >
      {'Search'}
    </button>
  );
}

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
