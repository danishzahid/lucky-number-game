const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-bx");

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
    outputBox.value = "Bday Lucky";
   } else{
    outputBox.value = "Bday not lucky";
   }
})

