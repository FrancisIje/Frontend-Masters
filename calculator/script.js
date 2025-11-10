let firstNumber = 0;
let secondNumber =0;
let operator=null;
const button = document.querySelectorAll("button");
const logicDisplay = document.querySelector(".logic-color");
const answerDisplay = document.querySelector(".answer");

// button.addEventListener("click", function (){
//     console.log(selectedNum);
// } );

console.log();

for(let i = 0;i<button.length; i++){
    const indButton = button[i];

   

  
    indButton.addEventListener("click", function (event) {
        console.log("button clicked");


        
        

      if ( indButton.classList.contains("num-button") && operator===null) {
        let input = firstNumber.toString() + indButton.innerText;
        firstNumber=parseInt(input);
         logicDisplay.innerHTML=`${firstNumber}`;
        console.log("first number = "+ firstNumber );
        console.log("firstnum type " + typeof firstNumber);
        // alert("first number = "+ firstNumber );

    }

     if ( indButton.classList.contains("num-button") && operator!==null) {
        let input = secondNumber.toString() + indButton.innerText;
        secondNumber=parseInt(input);
        logicDisplay.innerHTML= logicDisplay.innerHTML + secondNumber.toString();
        console.log("second number = "+ secondNumber );
        console.log("secondnum type " + typeof secondNumber);
        // alert("second number = "+ secondNumber );

    }

    if ( indButton.classList.contains("operator")) {
        operator= indButton.innerText;
        logicDisplay.innerHTML= logicDisplay.innerHTML + operator;
        console.log("operator = "+ operator );
        // alert("operator = "+ operator );
    }

    if (indButton.classList.contains("equals")) {


        let answer;

        if (operator=="+") {
            answer = firstNumber + secondNumber;
        } 
        if (operator=="-") {
            answer= firstNumber - secondNumber;
        }
        if (operator=="x") {
            answer= firstNumber * secondNumber;
        }
        if (operator=="÷") {
            answer= firstNumber / secondNumber;
        }

        console.log(answer);

        answerDisplay.innerHTML= answer;
        
        
    }
    });
}