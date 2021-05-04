import React, { useState } from "react";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      setPeople([...people, newPerson]);
      setName("");
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <>
      <div className="container">
        <h1>Prop Dilling</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={handleChange} />
          <button type="submit" className="btn">
            Add
          </button>
        </form>
        <List people={people} handleClick={handleClick} />
      </div>
    </>
  );
};

const List = ({ people, handleClick }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson key={person.id} handleClick={handleClick} {...person} />
        );
      })}
    </>
  );
};

const SinglePerson = ({ name, id, handleClick }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button
        onClick={() => {
          handleClick(id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default PropDrilling;
