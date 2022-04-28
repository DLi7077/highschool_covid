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
  gradMaps,
  attenMaps,
  attenVSgrad,
  pieChart,
  covidCases,
  covidAtt,
  covidAttwPrev,
  boroughs,
};