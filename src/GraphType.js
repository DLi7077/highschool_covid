import React from 'react'
import {
  gradImages,
  attenImages,
  gradMaps,
  attenMaps,
  attenVSgrad,
  pieChart
} from './GraphImages'

export default function GraphType({graphType,year}) {
  let graphMapping= {
    'Graduation Rates': gradImages,
    'Graduation Map': gradMaps,
    'Attendance Rates': attenImages,
    'Attendance Map': attenMaps,
    'Correlation': attenVSgrad,
    'PieChart': pieChart
  }
  const images= graphMapping[graphType];

  return (
    <img className= 'graph' src= {images[year-2017]} alt={`graph ${year}`}></img>
  )

}
