function chessboard_oneloop(size){
  var board = "";
  var alt = false;
  for(var i = 1; i <= size*size; i++){
    if(i%8 === 0){
      if(!alt){
        board += "#\n";
      }else{
        board += "\n";
      }
      alt = !alt;
    }else if(i % 2 === 0){
      if(!alt){
        board += "#";
      }else{
        board += "  ";
      }
    }else{
      if(!alt){
        board += "  ";
      }else{
        board += "#";
      }
    }
  }
  console.log(board);
}

chessboard_oneloop(12);
