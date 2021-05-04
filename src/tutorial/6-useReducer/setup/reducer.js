const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      people: [...state.people, action.payload],
      showModal: true,
      modalContent: "Item Added!",
    };
  } else if (action.type === "NO_VALUE") {
    return { ...state, showModal: true, modalContent: "Name is blank!" };
  } else if (action.type === "CLOSE_MODAL") {
    return { ...state, showModal: false };
  } else if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      people: state.people.filter((person) => person.id !== action.payload),
      showModal: true,
      modalContent: "Item Removed!",
    };
  }
  throw new Error("Action type not supported");
};

export default reducer
