function drawTotalStars(count) {
    let starPadding = 1;

    let closestSquare = Math.floor(Math.sqrt(count));
    let remainder = count - (closestSquare * closestSquare);

    let starGrid = "";
    let y;
    for(let x = 0; x < closestSquare; x++) {
        for(y = 0; y < closestSquare; y++) {
            starGrid += `<rect x="${x * 2}" y="${y * 2 + 20 + starPadding}" width="1" height="1" class="point"/>`;
        }
    }
    for(let x = 0; x < remainder; x++) {
        starGrid += `<rect x="${x * 2}" y="${y * 2 + 20 + starPadding}" width="1" height="1" class="point"/>`;
    }

    return `
        <svg width="${closestSquare * 2 + starPadding > 200 ? closestSquare * 2 + starPadding : 200}px" height="${40 + closestSquare*2}px" xmlns="http://www.w3.org/2000/svg" style="background-color:black">
            <style>
                .normal {
                    fill: white;
                    font: 14px monospace;
                }
                .point {
                    fill: yellow;
                }
            </style>
            <text x="1" y="14" class="normal">Total Stars: ${count}</text>

            ${starGrid}
        </svg>
    `;
}

module.exports = drawTotalStars;