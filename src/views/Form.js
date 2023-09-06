import { useState } from "react";

function Form () {
  const [ username, setUsername ] = useState('');

  return (
    <div>
      <h1>{ username }</h1>
      <input value={ username } onInput={ (e) => setUsername(e.target.value)}/>
    </div>
  );
}

export default Form;
