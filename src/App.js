import React from "react";
import './App.css'
import CovidSlide from "./CovidSlide";
import CovidType from "./CovidType";
import GraphSlide from "./GraphSlide";

function App() {
  
  return (
    <div className= 'body'>
      <div className= 'part'>
        <div className= "title">Intro</div>
      </div>

      <div className= 'part'>
        <div className= "title">How to Measure Success?</div>
          <div className="subtext">
            <div className="textGroup">
              Possible forms of Measurement:
              <ul>
                <li>Grades/ GPA</li>
                <li>Attendance Rate</li>
                <li>Graduation Rate</li>
              </ul>
              </div>
              <div className="textGroup">
                Possible forms of Measurement:
                <ul>
                  <li>Grades/ GPA</li>
                  <li>Attendance Rate</li>
                  <li>Graduation Rate</li>
                </ul>
            </div>
          </div>
        <div className="group">
        <GraphSlide graphType={'Attendance Rates'} year= {2017}/>
        <GraphSlide graphType={'Graduation Rates'} year= {2017}/>
        <hr></hr>
        <GraphSlide graphType={'Correlation'} year= {2017}/>
        <GraphSlide graphType={'PieChart'}    year= {2017}/>
        </div>
        

      </div>

      <div className= 'part'>
        <div className= "title">Covid's Effect</div>
        <div className="subtext">
          <div className="group">
            <div className='graphLayout'>
              <div className="title">Historical Covid Cases</div>
              <CovidType graphType={'covidCases'}/>
            </div>
            <br></br>
            <CovidSlide graphType={'covidAtt'} borough= {'Queens'}/>
          </div>
        </div>
      </div>

      <div className= 'part'>
        <div className= "title">Extrapolation</div>
      </div>

    </div>
  );
}

export default App;
