import React, { useState } from 'react';

const AddItemForm = ({ onAddItem }) => {
    const [title, setTitle] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddItem({ title });
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={handleTitleChange} />
            </label>
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItemForm;
