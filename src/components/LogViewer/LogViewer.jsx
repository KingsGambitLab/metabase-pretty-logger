import React from 'react';
import PropTypes from 'prop-types';

import { LazyLog } from 'react-lazylog';

function LogViewer({ content }) {
  return (
    <LazyLog
      enableSearch
      text={content}
      caseInsensitive
      extraLines={5}
    />
  );
}

LogViewer.propTypes = {
  content: PropTypes.string,
};

export default LogViewer;
