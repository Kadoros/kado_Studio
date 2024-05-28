import { useState } from "react";
function ToDo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    if (event.target) {
      setToDo(event.target.value);
    }
  };

  const onAdd = (event) => {
    event.preventDefault();
    if (toDo !== "") {
      setToDos((currentArray) => [toDo, ...currentArray]);
      setToDo("");
    }
  };
  console.log(toDos);
  return (
    <div>
      <h1>my To Dos ({toDos.length})</h1>
      <form onSubmit={onAdd}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="To do"
        />
        <button type="submit">Add</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default ToDo;
