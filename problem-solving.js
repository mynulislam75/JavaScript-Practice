//EVEN OR ODD

function evenOrOdd(number){
    if (number%2==0){
        return ("The number is even")
    }
    else{
        return ("The number is odd")
    }
}
var finalResult=evenOrOdd(28)
console.log(finalResult)

// LEAP YEAR
function myYear(year){
    if( (year%4 == 0) && (year % 100 !=0) || (year%400==0) ){
        return ("Year is leap year")
    }
    else{
        return ("Year is not leap year")
    }
}
var finalResultLeapYear=myYear(1900)
console.log(finalResultLeapYear)