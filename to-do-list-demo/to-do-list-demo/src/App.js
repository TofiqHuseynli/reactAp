import React from "react";
import List from "./Task/List";

function App() {
  const [change,setChange]=React.useState("");
  const [list,setList]=React.useState(JSON.parse(localStorage.getItem("mySorage")) || []);
  console.log(list)

  return (
<List change={change} setChange={setChange} list={list} setList={setList}/>
  );
 
}

export default App;



