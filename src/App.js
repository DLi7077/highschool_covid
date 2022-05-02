import React from "react";
import './App.css'
import CovidSlide from "./CovidSlide";
import CovidType from "./CovidType";
import GraphType from "./GraphType";
import GraphSlide from "./GraphSlide";
import SchoolDataSlide from "./SchoolDataSlide";
import {Kevinpfp,Devinpfp} from './miscellaneous';
import { Avatar } from "@material-ui/core";

function App() {
  
  return (
    <div className= 'body'>
      <div className= 'part'>
        <div className= "title">An Attempt to Measure COVID-19's Effect on Highschool Education</div>
        -Devin
        <div className= "subtext"
        style ={{textAlign: 'center'}}>
          This project seeks to somewhat measure COVID-19's affect on highschool education.
        </div>
      </div>

      <div className= 'part'>
          <div className="title">Data Collection</div>
          <div className="subtextList">
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
            <br></br>
            <a href="https://data.cityofnewyork.us/City-Government/Borough-Boundaries/tqmj-j8zm" rel="noreferrer" target="_blank">
              NYC Borough Boundaries.geojson
            </a>
          </div>
      </div>
      <div className="part">
        <div className= "title">How to Measure Success?</div>
          <div className="subtext">
            We need a metric for success. Although grades are a good idea,
            the Department of Education does not have grades publicly available, and neither are GPAs.
            <br></br><br></br>
            Another way to measure are graduation rates, as graduating school is pretty much the main achievement.
            However, graduation rates are recorded yearly, and having only 5 points of data isn't very helpful.
            We do have attendance rates, which are recorded daily... except for a large chunk of 2020 when covid started.
            <br></br><br></br>
            Before we proceed with using attendance rates as a measurement for success, we must first confirm its relationship with Graduation Rates.
            <br></br><br></br>
            The following graphs/maps provide an insight of how attendance and graduation are related.
          </div>
        <div className="group">
          
          <div className="graphLayout">
            <GraphSlide graphType={'Attendance Rates'} year= {2017}/>
            <br></br>
            Average Attendance Rate Distribution for Each Borough Per Year
          </div>
          <div className="graphLayout">
            <GraphSlide graphType={'Graduation Rates'} year= {2017}/>
            <br></br>
            Graduation Rate Distribution for Each Borough Per Year
          </div>
        </div>

        <div className="subtextList">
          As the years progress, attendance rates stay relatively the same, while graduation rates increase.
          <br></br>
          Concerns:
          Are students getting smarter?
          Are schools getting easier?
        </div>
        <div className="group">
          <div className="graphLayout">
            <GraphSlide graphType={'Attendance Map'} year= {2017}/>
            <br></br>
            Average Attendance Rate per Year by Borough
          </div>

          <div className="graphLayout">
            <GraphSlide graphType={'Graduation Map'} year= {2017}/>
            <br></br>
            Graduation Rate per Year by Borough
          </div>
          <div className="subtext">
            Both attendance rates and graduation rates have the same borough ranking:
            <br></br>
            Staten Island, Queens, Manhattan, Brooklyn, Bronx
          </div>

        </div>
          <hr></hr>
        <div className="group">
          <div className="graphLayout">
            <GraphSlide graphType={'Correlation'} year= {2017}/>
            <br></br>
            Average attendance rate vs graduation rate scatterplot per year
            <br></br>(each dot represents a school belonging to a borough)
          </div>
          <div className="graphLayout">
            <GraphSlide graphType={'PieChart'} year= {2017}/>
            <br></br>
            Student Population Distribution per year. Not much change.
          </div>

        </div>
        <div className="subtext">
          Although average attendance Rates stay around 87% per year, graduation rates grew from 75% to 83% in 5 years.
          That's kinda sussy. Does that mean attendance becoming less important?
          <br></br>
          Not necessarily.
          There is a moderately strong linear correlation between attendance and graduation rates,
          with R ranging from .70 to .80
          <br></br>
          Schools with the highest graduation rates also tend to have high attendance rates,
          so it appears to be a property of successful education (assuming graduating means getting good education).
        </div>
      </div>

      <div className="part"
      style={{
        textAlign:'left'
      }}
      >
        <div className="title"
        style={{backgroundColor:'rgb(184, 143, 143)'}}
        >Some Statistics (see how your highschool did the past few years)</div>
        <div className="group">
          <br></br>
          <SchoolDataSlide/>
        </div>
      </div>
      <div className= 'part'>
        <div className= "title">Covid's Effect</div>
        <div className="subtext">
          With attendance somewhat confirmed as a decent metric,
          we can look for changes in it to observe how covid affected it.
          Below are the monthly average attendances per borough extracted from
          <a href="https://infohub.nyced.org/reports/government-reports/remote-learning-attendance-data" rel="noreferrer" target="_blank">
            2021 Remote Learning Data
          </a>
          , and the timeline of new covid cases.
          <br></br>
          Disclaimer: The some of the monthly attendance files had its data split into weird categories and the actual data may have been misinterpreted.
          <br></br>
        </div>
        <div className="group">
          <div className='graphLayout'>
            <div className= "title">Attendance Timeline</div>
            <GraphType graphType={'Attendance Timeline'}/>
          </div>

          <div className='graphLayout'> 
            <div className="title">Historical Covid Cases</div>
            <CovidType graphType={'covidCases'}/>
          </div>
        </div>

        <div className="subtext">
          Notice the fat gap from May-2020 to Feburary-2021
          <br></br>
          Obviously, no attendance was taken during the summer,
          but neither were they taken during the spring semester when covid started.
          Because of this, we won't be able to determine the immediate impact,
          but we can still look for lasting effects.
          <br></br>
        </div>
        <hr></hr>
        <div className="subtext">
        <br></br>
          With the presence of covid cases, there seems to be...
          not much of a correlation between the number cases and attendance rate. For all Boroughs
          In other words, any increase in covid cases does not seem to bother attendance rate too much.
          As such, a linear model is sufficient enough to fit the values.
          Also not sure why the polynomial models look so janky.
        </div>

        <div className="group">
          <hr></hr>
          <CovidSlide graphType={'covidAtt'} borough= {'Queens'}
          orders= {true} power ={2} prev= {true}/>
        </div>
        <div className="subtext">
          Click the "Show/ Hide Previous Data".
          If we consider all the attendance rates before covid occured, you might notice that
          the monthly attendance rates actually dropped, and the linear regression model is more prominent.
          <br></br>
          Every borough has been fitted to a negative slope. The correlation also increased by a bit,
          but doesn't exactly act a good predictor as we will see later.
          <br></br>
          However, it does imply that existance of new covid cases lowered overall attendance rate.
        </div>
      </div>

      <div className= 'part'>
        <div className= "title">Extrapolation</div>
          <div className="subtext">
            With the historical data we have, we can attempt to predict how well this model scales with today's attendance.

            Unfortunately, the DOE does not have all of this year's (2022) attendance data publicly available.
            <br></br>
            However, they do have daily attendance data everyday, but the previous day's data cannot be accessed.
            <br></br>
            As an attempt to measure the accuracy of this linear model,
            4 days worth of attendance data (April 25-28/2022) is taken as a sample from:
            <a href ='https://www.nycenet.edu/PublicApps/Attendance.aspx'
            rel="noreferrer" target="_blank"> Today's Attendance webpage</a>
            <br></br><br></br>
            Below, are the historical attendance data (like above), along with the average attendance in a black dot calculated from the sample.
            The faded vertical lines are the schools in the sample,
            where each faded dot is the average attendance rate of a high school during the sampled 4 days.
          </div>
          <div className="group">
              <CovidSlide graphType={'extrapolate'} prev ={true}/>
          </div>

          <div className="subtext">
            This graph implies that the linear model isn't very good of a predictor either,
            as it consistently over predicts the expected attendance rate (with or without considering previous data).
            <br></br>

          </div>
      </div>
      <div className='part'>
        <div className="title">Overall Findings</div>
        <div className="subtext">
          Attendance rates dropped by ~5% after the occurence of COVID-19 cases,
          but any excess amount of cases did not seem to decrease attendance rates any further.
          <br></br>
          Despite the presence of COVID-19, graduation rates are still steady increasing, which implies one of the following:
          <br></br>
          <ul>
            <li>Students are getting smarter</li>
            <li>Classes are becoming easier to pass</li>
            <li>Online courses are teaching better</li>
            <li>Access to online material are helping students pass</li>

          </ul>
        </div>
      </div>

      <div className='part'>
        <div className="title">Author's Notes</div>
        <div className="subtext">
          Below are the listed troubles I had while building this project
          <br></br>
          <ul>
            <li>Graduation Rates does not 100% correspond to good education</li>
            <li>A lot of attendance months were not recorded</li>
            <li>Some schools did not report their attendance and graduation rates, and had to be dropped</li>
            <li>It was when I was writing this that I realized I didn't have any basic statistics to share</li>
            <li>A lot of csv files had confusing layouts, and organizing the data was a hell of a task</li>
            <li>The python code could've been halved if I actually planned this out</li>
            <li>Python syntax gives me anxiety</li>
            <li>I've never used the React framework</li>
            <li>`border: 1px solid red` is the equivalent to printing before and after every function call</li>
            <li>Data Structures & Algorithms pale in comparison to CSS</li>
            <li>Many thanks to Kevin C. for helping me style the page.</li>
          </ul>
          <div className="group"
          style={{backgroundColor:'black'}}>
            <div className="half">
              <a href="https://github.com/DLi7077" rel="noreferrer" target="_blank">
                <Avatar src={Devinpfp}
                style= {{width:'200px', height: '200px'}}
                /> Devin L.
              </a>
            </div>
            <div className="half">
            <a href="https://github.com/Chen1571" rel="noreferrer" target="_blank">
              <Avatar src={Kevinpfp}
              style= {{width:'200px', height: '200px'}}
              />
              Kevin C.
            </a></div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
