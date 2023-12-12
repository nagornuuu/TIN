import React, { useState } from 'react';
import './App.css';

function App() {

  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addValue = () => {
    if (inputValue.length < 3) {
      alert('Element musi być dłuższy niż 3 symbole');
    } else {
      const newItem = { id: Date.now(), name: inputValue }; //na podstawie aktualnej daty i wprowadzonej wartości
      setList(prevList => [...prevList, newItem]); // Aktualizuje stan listy, dodając nowy element
      setInputValue('');
    }
  };

  // Funkcja usuwająca element z listy na podstawie jego identyfikatora
  const deleteValue = id => {
    const updatedList = list.filter(item => item.id !== id); // Tworzy nową listę, usuwając element o podanym identyfikatorze
    setList(updatedList);
  };

  // funkcja ListItem ktora reprezentuje pojedynczy element listy
  function ListItem({ item, onDelete }) {
    return (
        <div className="list-item" key={item.id}>
          <p>Nazwa: {item.name}</p>
          <button onClick={() => onDelete(item.id)}>Usuń</button>
        </div>
    );
  }

  // Renderuje główny widok aplikacji
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
            {/* Mapowanie każdego elementu z 'list' na komponent ListItem. */}
            {list.map(item => (
                <ListItem key={item.id} item={item} onDelete={deleteValue} />
            ))}
          </div>
        </header>
      </div>
  );
}
export default App;
