export function gameOfLife(cells) {
    const next = new Set();
    const candidates = new Set();
    for(const cell of cells){
        const [x, y] = cell.split(",").map(Number);
        for(let offset_x = -1; offset_x <=1; offset_x++){
            for(let offset_y = -1; offset_y <= 1; offset_y++){
                candidates.add((x+offset_x)+","+(y+offset_y));
            }
        }
    }
    for (const candidate of candidates){
        const [candidatex, candidatey]= candidate.split(",").map(Number);
        let count =0;
        for (let offset_x = -1; offset_x<=1; offset_x++){
            for(let offset_y = -1; offset_y <=1; offset_y++){
                if (offset_x === 0 && offset_y === 0)continue;
                if(cells.has((candidatex+offset_x)+","+(candidatey+offset_y))) count++;
            }
        }
        const alive = cells.has(candidate);
        if(alive &&(count === 2|| count === 3)) next.add(candidate);
        if(!alive && count ===3)next.add(candidate)
    }
  return next;
}
