// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers, name) {
    let arr = drivers.filter(n => n.toUpperCase() === name.toUpperCase() )
    if (arr !== undefined) {
        return arr
    }
}

// return all drivers whose names begin with provided letters
function fuzzyMatch(drivers, name) {

    let arr = drivers.filter(n => {
        // debugger;
        return n.charAt(0).toUpperCase() === name.charAt(0).toUpperCase() 
    })
    if (arr !== undefined) {
        return arr
    }
}

function matchName(drivers, name) {
    return drivers.filter( n => n.name === name)
}