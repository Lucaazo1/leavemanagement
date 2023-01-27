import React from 'react';

const people = [
  {
    name: 'James',
    age: 31,
  },
  {
    name: 'John',
    age: 45,
  },
  {
    name: 'Paul',
    age: 65,
  },
  {
    name: 'Ringo',
    age: 49,
  },
  {
    name: 'George',
    age: 34,
  }
];

function testkod() {
  return (
    <div>
      {people.filter(person => person.age < 60).map(filteredPerson => (
        <ul>
            <li>
        {filteredPerson.name}
      </li>
        </ul>
        
      ))}
    </div>
  );
}

export default testkod;