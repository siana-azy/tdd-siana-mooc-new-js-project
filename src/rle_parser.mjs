export function parserRLE(rle) {
  const cells = new Set();
  let x = 0;
  let y = 0;
  for(const char of rle){
    if (char === "!") break;
    if(char === "o" ){
        cells.add(x+','+y);
        x++;
    }
  }
  return cells;
}
