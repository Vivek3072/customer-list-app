import { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { Customer } from './components/types';
import './App.css';

const mockCustomers: Customer[] = [
  {
    id: 1,
    name: 'Customer 01',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 01',
    photos: [],
    category: 'nature'
  },
  {
    id: 2,
    name: 'Customer 02',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 02',
    photos: [],
    category: 'animal'
  },
  {
    id: 3,
    name: 'Customer 03',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 03',
    photos: [],
    category: 'flowers'
  },
  {
    id: 4,
    name: 'Customer 04',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 04',
    photos: [],
    category: 'mountain'
  },
  {
    id: 5,
    name: 'Customer 05',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 05',
    photos: [],
    category: 'city'
  },
  {
    id: 6,
    name: 'Customer 06',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 06',
    photos: [],
    category: 'ocean'
  },
  {
    id: 7,
    name: 'Customer 07',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 07',
    photos: [],
    category: 'forest'
  },
  {
    id: 8,
    name: 'Customer 08',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 08',
    photos: [],
    category: 'desert'
  },
  {
    id: 9,
    name: 'Customer 09',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 09',
    photos: [],
    category: 'space'
  },
  {
    id: 10,
    name: 'Customer 10',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 10',
    photos: [],
    category: 'architecture'
  },
  {
    id: 11,
    name: 'Customer 11',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 11',
    photos: [],
    category: 'food'
  },
  {
    id: 12,
    name: 'Customer 12',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 12',
    photos: [],
    category: 'fashion'
  },
  {
    id: 13,
    name: 'Customer 13',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 13',
    photos: [],
    category: 'travel'
  },
  {
    id: 14,
    name: 'Customer 14',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 14',
    photos: [],
    category: 'sports'
  },
  {
    id: 15,
    name: 'Customer 15',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 15',
    photos: [],
    category: 'art'
  },
  {
    id: 16,
    name: 'Customer 16',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 16',
    photos: [],
    category: 'automobile'
  },
  {
    id: 17,
    name: 'Customer 17',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 17',
    photos: [],
    category: 'technology'
  },
  {
    id: 18,
    name: 'Customer 18',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 18',
    photos: [],
    category: 'education'
  },
  {
    id: 19,
    name: 'Customer 19',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 19',
    photos: [],
    category: 'abstract'
  },
  {
    id: 20,
    name: 'Customer 20',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus aliquid animi ullam reiciendis molestiae nam tenetur eligendi impedit error odit, voluptas quam.',
    address: 'Address 20',
    photos: [],
    category: 'landscape'
  }
];

const App: React.FC = () => {
  const [customers] = useState<Customer[]>(mockCustomers);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number>(customers[0].id);

  const selectedCustomer = customers.find(customer => customer.id === selectedCustomerId)!;

  return (
    <div className="app">
      <h1>This here is the heading</h1>
      <div className="content">
        <CustomerList
          customers={customers}
          selectedCustomerId={selectedCustomerId}
          onCustomerSelect={setSelectedCustomerId}
        />
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
};

export default App;
