import React from 'react'
import {
  schoolData,
  querySchool,
  annualAttendance,
  annualGraduation,
  boroughColorMap
} from './SchoolData.js'
import {round} from 'lodash'

export default function SchoolDataDisplay({school, schoolYear}) {
  if(school==='') return (<></>);
  const schoolName= school.value;
  const schoolInfo= querySchool(schoolName,schoolData[schoolYear]);
  const attendance= schoolInfo['attendance_rate']*100;
  const graduation= schoolInfo['graduation_rate']*100;
  const borough = schoolInfo['Borough'];
  const students= schoolInfo['total_students'];

  const annualAvgAtt= annualAttendance[schoolYear]['All'];
  const annualAvgGrad =annualGraduation[schoolYear]['All'];
  const annualBoroAtt= annualAttendance[schoolYear][borough]
  const annualBoroGrad =annualGraduation[schoolYear][borough]

  console.table(schoolInfo)

  return (
    <div className='group'>
      <div className='schoolDetails'>
        <div className='mini-title'
        style={{color:boroughColorMap[schoolInfo['Borough']]}}
        >
          {`${schoolName} ${schoolYear}`}
        </div>
        <br></br>
        {`Borough: ${borough}`}
        <br></br>
        {`Attendance rate: ${round(attendance,4).toFixed(2)}%`}
        <br></br>
        {`Graduation rate: ${round(graduation,4).toFixed(2)}%`}
        <br></br>
        {`Student Count: ${students}`}
      </div>
      <div className='statDetails'>
        <div className='mini-title'>{`Annual Average:`}</div>
        <br></br>
        <br></br>
        {`Attendance rate: ${round(annualAvgAtt,4).toFixed(2)}%`}
        <br></br>
        {`Graduation rate: ${round(annualAvgGrad,4).toFixed(2)}%`}
        <br></br>
      </div>
      <div className='statDetails'>
        <div className='mini-title'>{`Borough Average:`}</div>
        <br></br>
        <br></br>
        {`Attendance rate: ${round(annualBoroAtt,4).toFixed(2)}%`}
        <br></br>
        {`Graduation rate: ${round(annualBoroGrad,4).toFixed(2)}%`}
        <br></br>
      </div>
    </div>
  )
}
