import { useState } from "react";

function click(){
    console.log("dekhaa heroo");
}
export default function LudoBoard(){
    let[Moves,setMoves] = useState({blue:0, yellow:0, green:0, red:0})

    let[Arr,setArr] = useState(["no moves"])
    function updateMoves(){
        setMoves(()=>{
        return {...Moves, blue:Moves.blue+1}
        });

        // Arr.push("one move");
        // console.log(Arr);
        // setArr([...Arr,"next move"]);
    }

    function updateYellow(){
        setMoves(()=>{
        return {...Moves, yellow:Moves.yellow+1}
        });
    }

    function updateGreen(){
        setMoves(()=>{
        return {...Moves, green:Moves.green+1}
        });
    }

    function updateRed(){
        setMoves((prevMoves)=>{
        return {...prevMoves, red:Moves.red+1}
        });
    }
    return (
        <div>
            <h1>game start</h1>
            <p>{Arr}</p>
            <p>blue moves ={Moves.blue} </p>
            <button onClick={updateMoves} style={{backgroundColor:"blue"}}>+1</button>
            <p>yellow moves ={Moves.yellow} </p>
            <button onClick={updateYellow} style={{backgroundColor:"yellow",color:"black"}}>+1</button>
            <p>green moves ={Moves.green} </p>
            <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>
            <p>red moves ={Moves.red} </p>
            <button onClick={updateRed} style={{backgroundColor:"red"}}>+1</button>
        </div>
    )
}