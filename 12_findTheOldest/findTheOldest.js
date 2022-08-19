const findTheOldest = function(people) {
    let oldest = "";
    let age = 0;
    let d = new Date();
    for(let i = 0; i < people.length;i++){
        if(people[i].yearOfDeath){
                    if((people[i].yearOfDeath - people[i].yearOfBirth)>age){
            age = people[i].yearOfDeath - people[i].yearOfBirth;
            oldest = people[i];
        }
        } else {
            if(d.getFullYear() - people[i].yearOfBirth> age){
            age = d.getFullYear() - people[i].yearOfBirth;
            oldest = people[i];
            }

        }

    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
