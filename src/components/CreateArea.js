import React, { useState } from "react";

function CreateArea(props) {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function antrikan(event) {
    props.onAntrikan(name);
    event.preventDefault();
    setName("");
  }

  function majukan(event) {
    props.onMajukan();
    event.preventDefault();
  }

  return (
    <div className="create_antrian">
      <form>
        <label>Nama Anda</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          autoComplete="off"
          value={name}
        />
        <br />
        <button onClick={antrikan}>Antrikan !</button>
        <button onClick={majukan}>Majukan !</button>
      </form>
    </div>
  );
}

export default CreateArea;
