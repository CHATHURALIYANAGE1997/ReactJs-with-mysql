import React, { useState, useEffect } from 'react';
import connection from '../db';

const DatabaseViewer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    connection.query('SELECT * FROM user', (error, results) => {
      if (error) {
        console.error(error);
      } else {
        setData(results);
      }
    });
  }, []);

  return (
    <div>
      <h1>Database Data View</h1>
      <ul>
        {data.map((row, index) => (
          <li key={index}>{row.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DatabaseViewer;
