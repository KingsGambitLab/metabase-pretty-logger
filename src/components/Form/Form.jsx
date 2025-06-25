import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Form({ children, className, serverErrors, ...remainingProps }) {
  return (
    <form
      className={classNames('form', className)}
      {...remainingProps}
    >
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Form;
