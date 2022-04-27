var a = 87;
let object = {
    movie: "RRR",
    ReleaseDate: "April 1st 2022",
    Budget: "450cr",
    array: [4, 4.5, 454, 65.596],
    print: () => {
        console.log(`${object.Budget} and the value of a ${this.a3} `)
    }
}

function print() {
    console.log(`${this.movie}`)
}

object.print()