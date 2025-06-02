import { type } from "os";
import { Dispatch, SetStateAction } from "react";

type CellType ={
        id:number;
        go : string;
        setGo:Dispatch<SetStateAction<string>>;
        cells:string[];
        setCell:Dispatch<SetStateAction<string[]>>;
        cell:string;
        winningMesg:string;
}

const Cell = ({go,setGo,id,cells,setCell,cell,winningMesg}:CellType) => {
    const handleClick = (event) =>{

        //if the winningMesg appears on the screen ,then we have to stop the game 
        if(winningMesg){
            return;
        }

        //fill the cells 
        const taken = !!cells[id]
        if(!taken){
            if (go === "circle"){
                handlechange("circle")
                setGo("cross")
            }else if(go === "cross"){
                handlechange("cross")
                setGo("circle")
            }
            }
        }
        const handlechange =(cellToChange:string)=>{
            let copyCell = [...cells]
            copyCell[id]=cellToChange
            setCell(copyCell)
    }
    return (<div className="square" onClick={handleClick}><div className={cell}>{cell ? (cell ==="circle" ? "O" : "X"):""}</div></div>
    );
};
export default Cell;