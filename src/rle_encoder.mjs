export function encoderRLE(cells) {
    if(cells.size === 0)return "!";

    const coords =[];

    for(const cell of cells){
        const [x, y] = cell.split(",").map(Number);
        coords.push([x, y]);
    } 
    let max_y = 0;
    for(const [x,y] of coords){
        if( y>max_y) max_y = y;
    }

    let result = "";

    for( let y = 0; y <= max_y; y++){
        const allxInRow = [];
        for( const[cell_x, cell_y] of coords){
            if(cell_y === y) allxInRow.push(cell_x);
        }

        if(allxInRow.length === 0){
            if (y < max_y) result += "$";
            continue;
        }

        let max_x = 0;
        for(const x of allxInRow){
            if( x>max_x) max_x = x;
        }

        let count = 1;
        let row = "";
        let before = ""; 



        for(let x = 0; x <= max_x; x++){
            const alive = allxInRow.includes(x);
            const character = alive ? "o" :"b";

            if(before === ""){
                before = character;
                count = 1;
            }else if (character === before){
                count++;
            }else{
                row += (count > 1 ? count : "") + before;
                before = character;
                count = 1;
            }
        }


        if(before === "o"){
            row  += (count > 1 ? count : "")+"o";
        }
        result += row;
        if (y < max_y) result += "$";
    }
    return result + "!";
}
