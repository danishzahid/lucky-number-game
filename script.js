const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");

function sumOfDate(date){
    date = date.replaceAll("-", "");
    let sum = 0;
    for(let i = 0; i< date.length; i++){
        sum = sum + Number(date.charAt(i));
    }
    return sum;
}

checkNumberButton.addEventListener('click', function checkBdayLucky(){
   const date = dateOfBirth.value;
   const num = luckyNumber.value;
   const sumDOB = sumOfDate(date);
   if(sumDOB % num == 0){
    console.log("Bday Lucky");
   } else{
    console.log("Bday not lucky");
   }
})

