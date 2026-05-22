commonFunc()
function commonFunc() {
    const isActive = false

    if (isActive) {
        console.log("You can access items")
    } else {
        console.log("You don't have access to the items")
    }

    let year = 0

    if (year % 4 == 0) {
        console.log(`${year} is leap year`)
    } else if (year == 0) {
        console.log(`${year} isn't valid year`)
    } else {
        console.log(`${year} isn't leap year`)
    }

    let dayno = 31

    switch(dayno) {
        case 1:
            console.log("Monday")
            break;
        case 2:
            console.log("Tuesday")
            break;
        case 3:
            console.log("Wednesday")
            break;
        case 4:
            console.log("Monday")
            break;

        default:
            console.log("Invalid number")
        
    }

    // indexes          0         1          2
    const cities = [ "Lahore", "Karachi", "Multan" ]

    console.log(cities[1])


    console.log(cities.length)
    cities.unshift("Sargodha")
    cities.push("Faisalabad")
    console.log(cities)

}