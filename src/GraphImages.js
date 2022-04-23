let gradImages= []
let attenImages= []
let attenVSgrad= []
let pieChart= []

for (let i=2017;i<=2021;i++){
  gradImages.push(require(`./graphs/Graduation_Rates${i}.png`));
  attenImages.push(require(`./graphs/Attendance_Rates${i}.png`));
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

let covidCases= require(`./graphs/CovidCasesDaily.png`)
let covidAtt= {}
let covidAttwPrev ={}

boroughs.forEach(b=>{
  covidAtt[b]=(require(`./graphs/covidAttendance${b}.png`))
  covidAttwPrev[b]=(require(`./graphs/covidAttendance${b}withPrev.png`))
})
console.table(covidAtt)

export {
  gradImages,
  attenImages,
  attenVSgrad,
  pieChart,
  covidCases,
  covidAtt,
  covidAttwPrev,
  boroughs
};