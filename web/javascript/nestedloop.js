showResult();

function showResult() {

    // 2 x 2 = 4
    for (var a = 1; a <= 5; a++) { // outer loop
        for (var b = 1; b <= 10; b++) { // inner loop
            console.log(`${a} x ${b} = ${a*b}`)
        }
    }

}