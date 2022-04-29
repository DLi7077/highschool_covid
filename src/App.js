import React from "react";
import './App.css'
import CovidSlide from "./CovidSlide";
import CovidType from "./CovidType";
import GraphSlide from "./GraphSlide";

function App() {
  
  return (
    <div className= 'body'>
      <div className= 'part'>
        <div className= "title">Highschool Education vs Covid</div>
        <div className= "subtext">
          This project seeks to determine Covid-19's affect on highschool education.
        </div>
      </div>

      <div className= 'part'>
        <div className= "title">How to Measure Success?</div>
          <div className="subtext">
            <div className="textGroup">
              <u>Possible forms of Measurement</u>:
              <ul>
                <li>Grades/ GPA</li>
                <li>Attendance Rate</li>
                <li>Graduation Rate</li>
              </ul>
              </div>
              <div className="textGroup">
              <u>Complications</u>:
              <ul>
                <li>Grades/GPA not recorded</li>
                <li>Attendance Rates for 2020 not recorded</li>
                <li>Graduation Rates recorded annually</li>
                </ul>
              </div>
          </div>

          <div className="title">Data Collection</div>
          <div className="subtext">
            <br></br>
            <a href="https://data.cityofnewyork.us/Education/2021-DOE-High-School-Directory/8b6c-7uty" rel="noreferrer" target="_blank">
              2021 DOE High School Directory
            </a>
            <br></br>
            <a href="https://data.cityofnewyork.us/Education/2020-DOE-High-School-Directory/23z9-6uk9" rel="noreferrer" target="_blank">
              2020 DOE High School Directory
            </a>
            <br></br>
            <a href="https://data.cityofnewyork.us/Education/2019-DOE-High-School-Directory/uq7m-95z8" rel="noreferrer" target="_blank">
              2019 DOE High School Directory
            </a>
            <br></br>
            <a href="https://data.cityofnewyork.us/Education/2019-DOE-High-School-Directory/uq7m-95z8" rel="noreferrer" target="_blank">
              2018 DOE High School Directory
            </a>
            <br></br>
            <a href="https://data.cityofnewyork.us/Education/2017-DOE-High-School-Directory/s3k6-pzi2" rel="noreferrer" target="_blank">
              2017 DOE High School Directory
            </a>
            <br></br>
            <a href="https://infohub.nyced.org/reports/government-reports/remote-learning-attendance-data" rel="noreferrer" target="_blank">
              2021 Remote Learning Data
            </a>
            <br></br>
            <a href="https://data.cityofnewyork.us/Health/COVID-19-Daily-Counts-of-Cases-Hospitalizations-an/rc75-m7u3" rel="noreferrer" target="_blank">
              COVID-19 Data
            </a>
          </div>
        <div className="group">
          
          <GraphSlide graphType={'Attendance Rates'} year= {2017}/>
          <GraphSlide graphType={'Graduation Rates'} year= {2017}/>
          <div className="group">
          <GraphSlide graphType={'Attendance Map'} year= {2017}/>
          <GraphSlide graphType={'Graduation Map'} year= {2017}/>
          </div>
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
            <CovidSlide graphType={'covidAtt'} borough= {'Queens'}
            orders= {true} power ={2} prev= {true}/>
          </div>
        </div>
      </div>

      <div className= 'part'>
        <div className= "title">Extrapolation</div>
          <div className="subtext">
            <div className="group">
              <div className='graphLayout'>
                <CovidSlide graphType={'extrapolate'} prev ={true}/>
              </div>
            </div>
          </div>
      </div>

    </div>
  );
}

export default App;
