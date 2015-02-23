var maxNumber = prompt("Suggest a Max Number");

function fizzBuzz(n){
    
    for(var num = 1; num <= n; num++){
    
    if(num%3 == 0 && num%5 == 0){   
    $('.fizzbuzz').append('<li>Fizz Buzz</li>');    
    } else if (num%5 == 0){
    $('.fizzbuzz').append('<li>Buzz</li>');    
    }else if (num%3 == 0) {
    $('.fizzbuzz').append('<li>Fizz</li>');    
    } else {
    var fizzval = "<li>"+num+"</li>";
    $('.fizzbuzz').append(fizzval);    
    };

 }
}

fizzBuzz(maxNumber);




