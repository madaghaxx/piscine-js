const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'];
let addWeek = (date) => {
    const epoch = new Date('0001-01-01');
    const time = date - epoch;
    const day = time / (1000 * 60 * 60 * 24)%14;
    return days[day];
}
let timeTravel = (obj) => {
    obj.date.setHours(obj.hour)
    obj.date.setMinutes(obj.minute)
    obj.date.setSeconds(obj.second)
    return obj.date
}
