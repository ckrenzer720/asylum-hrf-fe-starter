import React from 'react';
import { useAppContext } from '../context/AppContext.jsx';
import axios from 'axios';

export const useDownloadData = () => {
  const { graphData } = useAppContext();

  const filename = 'asylum_data.csv';

  function downloadJson() {
    const dataStr = JSON.stringify(graphData, null, 2); // Convert to string, formatted
    const blob = new Blob([dataStr], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();

    // Clean up the URL object
    URL.revokeObjectURL(url);
  }

  const flattenObject = (obj, prefix = '') => {
    if (obj) {
      return Object.keys(obj).reduce((acc, key) => {
        const pre = prefix.length ? `${prefix}.` : '';

        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          Object.assign(acc, flattenObject(obj[key], `${pre}${key}`));
        } else if (Array.isArray(obj[key])) {
          obj[key].forEach((item, index) => {
            Object.assign(acc, flattenObject(item, `${pre}${key}[${index}]`));
          });
        } else {
          acc[`${pre}${key}`] = obj[key];
        }

        return acc;
      }, {});
    }
  };

  const downloadCSV = async () => {
    try {
      const response = await axios.get('/api/download-csv');
      const blob = new Blob([response.data], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'asylum-data.csv';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading CSV:', error);
    }
  };

  return { downloadCSV };
};
