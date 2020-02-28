import React, { useState, useEffect } from 'react';
import LogItem from './LogItem';

const Logs = () => {
  // create our state
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []); // pass [] so it just runs once

  const getLogs = async () => {
    setLoading(true);

    const res = await fetch('/logs');
    const data = await res.json(); // formats and gives us the data

    setLogs(data); // the action.
    setLoading(false);
  };

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>{' '}
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

export default Logs;
