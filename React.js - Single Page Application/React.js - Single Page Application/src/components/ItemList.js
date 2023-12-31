import React from 'react';

const ItemList = ({ items }) => (
    <ul>
        {items.map((item) => (
            <li key={item.id}>{item.title}</li>
        ))}
    </ul>
);

export default ItemList;
