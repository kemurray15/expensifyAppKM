//export stateless functional component
//description, amount, createdAt value

import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt, index}) => (
    <div className="Expense">
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {amount} - {createdAt}       
        </p>
    </div>
);

export default ExpenseListItem;
