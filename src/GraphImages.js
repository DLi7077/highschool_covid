let gradImages= []
let attenImages= []
let attenVSgrad= []
for (let i=2017;i<=2021;i++){
  gradImages.push(require(`./graphs/Graduation_Rates${i}.png`));
  attenImages.push(require(`./graphs/Attendance_Rates${i}.png`));
  attenVSgrad.push(require(`./graphs/AttenvGrad${i}.png`))

}


export{
  gradImages,
  attenImages,
  attenVSgrad
};