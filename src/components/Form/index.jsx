import React, {useState} from "react";
import css from "./styles.module.css";

const Form = () => {
  
  const [name, setName] = useState("");
  const inputChange = (e) => {
    setName(e.target.value);
  }


   return (
    <form className={css.container}>
      <label>
        <input type="text" placeholder="text" value = {name} onChange={inputChange}/>
      </label>
      <button>Submit!</button>
    </form>
  );
};

export default Form;