import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Field({
  name,
  label,
  labelClassName,
  className,
  hint,
  hintClassName,
  error,
  errorClassName,
  children,
}) {
  return (
    <div className={classNames('m-b-s', { [className]: className })}>
      {label && (
        <div className="m-b-xxs">
          <label
            className={classNames('dark bold', {
              [labelClassName]: labelClassName,
            })}
          >
            {label}
          </label>
          {hint && (
            <div
              className={classNames('h6', {
                [hintClassName]: hintClassName,
              })}
            >
              {hint}
            </div>
          )}
        </div>
      )}
      {children}
      {error && (
        <div
          className={classNames('h6 danger', {
            [errorClassName]: errorClassName,
          })}
        >
          {error}
        </div>
      )}
    </div>
  );
}

Field.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  className: PropTypes.string,
  hint: PropTypes.string,
  hintClassName: PropTypes.string,
  serverErrors: PropTypes.object,
  error: PropTypes.string,
  errorClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};
