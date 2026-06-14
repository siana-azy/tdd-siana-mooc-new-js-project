export function parserRLE(rle) {
  const cells = new Set();
  let x = 0;
  let y = 0;
  let count = ""

  for(const char of rle){
    if (char === "!") break;

    if(char >= "0" && char <= "9"  ){
        count += char;
    }else if (char === "o"){
        const repeat = count === "" ? 1 : parseInt(count);
        for (let i=0; i<repeat; i++){
            cells.add(x+','+y);
            x++;

        }
        count = ""
    } else if(char === "$"){
        const repeat = count === "" ? 1 : parseInt(count);
        y += repeat;
        x=0;
        count = "";
    }
  }
  return cells;
}
