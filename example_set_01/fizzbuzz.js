function fizz() {
  for(var i = 1; i <= 100; i++){
    if(i%3 === 0){
      console.log("fizz: ("+i+" / 3 = "+i/3+")");
    }else if(i%5 === 0){
      console.log("buzz: ("+i+" / 5 = "+i/5+")");
    }else{
      console.log(i);
    }
  }
}

function fizzBuzz() {
  for(var i = 1; i <= 100; i++){
    if(i%3 === 0 && i%5 === 0){
      console.log("fizzbuzz: ("+i+" / 3 = "+i/3+" and "+i+" / 5 = "+i/5+")");
    }else if(i%3 === 0){
      console.log("fizz: ("+i+" / 3 = "+i/3+")");
    }else if(i%5 === 0){
      console.log("buzz: ("+i+" / 5 = "+i/5+")");
    }else{
      console.log(i);
    }
  }
}

//fizz();
fizzBuzz();
