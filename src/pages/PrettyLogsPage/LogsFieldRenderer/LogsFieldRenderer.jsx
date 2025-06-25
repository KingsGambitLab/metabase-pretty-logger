import LogViewer from 'components/LogViewer';

import styles from './LogsFieldRenderer.module.scss';

function LogsFieldRenderer({ value }) {
  return (
    <div className={styles.root}>
      <LogViewer content={value} />
    </div>
  );
}

export default LogsFieldRenderer;
