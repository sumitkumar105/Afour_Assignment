import React, { useState } from "react";
import getData from "../Pages/Data";
function RemoveData() {
  let i = 0;

  const [check, setCheck] = useState("");
  const [FindData, setFindData] = useState([
    {
      id: 0,
      title: "",
      description: "",
      createdAt: "",
    },
  ]);
  const handleRemoveItem = (e: any) => {
    console.log(check);
    const check_id = parseInt(check);
    for (i; i < getData.length; i++) {
      if (
        getData[i].id === check_id &&
        check_id !== 0 &&
        check_id <= getData.length
      ) {
        console.log(getData[i]);
        const checkData = {
          id: check_id,
          title: getData[i].title,
          description: getData[i].description,
          createdAt: getData[i].createdAt,
        };
        setFindData([checkData]);

        console.log(checkData);
      }
    }
    console.log("deleted");
  };

  return (
    <>
      <div className="searchData">
        <label>Enter ID: </label>{" "}
        <input
          type="number"
          placeholder="enter id"
          value={check}
          onChange={(k) => setCheck(k.target.value)}
        />
        <button className="find" onClick={handleRemoveItem}>
          find
        </button>
      </div>
      <div className="main_data">
        <div className="section_1">
          <table style={{ border: "1px solid black" }}>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>description</th>
              <th>createdAt</th>
            </tr>
            {Object.values(FindData).map((v, index) => {
              console.log(v);
              return (
                <tr key={v.id}>
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
}
export default RemoveData;
