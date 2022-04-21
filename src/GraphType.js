import React from 'react'
import {gradImages,attenImages,attenVSgrad} from './GraphImages'

export default function GraphType({graphType,year}) {
  let graphMapping= {
    'Graduation Rates': gradImages,
    'Attendance Rates': attenImages,
    'Correlation': attenVSgrad
  }
  const images= graphMapping[graphType];
  
  return (
    <img className= 'graph' src= {images[year-2017]} ></img>
  )
  

}
