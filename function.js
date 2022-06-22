// Simple funtion declaration
function myFunction(){
    console.log(12334)
}
myFunction()

// Passing parameter through function with return statement
function myFunctionOne(num){
    var numOne=10;
    var totalNum=numOne*num;
    return totalNum
}
var result=myFunctionOne(55564366640)
console.log(result)

// sum of three number
function numberAre(numOne,numTwo,numThree){
    var totaSum=numOne+numTwo+numThree;
    return totaSum
}
var resultOfSum=numberAre(100,200,300)
console.log(resultOfSum)

// compare three number 
function threeNumber(num1,num2,num3){
    if(num1>num2 & num1>num3){
        return num1
    }
    else if(num2>num1 & num2>num3){
        return num2
    }
    else{
        return num3
    }
   
}

var finalResult=threeNumber(709,20,300)
console.log("It's the final redult & the biggest number is",finalResult)