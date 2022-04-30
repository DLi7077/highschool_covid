const { default: matchers } = require('@testing-library/jest-dom/matchers');

let schoolData= {
};

for (let year= 2017;year<=2021;year+=1){
  const data = require('./jsonData/2017.json')['data'];
  schoolData[year]= data;
  schoolData[year]['schoolNames']= data.map(schools=>{
    return schools['school_name'];
  })
}

function querySchool(schoolQuery, dataSet){
  for (let i=0;i<dataSet.length;i++){
    const schoolData= dataSet[i];
    if(schoolData['school_name']==schoolQuery){
      return schoolData;// found school data
    }
  }
  throw new Error(`School ${schoolQuery} not Found`);
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
  sortedMatches= Object.entries(matches).sort((a,b)=>{
    return b[1]-a[1];
  });
  
  // strip off match count
  sortedMatches = sortedMatches.map(match=>{
    return match[0];
  })

  return sortedMatches.slice(0,5);
}

sName= suggestName('Bronx',schoolData[2017])[s0]; // 'Staten Island Technical High School'
console.log(sName)
console.log(querySchool(sName,schoolData[2017]))