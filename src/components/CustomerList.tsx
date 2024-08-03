import React from 'react';
import { Customer } from './types';
import CustomerCard from './CustomerCard';

interface Props {
    customers: Customer[];
    selectedCustomerId: number;
    onCustomerSelect: (id: number) => void;
}

const CustomerList: React.FC<Props> = ({ customers, selectedCustomerId, onCustomerSelect }) => {
    return (
        <div className="customer-list">
            {customers.map(customer => (
                <CustomerCard
                    key={customer.id}
                    customer={customer}
                    isSelected={customer.id === selectedCustomerId}
                    onClick={() => onCustomerSelect(customer.id)}
                />
            ))}
        </div>
    );
};

export default CustomerList;
