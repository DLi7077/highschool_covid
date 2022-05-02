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

  return (
    <div className='detailWrapper'>
        <div className='mini-title'
        style={{backgroundColor:boroughColorMap[borough]}}
        >
          {`${schoolName} ${schoolYear}`}
        </div>
        
      <div className='schoolDetails'>
        <br></br>
        {`Borough: ${borough}`}
        <br></br>
        {`Attendance rate: ${round(attendance,4).toFixed(2)}%`}
        <br></br>
        {`Graduation rate: ${round(graduation,4).toFixed(2)}%`}
        <br></br>
        {`Student Count: ${students}`}
      </div>
    </div>
  )
}
