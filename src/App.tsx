import React, { useState } from "react";
import "./App.css";
import { Card } from "./components/card";
import { Input } from "./components/input";
interface Person {
  name: string;
  age: number;
  hobby: string;
}
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState("");
  const [personList, setPersonlist] = useState<Person[]>([]);

  const handleSubmit = (name: string, age: number, hobby: string) => {
    const person = { name, age, hobby };
    setPersonlist([...personList, person]);
  };

  return (
    <div className="App">
      <Input
        placeholder="nome"
        label="nome"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="idade"
        label="idade"
        type="number"
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <Input
        placeholder="Hobby"
        label="hobby"
        onChange={(e) => setHobby(e.target.value)}
      />
      <button onClick={() => handleSubmit(name, age, hobby)}>Enviar</button>
      {personList.map((person) => (
        <Card
          key={person.name}
          name={person.name}
          age={person.age}
          hobby={person.hobby}
        />
      ))}
    </div>
  );
}

export default App;
