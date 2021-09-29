import React, { useState } from "react";
import data from "../Pages/Data";
import "../Pages/ReadData.css";
console.log(data);
const ReadData: React.FC = (props) => {
  //   const useData = props.name;
  //   console.log("usedaat", useData);
  const [val, setVal] = useState(data);

  const handleRemoveItem = (e: any) => {
    console.log(e.id);
    setVal(val.filter((item) => item.id !== e.id));
    console.log("deleted");
  };

  return (
    <div className="main_data">
      <div className="section_1">
        <table style={{ border: "1px solid black" }}>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>createdAt</th>
            <th>DeleteRecord</th>
          </tr>
          {val.map((v, index) => {
            return (
              <tr>
                <td>{v.id}</td>
                <td>{v.title}</td>
                <td>{v.description}</td>
                <td>{v.createdAt}</td>
                <td>
                  <button value={index} onClick={() => handleRemoveItem(v)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
export default ReadData;
