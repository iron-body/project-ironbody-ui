import React, { useState, useEffect } from 'react';
import { InputForm } from 'inputForm';

function InputForm() {
  const [inputValue, setInputValue] = useState('');
  const [isDataSaved, setIsDataSaved] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch('/api/getData');
      if (response.ok) {
        const data = await response.json();
        setFetchedData(data);
      } else {
        console.error('Error fetching data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/saveInputData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputValue }),
      });

      if (response.ok) {
        console.log('Data saved successfully');
        setIsDataSaved(true);
        fetchData();
      } else {
        console.error('Error saving data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async id => {
    try {
      const response = await fetch(`/api/deleteData/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Data deleted successfully');
        fetchData();
      } else {
        console.error('Error deleting data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setInputValue('');
    setIsDataSaved(false);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Add to diary</button>
      {isDataSaved && <button onClick={handleCancel}>Cancel</button>}

      <h2>Power Pullse</h2>
      <ul>
        {fetchedData.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InputForm;
