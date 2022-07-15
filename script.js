// comparing the BMI of Mark and John
let massMark = 78;
let massJohn = 92;
let heightMark =1.69;
let heightJohn= 1.95;
      
markBMI= massMark/ heightMark**2
console.log(markBMI)
johnBMI = massJohn/ heightJohn**2
console.log(johnBMI)

 markHigherBMI= markBMI > johnBMI;
 console.log(markHigherBMI)
 if (markHigherBMI) alert ('Marks BMI is higher than Johns BMI')
 else alert('Johns BMI is higher')

 //comparing again
  massMark = 95;
 massJohn = 85;
 heightMark =1.88;
  heightJohn= 1.76;
       
 markBMI= massMark/ heightMark**2
 console.log(markBMI)
 johnBMI = massJohn/ heightJohn**2
 console.log(johnBMI)
 
  markHigherBMI= markBMI > johnBMI;
  console.log(markHigherBMI)
  if (markHigherBMI) alert ('Marks BMI is higher than Johns BMI')
  else alert('Johns BMI is higher')
// using if else statements
//  const age = 15;
//  const isOldEnough = age >=18;
//  if (isOldEnough){
//      console.log('Sarah can have driving license 🚗')
     
//  }
//  else{
//      const yearsLeft = 18-age;
//      console.log(`Sarah cannot have a driving license. Wait another ${yearsLeft} years :)`)
//  }
 