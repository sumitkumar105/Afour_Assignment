import React, { useState } from "react";
import "../Forms/form.css";
import RemoveData from "../RemoveData";
import data from "../Data";
import ReadData from "../ReadData";
import SortingData from "../SortingData";
function UserInputForm() {
  const [active, setActive] = useState("");
  const [name, setName] = useState({
    id: "",
    title: "",
    description: "",
    createdAt: "",
  });
  const [count, setCount] = useState([]);

  function FetchData() {
    setActive("first");
  }
  const SortData = () => {
    setActive("second");
  };
  const DeleteData = () => {
    setActive("third");
  };
  function handleSubmit(v: any) {
    console.log(name);
  }
  return (
    <div>
      <h1>user input form</h1>
      <div className="section1">
        <form onSubmit={handleSubmit}>
          <div className="first_input">
            <input
              type="text"
              placeholder="id"
              value={name.id}
              onChange={(e) => setName({ ...name, id: e.target.value })}
            />
          </div>
          <div className="first_input">
            <input
              type="text"
              placeholder="title"
              value={name.title}
              onChange={(e) => setName({ ...name, title: e.target.value })}
            />
          </div>
          <div className="first_input">
            <input
              type="text"
              placeholder="description"
              value={name.description}
              onChange={(e) =>
                setName({ ...name, description: e.target.value })
              }
            />
          </div>
          <div className="first_input">
            <input
              type="text"
              placeholder="createdAt"
              value={name.createdAt}
              onChange={(e) => setName({ ...name, createdAt: e.target.value })}
            />
          </div>
          <div className="button1">
            <input type="submit" placeholder="submit" />
          </div>
        </form>
      </div>
      <div className="section2">
        <div className="main_btn">
          <div className="btn1">
            <button onClick={FetchData}>ReadData</button>
          </div>
          <div className="btn1">
            <button onClick={SortData}>SortData</button>
          </div>
          <div className="btn1">
            <button onClick={DeleteData}>FindData</button>
          </div>
        </div>
      </div>
      <div>
        {active === "first" && <ReadData />}
        {active === "second" && <SortingData />}
        {active === "third" && (
          <RemoveData data={"data deleted sucessfully!!"} />
        )}
      </div>
    </div>
  );
}
export default UserInputForm;
