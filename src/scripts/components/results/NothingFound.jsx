import React from 'react';

const NothingFound = () => { // eslint-disable-line arrow-body-style
  return (<div className="result_body">
    <h2 className="result_info">
      {'Nothing was found by your request. Try changing the query.'}
    </h2>
  </div>);
};

export default NothingFound;
