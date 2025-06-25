import React from 'react';

import ErrorLayout from 'components/ErrorLayout';

function NotFoundPage() {
  return (
    <ErrorLayout
      title="Oh no! We couldn’t find it"
      message="Page you are looking for does not exist"
    />
  );
}

export default NotFoundPage;
