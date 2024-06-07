function countNegatives(grid) {
    let m = grid.length;
    let n = grid[0].length;

    let row = m - 1;
    let col = 0;
    let count = 0;

    while (row >= 0 && col < n) {
        if (grid[row][col] <0) {
            // Count all negatives in this row from the current column through end

            count += (n - col);
            row--;
        } else {
            col++;
        }
    }

    return count;
};