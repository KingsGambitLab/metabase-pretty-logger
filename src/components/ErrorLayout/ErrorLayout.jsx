import React from 'react';
import { Tappable } from '@vectord/components';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './ErrorLayout.module.scss';

function ErrorLayout({
  title,
  message,
  actionLabel = 'Try again',
  actionFn,
  className,
  titleClassName,
  messageClassName,
  actionLabelClassName,
}) {
  return (
    <div className={classNames(styles.root, className)}>
      {title && (
        <div className={classNames('h2 dark bold m-b-xxs', titleClassName)}>
          {title}
        </div>
      )}
      <div className={classNames('m-b-xs', messageClassName)}>{message}</div>
      {actionLabel && actionFn && (
        <Tappable
          onClick={actionFn}
          className={classNames('btn btn-primary', actionLabelClassName)}
        >
          {actionLabel}
        </Tappable>
      )}
    </div>
  );
}

ErrorLayout.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  actionLabel: PropTypes.string,
  actionFn: PropTypes.func,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  messageClassName: PropTypes.string,
  actionLabelClassName: PropTypes.string,
};

export default ErrorLayout;
