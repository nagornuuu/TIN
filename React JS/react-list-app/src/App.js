import React, { useState } from 'react';
import './App.css';

function ListItem({ item, onDelete }) {
  return (
      <div className="list-item" key={item.id}>
        <p>Nazwa: {item.name}</p>
        <button onClick={() => onDelete(item.id)}>Usuń</button>
      </div>
  );
}

function App() {

  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addValue = () => {
    if (inputValue.length < 3) {
      alert('Element musi być dłuższy niż 3 symbole');
    } else {
      const newItem = { id: Date.now(), name: inputValue };
      setList(prevList => [...prevList, newItem]);
      setInputValue('');
    }
  };

  const deleteValue = id => {
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>React.js - wprowadzenie(ListItems)</h1>
          <input
              id="inputValue"
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
          />
          <button onClick={addValue}>Dodaj</button>
          <div className="list-container">
            {list.map(item => (
                <ListItem key={item.id} item={item} onDelete={deleteValue} />
            ))}
          </div>
        </header>
      </div>
  );
}

export default App;
