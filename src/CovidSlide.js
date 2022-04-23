import React, {useState,useEffect}from 'react'
import CovidType from './CovidType';
import { boroughs } from './GraphImages';

export default function CovidSlide({graphType, borough}) {
  const [boro, updateBoro] = useState(borough)
  const [graph, updateGraph] = useState(
    <CovidType graphType={graphType} borough= {boro}/>
  );

  function updateCovidGraph(){
    let file= graphType
    if(showPrev){
      file = file+'wPrev';
    }
    updateGraph(
      graph=> graph= <CovidType graphType={file} borough= {boro}/>
    )
  }

  function updateBorough(newBoro){
    updateBoro(
      boro=> boro= newBoro
    )
  }
  useEffect(()=>{
    updateCovidGraph();
  }, [boro])

  const [showPrev, setToggle] = useState(false);
  const titleMapping ={
    'covidAtt':'Covid vs Attendance Rates (by Month)',
    'covidCases': 'Historical Covid Cases',
    'covidAttwPrev': 'Covid vs Attendance Rates (with previous rates)'
  }

  function togglePrev(){
    setToggle(showPrev=> !showPrev);
  }

  useEffect(()=>{
    updateCovidGraph();
  }, [showPrev])

  const boroButtons =(
    boroughs.map((borough)=>(
      <button className='media' onClick={
        ()=>{
          updateBorough(borough);
        }
      } key= {borough}>{borough}</button>
    ))
  )

  let toggleButton =(<></>)

  if(graphType!=='covidCases'){
    toggleButton=(
      <div className='mediaBar'>
        <button className='media'
        onClick={()=>{
          togglePrev();
        }}> Show / Hide Previous</button>
      </div>
    )
  }


  return (
    <div className='graphLayout'>
      <div className='title'>{titleMapping[graphType]}</div>
      {graph}
      <div className='mediaBar'>
        {boroButtons}
      </div>
      {toggleButton}
    </div>
  )
}
