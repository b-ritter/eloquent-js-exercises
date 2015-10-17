function chessboard(size){
  var board = "";
  for(var i = 1; i <= size; i++){
    for(var j = 1; j <= size; j++){
      if(i%2 === 0){
        // Even rows
        if(j%size === 0){
          // End of row
          board += "\n";
        }else if(j%2 === 0){
          // Dark square
          board += "  ";
        }else{
          // Light square
          board += "#";
        }
      }else{
        // Odd rows
        if(j%size === 0){
          // End of row
          board += "#\n";
        }else if(j%2 === 0){
          // Dark square
          board += "#";
        }else{
          // Light square
          board += "  ";
        }
      }
    }
  }
  console.log(board);
}

chessboard(12);
