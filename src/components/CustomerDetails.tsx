import React, { useEffect, useState } from 'react';
import { Customer } from './types';
import ImageGrid from './ImageGrid';

interface Props {
    customer: Customer;
}

const CustomerDetails: React.FC<Props> = ({ customer }) => {
    const [timer, setTimer] = useState<number>(10);

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer((prev) => (prev > 1 ? prev - 1 : 10));
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    return (
        <div className="customer-details">
            <div className="timer">Next refresh in: {timer}s</div>
            <h2>{customer.name}</h2>
            <h4>{customer.title}</h4>
            <p>{customer.address}</p>
            <ImageGrid photos={customer.photos} category={customer.category} />
        </div>
    );
};

export default CustomerDetails;
