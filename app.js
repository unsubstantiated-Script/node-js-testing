const rect = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
}


function solveRect(l, w) {
    console.log(`Solving for rectangle with dimension: ${l}, ${w}`)

    rect(l, w, (err, rectangle) => {

        if (err) {
            console.log('Error:', err.message)

        } else {
            console.log(`Area of rectangle with dimensions ${l} and ${w} is: ${rectangle.area()}. Perimeter of rectangle: ${rectangle.perimeter()}`)
            console.log(`Perimeter with dimensions ${l} and ${w} is: ${rectangle.perimeter()}`)
        }

    })
    console.log('This statement is logged after the call to rect()')
}

solveRect(2, 3)
solveRect(-2, 0)
solveRect(4, 6)
solveRect(6, 22)