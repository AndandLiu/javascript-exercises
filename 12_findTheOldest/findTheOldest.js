const findTheOldest = function(array) {
    return array.reduce((oldest, currentItem) => {
        let oldestDeath = oldest.yearOfDeath;
        let currentDeath = currentItem.yearOfDeath;

        if(oldest.yearOfDeath == undefined) {
            oldestDeath = new Date().getFullYear()
        }
        const oldestAge = oldestDeath - oldest.yearOfBirth;
        

        if(currentItem.yearOfDeath == undefined) {
            currentDeath = new Date().getFullYear()
        }
        const currentItemAge = currentDeath - currentItem.yearOfBirth;
        

        if(oldestAge < currentItemAge) {
            oldest = currentItem;
        }
        
        return oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
