import _ from 'lodash'

let schoolData= {
};

const boroughColorMap ={
  'Brooklyn': 'orange',
  'Queens':'red',
  'Staten Island': 'magenta',
  'Manhattan': 'lightgreen',
  'Bronx' : 'skyblue'
}

let schoolYears= [2017,2018,2019,2020,2021];
let annualAttendance ={
  2017:{},
  2018:{},
  2019:{},
  2020:{},
  2021:{}
}
let annualGraduation ={
  2017:{},
  2018:{},
  2019:{},
  2020:{},
  2021:{}
}
let borough=['Brooklyn','Queens','Staten Island','Manhattan','Bronx']

for (let year= 2017;year<=2021;year+=1){
  const data = require(`./jsonData/${year}.json`)['data'];
  schoolData[year]= data;

  let boroughAtt = {
    'Brooklyn':[],
    'Queens':[],
    'Staten Island':[],
    'Manhattan':[],
    'Bronx':[]
  }
  let boroughGrad={
    'Brooklyn':[],
    'Queens':[],
    'Staten Island':[],
    'Manhattan':[],
    'Bronx':[]
  }
  
  data.forEach(entry=>{
    const entryBorough = entry['Borough'];
    boroughAtt[entryBorough].push(entry['attendance_rate']);
    boroughGrad[entryBorough].push(entry['graduation_rate'])
  })
  
  let attendanceSum=0;
  let graduationSum=0;
  borough.forEach(b=>{
    annualAttendance[year][b]=_.reduce(boroughAtt[b],(sum,next)=> sum+ next,0)/boroughAtt[b].length
    attendanceSum+= annualAttendance[year][b];

    annualGraduation[year][b]=_.reduce(boroughGrad[b],(sum,next)=> sum+ next,0)/boroughGrad[b].length
    graduationSum+= annualGraduation[year][b];
  })
  annualAttendance[year]['All']= attendanceSum/5;
  annualGraduation[year]['All']= graduationSum/5;
}


function querySchool(schoolQuery, dataSet){
  for (let i=0;i<dataSet.length;i++){
    const data= dataSet[i];
    if(data['school_name']===schoolQuery){
      return data;// found school data
    }
  }
  return "no school"
}

function suggestName(schoolName, dataSet){
  let matches={}
  dataSet['schoolNames'].forEach(name => {
    let idx =0;
    while(idx<schoolName.length && idx<name.length && schoolName[idx]===name[idx]){
      idx+=1;
    }
    if(idx> 2) matches[name]=idx;
  });
  // sort by matches
  let sortedMatches= Object.entries(matches).sort((a,b)=>{
    return b[1]-a[1];
  });
  // strip off match count
  const topMatches = sortedMatches.map(match=>{
    return match[0];
  })

  return topMatches.slice(0,5);
}

export {
  annualAttendance,
  annualGraduation,
  boroughColorMap,
  schoolData,
  schoolYears,
  querySchool,
  suggestName
}