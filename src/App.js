import React, { useState } from "react";
import './App.css'
import GraphSlide from "./GraphSlide";

function App() {
  
  var layout= [
    'Intro',
    'Accurate Measurements',
    'How Did Covid Affect This?',
    'Extrapolation'
  ];
  
  const [graph, updateGraph]=useState(<GraphSlide graphType={'Graduation Rates'} year= {2017}/>)

  return (
    <div className= 'body'>
      <div className= 'part'>
        <div className= "title">Intro</div>
      </div>

      <div className= 'part'>
        <div className= "title">How to Measure Success?</div>
        <div className="subtext">
          Possible forms of Measurement:
          <ul>
            <li>Grades/ GPA</li>
            <li>Attendance Rate</li>
            <li>Graduation Rate</li>
          </ul>
          
        </div>
        {/* <div className="group"> */}
        <GraphSlide graphType={'Attendance Rates'} year= {2017}/>
        <GraphSlide graphType={'Graduation Rates'} year= {2017}/>
        <GraphSlide graphType={'Correlation'} year= {2017}/>
        {/* </div> */}
        

      </div>





      <div className= 'part'>
        <div className= "title">Covid's Effect</div>
      </div>

      <div className= 'part'>
        <div className= "title">Extrapolation</div>
      </div>

    </div>
  );
}

export default App;
