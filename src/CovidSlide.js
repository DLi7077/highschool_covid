import React, {useState,useEffect}from 'react'
import CovidType from './CovidType';
import { boroughs } from './GraphImages';

export default function CovidSlide({graphType, borough, power=1 ,orders= false, prev= false}) {
  const [boro, updateBoro] = useState(borough)
  const [order,updateOrder] = useState(power)
  const [graph,updateGraph] = useState(
    <CovidType graphType={graphType} borough= {boro} power = {power}/>
  );

  function updateCovidGraph(){
    let file= graphType
    if(showPrev){
      file = file+'wPrev';
    }
    updateGraph(
      graph=> graph= <CovidType graphType={file}borough= {boro} power = {order}/>
    )
  }

  function updateBorough(newBoro){
    updateBoro(
      boro=> boro= newBoro
    );
  }

  function updateGraphOrder(input){
    let nextOrder =input;
    if(input<1 || input>7){
      if(input===0) nextOrder= 7;
      else nextOrder=1;
    }
    updateOrder(
      prevOrder => prevOrder = nextOrder
    );
  }

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
    // eslint-disable-next-line
  }, [showPrev,boro,order])

  let orderButtons = <></>
  if(orders){
    orderButtons=(
      <div className='mediaBar'>
        <button className='media'
          fontSize={'12px'} key= {'decrement'} onClick={
            ()=>{updateGraphOrder(order-1)}
          }>
          order--;
        </button>

        <button className='media'
          fontSize={'12px'} key= {'increment'} onClick={
            ()=>{updateGraphOrder(order+1)}
          }>
          order++;
        </button>
      </div>
    )
  }

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
  
  if(graphType!=='covidCases' && prev){
    toggleButton=(
      <div className='mediaBar'>
        <button className='media' onClick={
          ()=>{
            togglePrev();
          }
        }>Show / Hide Previous</button>

      </div>
    )
  }
  return (
    <div className='graphLayout'>
      {orderButtons}
      <div className='title'>{titleMapping[graphType]}</div>
      {graph}
      <div className='mediaBar'>
        {boroButtons}
      </div>
      {toggleButton}
    </div>
  )
}
