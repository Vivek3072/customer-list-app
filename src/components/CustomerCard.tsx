import React from 'react';
import { Customer } from './types';

interface Props {
    customer: Customer;
    isSelected: boolean;
    onClick: () => void;
}

const CustomerCard: React.FC<Props> = ({ customer, isSelected, onClick }) => {
    return (
        <div onClick={onClick} className={`customer-card ${isSelected ? 'selected' : ''}`}>
            <h3>{customer.name}</h3>
            <p style={{ fontSize: "1rem", margin: "0px" }}>{customer.title.slice(0, 70)} ... </p>
        </div>
    );
};

export default CustomerCard;