export function encoderRLE(cells) {
    if(cells.size === 0)return "!";

    const coord =[];

    for(const cell of cells){
        const [x, y] = cell.split(",").map(Number);
        coord.push([x, y]);
    } 
    let max_y = 0;
    for(const [x,y] of coord){
        if( y>max_y) max_y = y;
    }

    let result = "";

    for( let y = 0; y <= max_y; y++){
        const allxInRow = [];
        for( const[cell_x, cell_y] of coord){
            if(cell_y === y) allxInRow.push(cell_x);
        }

        const count = allxInRow.length;

        if(count > 1){
            result += count + "o";
        }else{
            result += "o";
        }
        if (y < max_y) result += "$";
    }
    return result + "!";
}
