module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimensions must be greater than zero. Logged values: ${x} length and ${y} width`))
    } else {
        setTimeout(() =>
            callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        )
    }
}