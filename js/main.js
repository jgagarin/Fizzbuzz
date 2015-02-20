for(var num = 1; num <= 100; num++){
    
    if(num%3 == 0 && num%5 == 0){   
    console.log("Fizz Buzz");
    $('.fizzbuzz').append('<li>Fizz Buzz</li>');    
    } else if (num%5 == 0){
    console.log("Buzz");
    $('.fizzbuzz').append('<li>Buzz</li>');    
    }else if (num%3 == 0) {
    console.log("Fizz");
    $('.fizzbuzz').append('<li>Fizz</li>');    
    } else {
    console.log(num)
    var fizzval = "<li>"+num+"</li>";
    $('.fizzbuzz').append(fizzval);    
    };

};



