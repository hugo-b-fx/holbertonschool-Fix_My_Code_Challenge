#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program. If not provided, default to 10.
*/

let size = 10;  // Default size

if (process.argv.length > 2) {
    const parsed = parseInt(process.argv[2], 10);
    if (isNaN(parsed) || parsed < 1) {
        process.stderr.write("Invalid size. Please enter a positive integer.\n");
        process.exit(1);
    }
    size = parsed;
}

for (let i = 0; i < size; i++) {
    console.log("#".repeat(size));
}