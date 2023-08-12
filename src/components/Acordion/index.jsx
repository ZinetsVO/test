import React, {useState} from "react";
import css from "./styles.module.css";

const Acordion = () => {
  
  const [state, setState] = useState(false);
  console.log(state);

  const questionsHeandler = () => {
    console.log("click questions");
    console.log(setState(!state));
  }

  console.log(state);

   return (
    <div className={css.acordion}>
      <div className={css.question} onClick={questionsHeandler}>Can you say something?</div>
      <div className={state? css.answer + " " + css.active : css.answer}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        vitae nobis nam nemo sed iste eveniet quos, quis atque tempore
        exercitationem in quasi voluptates unde minus ipsam aperiam nulla
        Consequuntur!
      </div>
    </div>
  );
};

export default Acordion;