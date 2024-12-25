// let addWeek = (date) => {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday']
//     return date.getDay()
// }
let addWeek = (date) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'];
    const epoch = new Date('0001-01-01');
    const time = date - epoch;
    const day = time / (1000 * 60 * 60 * 24) % 14;
    return days[day];
}
// // console.log(addWeek(new Date('0001-01-08'))); // Output: Sunday


// // console.log(0%14)
// console.log(addWeek(new Date('0001-01-01'))) // Output: Monday
// console.log(addWeek(new Date('0001-01-02'))) // Output: Tuesday
// console.log(addWeek(new Date('0001-01-07'))) // Output: Sunday
// console.log(addWeek(new Date('0001-01-08'))) // Output: secondMonday
// console.log(addWeek(new Date('0001-01-09'))) // Output: secondTuesday

let timeTravel = (obj) => {
    let hourstosub = obj.date.getHours()
    let minutestosub = obj.date.getMinutes()
    let secondstosub = obj.date.getSeconds()
    obj.date.setHours(hourstosub - obj.hour)
    obj.date.setMinutes(minutestosub - obj.minute)
    obj.date.setSeconds(secondstosub - obj.second)

    console.log(obj.date)
}
// timeTravel({
//     date: new Date('2020-05-29 23:25:22'),
//     hour: 21,
//     minute: 22,
//     second: 22,
// })
