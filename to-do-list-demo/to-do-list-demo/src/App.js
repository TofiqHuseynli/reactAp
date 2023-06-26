import React from "react";
import List from "./Task/List";



function App() {
  const [change,setChange]=React.useState("");
  const [list,setList]=React.useState([]);
  console.log(list)
  return (
  <div className="bg-info">
<List change={change} setChange={setChange} list={list} setList={setList}/>


  </div>
     
    
    

    



  );
 
}

export default App;

