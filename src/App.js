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
              Possible forms of Measurement:
              <ul>
                <li>Grades/ GPA</li>
                <li>Attendance Rate</li>
                <li>Graduation Rate</li>
              </ul>
              </div>
              <div className="textGroup">
              Brief Problems:
              <ul>
                <li>Grades/GPA not recorded</li>
                <li>Attendance Rates for 2020 not recorded</li>
                <li>Graduation Rates recorded annually</li>
                </ul>
              </div>
          </div>

          <div className="title">Data Collection</div>
          <div className="subtext">
            annual highschool attendance and graduation rates:
            <br></br>
            2021: https://data.cityofnewyork.us/Education/2021-DOE-High-School-Directory/8b6c-7uty
            <br></br>
            2020: https://data.cityofnewyork.us/Education/2020-DOE-High-School-Directory/23z9-6uk9
            <br></br>
            2019: https://data.cityofnewyork.us/Education/2019-DOE-High-School-Directory/uq7m-95z8
            <br></br>
            2018: https://data.cityofnewyork.us/Education/2018-DOE-High-School-Directory/vw9i-7mzq
            <br></br>
            2017: https://data.cityofnewyork.us/Education/2017-DOE-High-School-Directory/s3k6-pzi2
            <br></br>
            2021 remote learning data: https://infohub.nyced.org/reports/government-reports/remote-learning-attendance-data
            <br></br>
            Covid Data: https://data.cityofnewyork.us/Health/COVID-19-Daily-Counts-of-Cases-Hospitalizations-an/rc75-m7u3
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
