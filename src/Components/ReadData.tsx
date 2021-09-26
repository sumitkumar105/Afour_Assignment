import React, { useState } from "react";
import data from "./Data";
import "../Components/ReadData.css";
console.log(data);
// type newData = {
//   name: {
//     id: number;
//     title: string;
//     description: string;
//     createdAt: string;
//   }[];
// };
// interface newData {
//   id: number;
//   title: string;
//   description: string;
//   createdAt: string;
// }
const ReadData: React.FC = (props) => {
  //   const useData = props.name;
  //   console.log("usedaat", useData);
  const [val, setVal] = useState(data);
  //   useEffect(() => {
  //     setVal(useData);
  //   }, []);
  //   console.log(val);

  // console.log("data", val);

  return (
    // style={{ height: "200px", width: "800px", overflow: "scroll" }}
    <div className="main_data">
      <div className="section_1">
        <table style={{ border: "1px solid black" }}>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>createdAt</th>
          </tr>
          {data.map((v) => {
            return (
              <tr>
                <td>{v.id}</td>
                <td>{v.title}</td>
                <td>{v.description}</td>
                <td>{v.createdAt}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
export default ReadData;
