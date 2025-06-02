"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Cell from "./components/cell";
// solutions of winning
const winning = [[0,1,2],[3,4,5,],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

export default function Home() {
const [cells,setCell]=useState(["","","","","","","","",""]);
const[go,setGo]=useState("circle")
const [winningMesg,setwinningMesg]=useState("");

//if one of them are wins
useEffect(()=>{
winning.forEach((combo)=>{
  const cercleWins = combo.every((cell)=>cells[cell]==="circle")
  const crossWins = combo.every((cell)=>cells[cell]==="cross")
  if(cercleWins){
    //set the mesg 
    setwinningMesg("Circle wins")
  }
  else if(crossWins){
    setwinningMesg("Cross wins")
  }
})
},[cells])

//if bowth of them are tie
useEffect(()=>{
  if(cells.every((cell)=>cell !== "")&&!winningMesg){
setwinningMesg("draw!");
  }
})

  return (
    <main className="container">
      <div className="board">
        {cells.map((cell,index)=>(
            <Cell 
                id={index} 
                go={go} 
                setGo={setGo} 
                key={index} 
                cells={cells} 
                setCell={setCell} 
                cell={cell}
                winningMesg={winningMesg}
            />
        ))}
      </div>
      <div>
        {winningMesg}
      </div>
        {!winningMesg && <div>{`its now ${go} turn !`}</div>}
    </main>
  );
}
