import { useMemo } from 'react';

import styles from './RubyHashFieldRenderer.module.scss';

function RubyHashFieldRenderer({ value }) {
  const jsonString = useMemo(() => {
    try {
      return JSON.stringify(JSON.parse(value.replaceAll('=>', ':')), null, 2);
    } catch (error) {
      return value;
    }
  }, [value]);

  return <pre className={styles.value}>{jsonString || 'Empty Payload'}</pre>;
}

export default RubyHashFieldRenderer;
