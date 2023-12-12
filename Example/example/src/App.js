import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ItemList from './components/ItemList';
import AddItemForm from './components/AddItemForm';
import NotFound from './components/NotFound';
import './App.css';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const Home = () => (
    <div className="center-content">
        <h2>React.js - Single Page Application</h2>
    </div>
);

const App = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then(setItems);
    }, []);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <Router>
            <div className="app-container">
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/list">List</Link>
                        </li>
                        <li>
                            <Link to="/add">Add Item</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<ItemList items={items} />} />
                    <Route path="/add" element={<AddItemForm onAddItem={handleAddItem} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
