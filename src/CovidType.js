import React from 'react'
import {
  covidCases,
  covidAtt,
  covidAttwPrev
} from './GraphImages'
export default function CovidType({graphType,borough='All'}) {
  let graphMapping= {
    'covidAtt': covidAtt,
    'covidAttwPrev':covidAttwPrev
  }
  if(graphType==='covidCases'){
    return (
      <img className= 'graph' src={covidCases}alt= {graphType}/>
    );
  }
  const promisedGraph= graphMapping[graphType][borough]
  return (
    <img className= 'graph' src={promisedGraph} alt ={graphType}/>
  )
}
