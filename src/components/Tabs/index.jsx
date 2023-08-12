import React, {useState} from "react";
import css from "./styles.module.css";
import tabsData from "./data"

const Tabs = () => {
  

  const [tab, setTab] = useState("description");
  const tabsHandle = (tab) => {
    setTab(tab)
  }

  const filteredData = tabsData.filter((i) => i.type === tab)
  
  return (


    <div className={css.container}>
      <div className={css.buttons}>
        <button>Tab 1</button>
        <button>Tab 2</button>
        <button>Tab 3</button>
      </div>

      <div className={css.tabs}>

        <div className={css.tab}>
          <h3>Tab 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et repellendus placeat earum dolorem velit sapiente harum optio labore, asperiores eius libero mollitia recusandae enim fugit corrupti odio reiciendis obcaecati.</p>
        </div>

        <div className={css.tab}>
          <h3>Tab 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et repellendus placeat earum dolorem velit sapiente harum optio labore, asperiores eius libero mollitia recusandae enim fugit corrupti odio reiciendis obcaecati.</p>
        </div>

        <div className={css.tab}>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>

      </div>  
    </div>
  );
};

export default Tabs;