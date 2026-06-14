export function encoderRLE(cells) {
    if(cells.size === 0)return "!";

    const manyx = [];
    for(const cell of cells){
        const [x, y] = cell.split(",").map(Number);
        manyx.push(x);
    } 
    manyx.sort((a,b)=> a - b);

    const count = manyx.length;

    if(count > 1){
        return count + "o!";
    }

    return "o!";

  
}
