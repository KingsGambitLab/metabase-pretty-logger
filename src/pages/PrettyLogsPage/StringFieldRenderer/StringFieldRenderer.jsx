import React from 'react';

import styles from './StringFieldRenderer.module.scss';

function StringFieldRenderer({ field, value }) {
  return (
    <div className="m-b-s">
      <div className="h5 no-mgn-b hint bold">{field.label}</div>
      <div className={styles.value}>{value || '-'}</div>
    </div>
  );
}

export default StringFieldRenderer;
