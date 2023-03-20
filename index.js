// code your solution here
function saturdayFun(plan = 'roller-skate') {
    return `This Saturday, I want to ${plan}!`;
}
function mondayWork(place = 'go to the office') {
    return `This Monday, I will ${place}.`;
}

function wrapAdjective(emphatic) {
   
    return function symbol(result) {
       
        return `You are ${emphatic}${result}${emphatic}!`;
        }
    }

wrapAdjective('*')('a hard worker');