
import React from "react";
import {useState} from "react"
import './../styles/App.css';

const App = () => {
const[tab,setTab]=useState("tab1");

  let content;

  if (tab === "tab1") {
    content = <h2>This is Tab 1</h2>;
  } else if (tab === "tab2") {
    content = <h2>This is Tab 2</h2>;
  } else {
    content = <h2>This is Tab 3</h2>;
  }
    
  
  return (
    <div>
        {/* Do not remove the main div */}
    <ul>
    <li onClick={()=>setTab("tab1")}>Tab1</li>
    <li onClick={()=>setTab("tab2")}>Tab2</li>
    <li onClick={()=>setTab("tab3")}>Tab3</li>
    
    </ul>
{content}
    </div>
  )
}

export default App
