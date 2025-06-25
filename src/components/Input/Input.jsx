import React from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';

function Input({ className, ...remainingProps }) {
  return (
    <input
      className={classNames(styles.root, className)}
      {...remainingProps}
    />
  );
}

export default Input;
