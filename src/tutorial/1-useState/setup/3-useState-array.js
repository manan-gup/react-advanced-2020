import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    return setPeople(newPeople);
  }
  return (
    <>
        {people.map((person) => {
          const {id,name} = person;
          return <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => removeItem(id)}>Delete Person</button>
          </div>
        })}
        <button className='btn' onClick={() => setPeople([])}>Clear Items</button>
    </>
  );
};

export default UseStateArray;
