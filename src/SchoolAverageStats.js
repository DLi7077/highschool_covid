import React from 'react'
import {
  schoolData,
  querySchool,
  annualAttendance,
  annualGraduation,
  boroughColorMap
} from './SchoolData.js'
import {round} from 'lodash'

export default function SchoolAverageStats({schoolYear,schoolName}) {
  const borough = querySchool(schoolName.value,schoolData[schoolYear])['Borough'];

  const annualAvgAtt= annualAttendance[schoolYear]['All']*100;
  const annualAvgGrad =annualGraduation[schoolYear]['All']*100;
  const annualBoroAtt= annualAttendance[schoolYear][borough]*100;
  const annualBoroGrad =annualGraduation[schoolYear][borough]*100;
  return (
    <div className='half'>
      <div className='schoolDetails'>
        <div className='mini-title'
        >{`${schoolYear} Average:`}</div>
        <br></br>
        {`Attendance rate: ${round(annualAvgAtt,4).toFixed(2)}%`}
        <br></br>
        {`Graduation rate: ${round(annualAvgGrad,4).toFixed(2)}%`}
        <br></br>
      </div>
      <div className='schoolDetails'>
        <div className='mini-title' 
          style={{backgroundColor:boroughColorMap[borough]}}>{`${borough} ${schoolYear} Average:`}</div>
        <br></br>
        {`Attendance rate: ${round(annualBoroAtt,4).toFixed(2)}%`}
        <br></br>
        {`Graduation rate: ${round(annualBoroGrad,4).toFixed(2)}%`}
        <br></br>
      </div>
    </div>
  )
}
