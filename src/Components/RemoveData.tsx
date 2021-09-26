import React from "react";
type person = {
  data: string;
};
function RemoveData(props: person) {
  return (
    <>
      <h1>welcome to demo{props.data}</h1>
    </>
  );
}
export default RemoveData;
