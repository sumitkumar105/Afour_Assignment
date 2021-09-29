import React, { useState } from "react";
import "../Forms/form.css";
import RemoveData from "../Pages/RemoveData";
import data from "../Pages/Data";
import ReadData from "../Pages/ReadData";
import SortingData from "../Pages/SortingData";
function UserInputForm() {
  const [active, setActive] = useState("");
  const [name, setName] = useState({
    id: "",
    title: "",
    description: "",
    createdAt: "",
  });
  function FetchData() {
    setActive("first");
  }
  const SortData = () => {
    setActive("second");
  };
  const DeleteData = () => {
    setActive("third");
  };
  // console.log(name);

  function handleSubmit(v: any): void {
    console.log("cheking parameter", v);

    console.log(name);
    let roll = data.length + 1;
    const d = new Date();
    let newDate =
      d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    if (!name.title && !name.description) {
      alert("entered valid details!!!");
      console.log("form is not valisate");
    } else {
      data.push({
        id: roll,
        title: name.title,
        description: name.description,
        createdAt: newDate,
      });
      console.log(data);

      setName({ id: "", title: "", description: "", createdAt: "" });
      console.log("validate");
    }
    v.preventDefault();
  }
  return (
    <div>
      <h1>user input form</h1>
      <div className="section1">
        <form>
          {/* <div className="first_input">
            <input
              required
              type="string"
              pattern="[0-9]*"
              placeholder="id"
              value={name.id}
              onChange={(e) => setName({ ...name, id: e.target.value })}
            />
          </div> */}
          <div className="first_input">
            <input
              required
              type="text"
              placeholder="title"
              value={name.title}
              onChange={(e) => setName({ ...name, title: e.target.value })}
            />
          </div>
          <div className="first_input">
            <input
              required
              type="text"
              placeholder="description"
              value={name.description}
              onChange={(e) =>
                setName({ ...name, description: e.target.value })
              }
            />
          </div>
          {/* <div className="first_input">
            <input
              required
              type="text"
              placeholder="createdAt"
              value={name.createdAt}
              onChange={(e) => setName({ ...name, createdAt: e.target.value })}
            />
          </div> */}
          {/* {name.id}
          {name.title} */}
          <div className="button1">
            <button onClick={handleSubmit}>submit</button>
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
        {active === "third" && <RemoveData />}
      </div>
    </div>
  );
}
export default UserInputForm;
