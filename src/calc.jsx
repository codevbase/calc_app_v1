import React, { useState } from "react";
import ReactDOM from "react-dom"
import './calc.css'


function Calc(){
    const [currentSum,setCurrentSum]=useState(0);
    const [clear,setClear]=useState(false);

    // useEffect(()=>{
    //     document.querySelector('#result').value="";
    //   },[])




    // useEffect(()=>{
    //     if(clear)
    //     document.querySelector('#result').value="";
    //   })


      const Add=(e)=>{
        e.preventDefault();
        if(clear) setClear(false);
        let currentNum=document.querySelector('#num').value
        if(currentNum=='')
        return;
        let sum= currentSum+parseInt(currentNum);
        setCurrentSum(sum);
        document.querySelector('#num').value="";
          
      }


      const Clear=(e)=>{
        e.preventDefault();
        console.log('sum:', currentSum);
        document.querySelector('form').reset();
        setClear(true);
        setCurrentSum(0);
      }
    
    return(
        <div className="App">
          <div className="app-title">
        <h1>Form Calculator</h1>
        <img src="logo512.png" alt="react pic" />
        </div >

        <form id="formstyle">
              <div id="inpt">
            <input type="text" id="result" value={currentSum} readOnly />
            <input type="text" id="num" placeholder="enter a number" />
            <button onClick={Add}>Add</button>
            <button onClick={Clear}>Clear</button>
            </div>

        </form>

        <div id="parent">
          <p>parent</p>
          <div id="child">
            <p>child</p>
            <div id="grandchild">
              <p>blank</p>

            </div>
          </div>
        </div>
        
        </div>

    )
}

export default Calc;