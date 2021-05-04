import React, { useState, useContext } from "react";

// more components
// fix - context api, redux (for more complex cases)

const PeopleContext = React.createContext();

const ContextAPI = () => {
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
    <PeopleContext.Provider value={{ handleClick }}>
      <div className="container">
        <h1>UseContext/Context API</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={handleChange} />
          <button type="submit" className="btn">
            Add
          </button>
        </form>
        <List people={people} />
      </div>
    </PeopleContext.Provider>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson key={person.id} {...person} />
        );
      })}
    </>
  );
};

const SinglePerson = ({ name, id }) => {
  const {handleClick} = useContext(PeopleContext);
  console.log(handleClick);
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

export default ContextAPI;
