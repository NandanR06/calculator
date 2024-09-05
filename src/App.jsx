import React, { useState } from "react";
import "./App.css"

 export default function App(){
  const [ans,setans]=useState("");
  console.log(ans);
    const sum=(e)=>{
      setans(
          ans+e.target.value
      )
    }

    const calculate=()=>{
      setans(eval(ans))
    }
  return(
    <div className="home">
    <div className="calculator">
      <input type="text"placeholder="Hello!"  className="display" value={ans}/>
      <div className="button">
        <div>
          <input type="button" value={"AC"} onClick={e=>{setans("")}} />
          <input type="button" value={"DE"} onClick={e=>{setans(ans.slice(0,-1))}} />
          <input type="button" value={"."}  onClick={sum}/>
          <input type="button" value={"/"}  onClick={sum}/>

        </div>
        <div>
        <input type="button" value={7}  onClick={sum}/>
          <input type="button" value={8} onClick={sum}/>
          <input type="button" value={9} onClick={sum}/>
          <input type="button" value={"*"}  onClick={sum}/>
        </div>
        <div>
        <input type="button" value={4} onClick={sum}/>
          <input type="button" value={5}  onClick={sum} />
          <input type="button" value={6} onClick={sum} />
          <input type="button" value={"+"} onClick={sum} />
          <input type="button" value={1}  onClick={sum} />
          <input type="button" value={2} onClick={sum} />
          <input type="button" value={3}  onClick={sum}/>
          <input type="button" value={"-"} onClick={sum} />
        </div>
        <div className="end-row">
          <input type="button" value={0}  onClick={sum}/>
          <input type="button"value={"00"}onClick={sum} />
          <input type="button" value={"="} onClick={calculate} className="equal-button" />
        </div>
        
      </div>
    </div>
    </div>
  )
}

