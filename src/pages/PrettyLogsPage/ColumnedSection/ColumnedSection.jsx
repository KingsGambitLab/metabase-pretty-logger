import React from 'react';

import styles from './ColumnedSection.module.scss';

import QueryFieldRenderer from '../QueryFieldRenderer';

function ColumnedSection({ title, columns, result }) {
  return (
    <div className={styles.root}>
      <div className="m-b-xxs h3 dark bold">{title}</div>
      <div className={styles.card}>
        {columns.map((column, colIndex) => (
          <div
            className={styles.column}
            key={colIndex}
          >
            {column.items.map((item, itemIndex) => (
              <QueryFieldRenderer
                key={`${colIndex}-${itemIndex}`}
                field={item}
                value={result[item.name]}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColumnedSection;
