function pyr(levels) {
  var str = "#######";
  for(var i = levels; i >= 0; i--){
    console.log(str.substr(i));
  }
}

// Option 1
//pyr(7);

function pyrRecursive(levels, str) {
  var str_char = "#";
  if(levels === 1) {
    console.log(str);
  }else{
    console.log(str);
    str += str_char;
    pyrRecursive(levels-1,str);
  }
}

// pyrRecursive(7,"#");
