let gradImages= []
let attenImages= []
let gradMaps=[]
let attenMaps =[]
let attenVSgrad= []
let pieChart= []

for (let i=2017;i<=2021;i++){
  gradImages.push(require(`./graphs/graduation_rate${i}.png`));
  attenImages.push(require(`./graphs/attendance_rate${i}.png`));

  gradMaps.push(require(`./graphs/graduationMap${i}.png`))
  attenMaps.push(require(`./graphs/attendanceMap${i}.png`))

  attenVSgrad.push(require(`./graphs/AttenvGrad${i}.png`));
  pieChart.push(require(`./graphs/studentDistribution${i}.png`));
}

let boroughs= [
  'All',
  'Bronx',
  'Brooklyn',
  'Staten Island',
  'Manhattan',
  'Queens'
]
let attendanceTimeline = require('./graphs/AttendanceTimeline.png')
let covidCases= require(`./graphs/CovidCasesDaily.png`)
let covidAtt= {
  'All':[],
  'Bronx':[],
  'Brooklyn':[],
  'Staten Island':[],
  'Manhattan':[],
  'Queens':[]
}
let covidAttwPrev ={
  'All':[],
  'Bronx':[],
  'Brooklyn':[],
  'Staten Island':[],
  'Manhattan':[],
  'Queens':[]
}

boroughs.forEach(b=>{
  for (let order=1;order<=8;order++){
    covidAtt[b].push(require(`./graphs/poly/covidAttendance${b}order${order}.png`))
    covidAttwPrev[b].push(require(`./graphs/poly/covidAttendance${b}withPrevorder${order}.png`))
  }
})

let extrapolate = {
  'All':[],
  'Bronx':[],
  'Brooklyn':[],
  'Staten Island':[],
  'Manhattan':[],
  'Queens':[]
}
let extrapolatewPrev = {
  'All':[],
  'Bronx':[],
  'Brooklyn':[],
  'Staten Island':[],
  'Manhattan':[],
  'Queens':[]
}

boroughs.forEach(b=>{
  extrapolate[b].push(require(`./graphs/poly/extrapolate/${b}order1.png`))
  extrapolatewPrev[b].push(require(`./graphs/poly/extrapolate/${b}wPrevorder1.png`))
})

export {
  gradImages,
  attenImages,
  gradMaps,
  attenMaps,
  attenVSgrad,
  pieChart,
  attendanceTimeline,
  covidCases,
  covidAtt,
  covidAttwPrev,
  boroughs,
  extrapolate,
  extrapolatewPrev
};