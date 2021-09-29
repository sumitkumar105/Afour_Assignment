import React from "react";
import data from "../Pages/Data";
import "../Pages/ReadData.css";
const SortingData = () => {
  const sortedData = data.sort(function (a: any, b: any): any {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    return 0;
  });
  console.log(sortedData);
  return (
    <>
      <div className="main_data">
        <div className="section_1">
          <table style={{ border: "1px solid black" }}>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>description</th>
              <th>createdAt</th>
            </tr>
            {sortedData.map((v) => {
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
    </>
  );
};
export default SortingData;
