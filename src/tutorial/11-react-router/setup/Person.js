import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const { id } = useParams();
  const [name, setName] = useState("Default Name");
  useEffect(() => {
    const [newPerson] = data.filter((person) => parseInt(id) === person.id);
    setName(newPerson ? newPerson.name : "Default Name");
  }, []);
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Person;
