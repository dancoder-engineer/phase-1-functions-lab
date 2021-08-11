// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    let dist = 42 - street;
    if (dist < 0) { dist *= -1; }
    return dist;
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(origin, destination) {
    let dist =  (destination - origin) * 264;
    if (dist < 0) { dist *= -1; }
    return dist;
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet > 2500) {return `cannot travel that far`; }
    if (feet > 2000) {return 25; }
    feet -= 400;
    if (feet <= 0) { return 0; }
    return feet * 0.02;
}


console.log(distanceTravelledInFeet(34));