import React, { useEffect, useState } from 'react'
import SchoolDataDisplay from './SchoolDataDisplay.js';
import Select from 'react-select';
import {map,get} from 'lodash';
import {schoolData, schoolYears} from './SchoolData.js'

export default function SchoolDataSlide() {
  const [inputYear, setInputYear] = useState(2017);
  const [inputSchool, setInputSchool] = useState("");
  const [dataDisplay, setDataDisplay]= useState(
    <SchoolDataDisplay school= {inputSchool} schoolYear ={inputYear}/>
  );

  useEffect(()=>{
    setDataDisplay(
      prev=> prev= <SchoolDataDisplay school= {inputSchool} schoolYear ={inputYear}/>
    )
  },[inputSchool,inputYear])

  const yearButtons = map(schoolYears,year=>{
    return <button className='media'
        key={`schoolyear${year}`}
        onClick= {()=>{
          setInputYear(y=> y=year)
        }}
      >
        {year}
      </button>
  })
  return (
    <>
      <div className='schoolSearch'>
        {dataDisplay}

        <div className="mediaBar" key= {'yearButtons'}>
          {yearButtons}
        </div>
        <div style={{width:"100%" , border: '1px border red'}}>
          <Select 
            key= {'school'}
            blurOnInputSelect={false}
            closeMenuOnSelect={true}
            options={map(schoolData[inputYear], school=>({
              value: get(school,"school_name"),
              label: get(school,"school_name")
            }))}
            onChange={
              school=> setInputSchool(school)
            }
          />
        </div>
      </div>

    </>
  )
}
