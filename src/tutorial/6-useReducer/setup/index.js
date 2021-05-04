import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import reducer from "./reducer";
// reducer function

const Index = () => {
  const defaultState = {
    people: [],
    showModal: false,
    modalContent: "Hello World!",
  };
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = {
        id: new Date().getTime().toString(),
        name
      };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE'});
    }
  };

  const closeModal = () => {
    dispatch({ type:"CLOSE_MODAL"});
  }

  const handleClick = (id) => {
    dispatch({ type:"REMOVE_ITEM", payload: id});
  }

  return (
    <>
      {state.showModal && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Add</button>
        </div>
      </form>
      {state.people.map((person) => {
        return (
          <div className="item" id={person.id}>
            <h4>{person.name}</h4>
            <button type="submit" onClick={() => handleClick(person.id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
