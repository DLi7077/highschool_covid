import React from 'react'
import {
  covidCases,
  covidAtt,
  covidAttwPrev,
  extrapolate,
  extrapolatewPrev
} from './GraphImages'
export default function CovidType({graphType,borough='All',power=1}) {
  let graphMapping= {
    'covidAtt': covidAtt,
    'covidAttwPrev':covidAttwPrev,
    'extrapolate': extrapolate,
    'extrapolatewPrev': extrapolatewPrev
  }
  
  if(graphType==='covidCases'){
    return (
      <img className= 'graph' src={covidCases} width={'100%'}alt= {graphType}/>
    );
  }
  // power -1 for array indexing
  const promisedGraph= graphMapping[graphType][borough][power-1];
  return (
    <img className= 'graph' src={promisedGraph} alt ={graphType}/>
  )
}
